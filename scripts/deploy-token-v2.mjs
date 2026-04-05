// =============================================================
// AgentOfFomo ($AOFOMO) Token Deploy V2
// Correct order: Create → Metadata → Mint → Distribute → Revoke
// =============================================================

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createMetadataAccountV3,
  mplTokenMetadata,
  findMetadataPda,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  publicKey,
  signerIdentity,
  createSignerFromKeypair,
} from "@metaplex-foundation/umi";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { execSync } from "child_process";
import fs from "fs";

// ---- CONFIG ----
const RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=fb5c67f3-9097-41a5-a666-0cd67fb22c27";
const METADATA_URI = "https://agentoffomo.com/token-metadata.json";
const DECIMALS = 9;
const TOTAL_SUPPLY = 1000000000;

// Wallet addresses
const TREASURY = "2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U";
const LIQUIDITY = "CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV";
const OPS = "9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24";

const SOLANA_BIN =
  process.env.HOME +
  "/.local/share/solana/install/active_release/bin";
const SPL_TOKEN = `${SOLANA_BIN}/spl-token`;
const SOLANA = `${SOLANA_BIN}/solana`;
const DEPLOYER_KEYPAIR = process.env.HOME + "/.config/solana/deployer.json";

function run(cmd) {
  console.log(`  $ ${cmd}`);
  const out = execSync(cmd, { encoding: "utf-8" }).trim();
  if (out) console.log(`  ${out}`);
  return out;
}

// Load deployer keypair
const keypairFile = fs.readFileSync(DEPLOYER_KEYPAIR, "utf-8");
const secretKey = new Uint8Array(JSON.parse(keypairFile));

console.log("============================================");
console.log("  AgentOfFomo Token Deploy V2");
console.log("  Chain: Solana Mainnet");
console.log("  Supply: 1,000,000,000 AOFOMO");
console.log("============================================\n");

// Step 1: Configure CLI
console.log("[1/9] Configuring Solana CLI...");
run(`${SOLANA} config set --url "${RPC_URL}" --keypair "${DEPLOYER_KEYPAIR}"`);

// Step 2: Check balance
console.log("\n[2/9] Checking deployer balance...");
const balance = run(`${SOLANA} balance`);
console.log(`  Balance: ${balance}`);

// Step 3: Create token mint
console.log("\n[3/9] Creating token mint...");
const mintOutput = run(`${SPL_TOKEN} create-token --decimals ${DECIMALS}`);
const mintMatch = mintOutput.match(/Creating token ([A-Za-z0-9]+)/);
if (!mintMatch) {
  console.error("ERROR: Could not parse mint address");
  process.exit(1);
}
const MINT_ADDRESS = mintMatch[1];
console.log(`  ✅ Mint address: ${MINT_ADDRESS}`);

// Step 4: Set metadata BEFORE revoking authority
console.log("\n[4/9] Setting on-chain metadata via Metaplex...");
const umi = createUmi(RPC_URL).use(mplTokenMetadata());
const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(signer));

const mintPubkey = publicKey(MINT_ADDRESS);

try {
  await createMetadataAccountV3(umi, {
    metadata: findMetadataPda(umi, { mint: mintPubkey }),
    mint: mintPubkey,
    mintAuthority: signer,
    payer: signer,
    updateAuthority: signer.publicKey,
    data: {
      name: "AgentOfFomo",
      symbol: "AOFOMO",
      uri: METADATA_URI,
      sellerFeeBasisPoints: 0,
      creators: null,
      collection: null,
      uses: null,
    },
    isMutable: true,
    collectionDetails: null,
  }).sendAndConfirm(umi);
  console.log("  ✅ Metadata set: AgentOfFomo (AOFOMO)");
} catch (err) {
  console.error("  ERROR setting metadata:", err.message);
  process.exit(1);
}

// Step 5: Create deployer token account
console.log("\n[5/9] Creating deployer token account...");
run(`${SPL_TOKEN} create-account ${MINT_ADDRESS}`);

// Step 6: Mint total supply
console.log("\n[6/9] Minting 1,000,000,000 tokens...");
run(`${SPL_TOKEN} mint ${MINT_ADDRESS} ${TOTAL_SUPPLY}`);
console.log("  ✅ Minted 1B AOFOMO");

// Step 7: Distribute tokens
console.log("\n[7/9] Distributing tokens...");

console.log("  → Treasury (10%): 100,000,000");
run(
  `${SPL_TOKEN} transfer ${MINT_ADDRESS} 100000000 ${TREASURY} --fund-recipient --allow-unfunded-recipient`
);

console.log("  → Liquidity (25%): 250,000,000");
run(
  `${SPL_TOKEN} transfer ${MINT_ADDRESS} 250000000 ${LIQUIDITY} --fund-recipient --allow-unfunded-recipient`
);

console.log("  → Ops (25%): 250,000,000");
run(
  `${SPL_TOKEN} transfer ${MINT_ADDRESS} 250000000 ${OPS} --fund-recipient --allow-unfunded-recipient`
);

console.log("  Remaining in deployer (40%): 400,000,000");

// Step 8: Revoke mint authority
console.log("\n[8/9] Revoking mint authority...");
run(`${SPL_TOKEN} authorize ${MINT_ADDRESS} mint --disable`);
console.log("  ✅ Mint authority REVOKED");

// Step 9: Revoke freeze authority (if exists)
console.log("\n[9/9] Revoking freeze authority...");
try {
  run(`${SPL_TOKEN} authorize ${MINT_ADDRESS} freeze --disable`);
  console.log("  ✅ Freeze authority REVOKED");
} catch {
  console.log("  Freeze authority was never set — OK");
}

console.log("\n============================================");
console.log("  DEPLOYMENT V2 COMPLETE");
console.log("============================================");
console.log("");
console.log(`  Mint Address: ${MINT_ADDRESS}`);
console.log("  Name: AgentOfFomo");
console.log("  Symbol: AOFOMO");
console.log("  Supply: 1,000,000,000");
console.log("  Decimals: 9");
console.log("  Metadata: SET ✅");
console.log("  Mint Authority: REVOKED ✅");
console.log("");
console.log("  Allocations:");
console.log("    Community Reserve (40%): 400M → Deployer");
console.log(`    Liquidity Shield (25%):  250M → ${LIQUIDITY}`);
console.log(`    Mission Ops + Signal (25%): 250M → ${OPS}`);
console.log(`    Intel Treasury (10%): 100M → ${TREASURY}`);
console.log("");
console.log(`  Solscan: https://solscan.io/token/${MINT_ADDRESS}`);
console.log("============================================");

// Update token-metadata.json with new mint if needed
console.log("\n⚠️  UPDATE REQUIRED:");
console.log(`  Old mint was: C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q`);
console.log(`  New mint is:  ${MINT_ADDRESS}`);
console.log("  Update website Token.tsx and CLAUDE.md with the new mint address!");

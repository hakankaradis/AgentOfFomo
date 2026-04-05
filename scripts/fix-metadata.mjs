// Fix metadata for the V2 mint, then distribute and revoke

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
  percentAmount,
} from "@metaplex-foundation/umi";
import { execSync } from "child_process";
import fs from "fs";

const RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=fb5c67f3-9097-41a5-a666-0cd67fb22c27";
const MINT_ADDRESS = "C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q";
const METADATA_URI = "https://agentoffomo.com/token-metadata.json";

const TREASURY = "2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U";
const LIQUIDITY = "CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV";
const OPS = "9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24";

const SOLANA_BIN =
  process.env.HOME + "/.local/share/solana/install/active_release/bin";
const SPL_TOKEN = `${SOLANA_BIN}/spl-token`;
const DEPLOYER_KEYPAIR = process.env.HOME + "/.config/solana/deployer.json";

function run(cmd) {
  console.log(`  $ ${cmd.replace(RPC_URL, "RPC_URL")}`);
  const out = execSync(cmd, { encoding: "utf-8" }).trim();
  if (out) console.log(`  ${out}`);
  return out;
}

const keypairFile = fs.readFileSync(DEPLOYER_KEYPAIR, "utf-8");
const secretKey = new Uint8Array(JSON.parse(keypairFile));

const umi = createUmi(RPC_URL).use(mplTokenMetadata());
const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(signer));

const mintPubkey = publicKey(MINT_ADDRESS);

console.log("============================================");
console.log("  Setting metadata for: " + MINT_ADDRESS);
console.log("============================================\n");

// Step 1: Set metadata
console.log("[1/5] Setting on-chain metadata...");
try {
  const builder = createMetadataAccountV3(umi, {
    metadata: findMetadataPda(umi, { mint: mintPubkey }),
    mint: mintPubkey,
    mintAuthority: signer,
    payer: signer,
    updateAuthority: signer,
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
  });

  const result = await builder.sendAndConfirm(umi);
  console.log("  ✅ Metadata set successfully!");
} catch (err) {
  console.error("  ERROR:", err.message);
  console.error("  Full error:", JSON.stringify(err, null, 2).slice(0, 500));
  process.exit(1);
}

// Step 2: Create token account
console.log("\n[2/5] Creating deployer token account...");
run(`${SPL_TOKEN} create-account ${MINT_ADDRESS}`);

// Step 3: Mint supply
console.log("\n[3/5] Minting 1,000,000,000 tokens...");
run(`${SPL_TOKEN} mint ${MINT_ADDRESS} 1000000000`);
console.log("  ✅ Minted 1B AOFOMO");

// Step 4: Distribute
console.log("\n[4/5] Distributing tokens...");
console.log("  → Treasury (10%): 100M");
run(`${SPL_TOKEN} transfer ${MINT_ADDRESS} 100000000 ${TREASURY} --fund-recipient --allow-unfunded-recipient`);
console.log("  → Liquidity (25%): 250M");
run(`${SPL_TOKEN} transfer ${MINT_ADDRESS} 250000000 ${LIQUIDITY} --fund-recipient --allow-unfunded-recipient`);
console.log("  → Ops (25%): 250M");
run(`${SPL_TOKEN} transfer ${MINT_ADDRESS} 250000000 ${OPS} --fund-recipient --allow-unfunded-recipient`);
console.log("  Deployer keeps (40%): 400M");

// Step 5: Revoke authorities
console.log("\n[5/5] Revoking authorities...");
run(`${SPL_TOKEN} authorize ${MINT_ADDRESS} mint --disable`);
console.log("  ✅ Mint authority REVOKED");
try {
  run(`${SPL_TOKEN} authorize ${MINT_ADDRESS} freeze --disable`);
  console.log("  ✅ Freeze authority REVOKED");
} catch {
  console.log("  Freeze authority not set — OK");
}

console.log("\n============================================");
console.log("  DEPLOYMENT COMPLETE");
console.log("============================================");
console.log(`  Mint: ${MINT_ADDRESS}`);
console.log("  Name: AgentOfFomo");
console.log("  Symbol: AOFOMO");
console.log("  Metadata: ✅");
console.log("  Mint Auth: REVOKED ✅");
console.log(`  Solscan: https://solscan.io/token/${MINT_ADDRESS}`);
console.log("============================================");

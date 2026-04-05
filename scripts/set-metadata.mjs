// =============================================================
// Set on-chain metadata for $AOFOMO token using Metaplex
// =============================================================

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createMetadataAccountV3, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey, signerIdentity, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { findMetadataPda } from "@metaplex-foundation/mpl-token-metadata";
import fs from "fs";

const RPC_URL = "https://mainnet.helius-rpc.com/?api-key=fb5c67f3-9097-41a5-a666-0cd67fb22c27";
const MINT_ADDRESS = "C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q";
const METADATA_URI = "https://agentoffomo.com/token-metadata.json";

// Load deployer keypair
const keypairFile = fs.readFileSync(
  `${process.env.HOME}/.config/solana/deployer.json`,
  "utf-8"
);
const secretKey = new Uint8Array(JSON.parse(keypairFile));

// Setup Umi
const umi = createUmi(RPC_URL).use(mplTokenMetadata());

const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(signer));

const mintPubkey = publicKey(MINT_ADDRESS);

console.log("============================================");
console.log("  Setting $AOFOMO Token Metadata");
console.log("============================================");
console.log("");
console.log("  Mint:", MINT_ADDRESS);
console.log("  URI:", METADATA_URI);
console.log("  Authority:", signer.publicKey.toString());
console.log("");

try {
  const tx = await createMetadataAccountV3(umi, {
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

  console.log("  Metadata set successfully!");
  console.log("  View on Solscan: https://solscan.io/token/" + MINT_ADDRESS);
  console.log("============================================");
} catch (err) {
  console.error("Error:", err.message || err);
}

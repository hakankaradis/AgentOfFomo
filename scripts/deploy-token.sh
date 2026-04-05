#!/bin/bash
# =============================================================
# AgentOfFomo ($AOFOMO) Token Deploy Script — Solana Mainnet
# =============================================================

set -e

export PATH="/Users/hakankaradis/.local/share/solana/install/active_release/bin:$PATH"

# ---- CONFIG ----
RPC_URL="https://mainnet.helius-rpc.com/?api-key=fb5c67f3-9097-41a5-a666-0cd67fb22c27"
DEPLOYER_KEYPAIR="$HOME/.config/solana/deployer.json"
DECIMALS=9
TOTAL_SUPPLY=1000000000  # 1 Billion

# Wallet addresses
TREASURY="2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U"
LIQUIDITY="CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV"
OPS="9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24"

# Allocations
COMMUNITY_RESERVE=400000000   # 40%
LIQUIDITY_SHIELD=250000000    # 25%
MISSION_OPS=150000000         # 15%
SIGNAL_EXPANSION=100000000    # 10%
INTEL_TREASURY=100000000      # 10%

echo "============================================"
echo "  AgentOfFomo Token Deployment"
echo "  Chain: Solana Mainnet"
echo "  Supply: ${TOTAL_SUPPLY} AOFOMO"
echo "============================================"
echo ""

# Configure Solana CLI (uses config file, not --keypair flags)
echo "[1/8] Configuring Solana CLI..."
solana config set --url "$RPC_URL" --keypair "$DEPLOYER_KEYPAIR"

# Check deployer balance
echo ""
echo "[2/8] Checking deployer balance..."
BALANCE=$(solana balance)
echo "Deployer balance: $BALANCE"

# Create token mint
echo ""
echo "[3/8] Creating token mint (decimals: $DECIMALS)..."
MINT_OUTPUT=$(spl-token create-token --decimals $DECIMALS 2>&1)
echo "$MINT_OUTPUT"
MINT_ADDRESS=$(echo "$MINT_OUTPUT" | grep -oE "Creating token [A-Za-z0-9]+" | awk '{print $3}')

if [ -z "$MINT_ADDRESS" ]; then
  echo "ERROR: Could not parse mint address. Check output above."
  exit 1
fi
echo "✅ Mint address: $MINT_ADDRESS"

# Create deployer token account
echo ""
echo "[4/8] Creating deployer token account..."
spl-token create-account "$MINT_ADDRESS"

# Mint total supply to deployer
echo ""
echo "[5/8] Minting $TOTAL_SUPPLY tokens to deployer..."
spl-token mint "$MINT_ADDRESS" "$TOTAL_SUPPLY"
echo "✅ Minted $TOTAL_SUPPLY AOFOMO"

# Distribute tokens
echo ""
echo "[6/8] Distributing tokens to wallets..."

echo "  → Treasury (Intel Treasury 10%): $INTEL_TREASURY tokens"
spl-token transfer "$MINT_ADDRESS" "$INTEL_TREASURY" "$TREASURY" --fund-recipient

echo "  → Liquidity (Liquidity Shield 25%): $LIQUIDITY_SHIELD tokens"
spl-token transfer "$MINT_ADDRESS" "$LIQUIDITY_SHIELD" "$LIQUIDITY" --fund-recipient

echo "  → Ops (Mission Ops 15% + Signal Expansion 10%): $((MISSION_OPS + SIGNAL_EXPANSION)) tokens"
spl-token transfer "$MINT_ADDRESS" "$((MISSION_OPS + SIGNAL_EXPANSION))" "$OPS" --fund-recipient

echo ""
echo "  Remaining in deployer (Community Reserve 40%): $COMMUNITY_RESERVE tokens"

# Revoke mint authority
echo ""
echo "[7/8] Revoking mint authority (no more tokens can ever be created)..."
spl-token authorize "$MINT_ADDRESS" mint --disable
echo "✅ Mint authority REVOKED"

# Revoke freeze authority
echo ""
echo "[8/8] Revoking freeze authority (no accounts can ever be frozen)..."
spl-token authorize "$MINT_ADDRESS" freeze --disable
echo "✅ Freeze authority REVOKED"

echo ""
echo "============================================"
echo "  DEPLOYMENT COMPLETE"
echo "============================================"
echo ""
echo "  Mint Address: $MINT_ADDRESS"
echo "  Total Supply: $TOTAL_SUPPLY AOFOMO"
echo "  Decimals: $DECIMALS"
echo ""
echo "  Allocations:"
echo "    Community Reserve (40%): $COMMUNITY_RESERVE → Deployer wallet"
echo "    Liquidity Shield (25%):  $LIQUIDITY_SHIELD → $LIQUIDITY"
echo "    Mission Operations (15%): $MISSION_OPS → $OPS"
echo "    Signal Expansion (10%):   $SIGNAL_EXPANSION → $OPS"
echo "    Intel Treasury (10%):     $INTEL_TREASURY → $TREASURY"
echo ""
echo "  Mint Authority: REVOKED"
echo "  Freeze Authority: REVOKED"
echo ""
echo "  SAVE THE MINT ADDRESS ABOVE"
echo "============================================"

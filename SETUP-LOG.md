# AgentOfFomo — Setup & Deployment Log

Complete record of every step taken to set up the project, from zero to live token.

---

## 1. Project Initialization

### Tech Stack
- **Framework:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Firebase Hosting (static export)
- **Chain:** Solana (SPL Token)
- **RPC Provider:** Helius (mainnet)

### Commands Run
```bash
# Created Next.js project
npx create-next-app@latest agentoffomo --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-git

# Installed bs58 for key conversion
npm install bs58
```

### Project Structure
```
AgentOfFomo/
├── CLAUDE.md                    # Project blueprint & brand guide
├── SETUP-LOG.md                 # This file
├── firebase.json                # Firebase hosting config
├── .firebaserc                  # Firebase project link
├── next.config.ts               # Static export enabled
├── scripts/
│   └── deploy-token.sh          # Token deployment script
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, neon theme
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Landing page (all sections)
│   │   └── dossier/
│   │       └── page.tsx         # The Dossier (whitepaper equivalent)
│   └── components/
│       ├── Navbar.tsx           # Fixed nav with mobile menu
│       ├── Hero.tsx             # Hero with CTAs
│       ├── About.tsx            # "The Entity Has Been Activated"
│       ├── Capabilities.tsx     # 6 capability cards
│       ├── Lore.tsx             # Terminal-style origin story
│       ├── Token.tsx            # Tokenomics & mint info
│       ├── Roadmap.tsx          # 4-phase timeline
│       ├── Community.tsx        # Social links
│       └── Disclaimer.tsx       # Legal disclaimer footer
```

---

## 2. Wallet Setup

### Why Multiple Wallets
Separation of concerns and trust. Each wallet has a single purpose so the community can verify where tokens are and that allocations match what was promised.

### Wallets Created (all in Phantom, same account)
Created 4 wallets inside a single Phantom browser extension account. No separate emails needed — Phantom supports multiple wallets under one login.

| Wallet | Purpose | Solana Address |
|--------|---------|----------------|
| **Deployer** (v1 — COMPROMISED) | Original deployer, private key was exposed | `AKQr7MefYryjeUY36KE8Ky4xXjej9aGgT8Tg5CpRLM6d` |
| **Deployer2** (ACTIVE) | Creates token, holds Community Reserve | `3eGy84zttRs8fYwrtPV2t6SxVv4cwixGjg9XZ6mqbKK6` |
| **Treasury** | Intel Treasury (10%) | `2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U` |
| **Liquidity** | Liquidity Shield (25%) — for Raydium pool | `CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV` |
| **Ops** | Mission Operations (15%) + Signal Expansion (10%) | `9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24` |

### How to Create Wallets in Phantom
1. Open Phantom extension
2. Click hamburger menu or profile icon
3. Click "Add Account" or "+"
4. Select "Create New Wallet"
5. Rename appropriately
6. Repeat for each wallet

**Important:** Write down seed phrases on paper. Never store digitally.

### Security Note
The first deployer wallet (`AKQr7MefYryjeUY36KE8Ky4xXjej9aGgT8Tg5CpRLM6d`) had its private key accidentally exposed. A new deployer wallet was created and funds were transferred. The compromised wallet should never be used again.

---

## 3. Solana CLI Setup

### Installation
```bash
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"

# Add to PATH (also added to ~/.zprofile automatically)
export PATH="/Users/hakankaradis/.local/share/solana/install/active_release/bin:$PATH"
```

### Version Installed
- solana-cli 3.1.12
- spl-token-cli 5.5.0

### RPC Configuration
- **Provider:** Helius (helius.dev)
- **Plan:** Free tier
- **Endpoint:** `https://mainnet.helius-rpc.com/?api-key=<API_KEY>`
- **Why Helius:** Free, reliable, good rate limits for our needs

---

## 4. Private Key Export (Phantom → Solana CLI)

### Why This Was Needed
The Solana CLI needs a JSON keypair file to sign transactions. Phantom stores keys internally and exports them as base58-encoded strings. We needed to convert the format.

### Steps
1. In Phantom: Settings → Export Private Key → enter password → copy base58 string
2. Convert to JSON keypair file:

```bash
# Must run from project directory where bs58 is installed
cd /Users/hakankaradis/projects/memetokens/AgentOfFomo

node -e "const bs58 = require('bs58'); const fs = require('fs'); const key = bs58.default.decode('YOUR_PRIVATE_KEY'); fs.writeFileSync('/Users/hakankaradis/.config/solana/deployer.json', JSON.stringify(Array.from(key)));"
```

3. Verify the public key matches:
```bash
solana-keygen pubkey ~/.config/solana/deployer.json
# Should output: 3eGy84zttRs8fYwrtPV2t6SxVv4cwixGjg9XZ6mqbKK6
```

### Important
- NEVER share private keys in chat, messages, or any digital medium
- The deployer.json file at `~/.config/solana/deployer.json` contains the private key
- Delete this file after deployment is complete if desired

---

## 5. Token Deployment

### Token Parameters
| Parameter | Value |
|-----------|-------|
| **Name** | AgentOfFomo (to be set via metadata) |
| **Symbol** | AOFOMO (to be set via metadata) |
| **Mint Address** | `C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q` |
| **Total Supply** | 1,000,000,000 (1 Billion) |
| **Decimals** | 9 |
| **Mint Authority** | REVOKED (no more tokens can ever be minted) |
| **Freeze Authority** | NEVER SET (token was created without freeze capability) |
| **Program** | TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA |
| **Deploy Cost** | ~0.01 SOL |

### Deployment Commands (in order)

```bash
# 1. Configure CLI
solana config set \
  --url "https://mainnet.helius-rpc.com/?api-key=<API_KEY>" \
  --keypair ~/.config/solana/deployer.json

# 2. Check balance
solana balance

# 3. Create token mint
spl-token create-token --decimals 9
# Output: Creating token C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q

# 4. Create deployer's token account
spl-token create-account C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q

# 5. Mint entire supply
spl-token mint C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q 1000000000

# 6. Distribute to Treasury (10%)
spl-token transfer C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q 100000000 \
  2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U \
  --fund-recipient --allow-unfunded-recipient

# 7. Distribute to Liquidity (25%)
spl-token transfer C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q 250000000 \
  CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV \
  --fund-recipient --allow-unfunded-recipient

# 8. Distribute to Ops (25% = 15% + 10%)
spl-token transfer C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q 250000000 \
  9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24 \
  --fund-recipient --allow-unfunded-recipient

# 9. Revoke mint authority (irreversible)
spl-token authorize C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q mint --disable

# 10. Freeze authority was never set — no action needed
```

### Final Token Distribution

| Wallet | Role | Tokens | % |
|--------|------|--------|---|
| `3eGy84z...` (Deployer) | Community Reserve | 400,000,000 | 40% |
| `CNeFjN3...` (Liquidity) | Liquidity Shield | 250,000,000 | 25% |
| `9ViFe...` (Ops) | Mission Ops + Signal Expansion | 250,000,000 | 25% |
| `2UpBG...` (Treasury) | Intel Treasury | 100,000,000 | 10% |

### Transaction Signatures
- Mint creation: `648iewYoZNYb6irngv6JA1ztpJaW2Jcs4r6CCYKNJLnbo96EVZARQUvqpbDRi9tQfGAWuJ4kQo98yRZQAbLx6Yof`
- Token account creation: `3W9xowDjVEoGwxgkXuXmL8ef2KvzBxg6Xn75nLrG2qzq3M3hzydvCqbF7iscUbF5rGwyxmXHcMdjM6TRq9oW9LxW`
- Supply minting: `3grYzR55uUbXsasjL8xP8Qp8Yz2oF3t3Tn4kSaz1JgSEEhHXE9pPGWA5qz8X1adMV8Zf1HSWXLz3sJtjwqXXP33z`
- Treasury transfer: `QuiYCRZubMFqWJH3kKpzDH43N5sy2fUBnSF2hriBYmuBiXkpMoeo9wAs22oBW67uEQDF3uggzmVUUxtQfSpSsoa`
- Liquidity transfer: `4YvkCS4Q3e8wgtipzpD4j1Q2vTcEJPAnQkP88mPSAkWvjr62kKYmh6DdsWbDGjx9N17WfuKAbgVf9TMLfYmEByxE`
- Ops transfer: `2QbffjB1i85UDRXLTxsEPh6xbcQX5UZ2E8wGE7jQ6DjRispmvNVqV12nR26hsHNkNrZRFCbrjrLdLw79xjikX8cX`
- Mint authority revoked: `48oHkvgosd69PaHz834HYcvfL8HsYNRh9FX4bxHZzWmUYNBXrJpCYLnCKbVsRG7EdL9AwxZQVCuYcCVsodMWU7jc`

---

## 6. Firebase Setup

### Configuration
- **Project ID:** `agentoffomo`
- **Console:** console.firebase.google.com
- **Hosting:** Static files from `out/` directory (Next.js static export)

### How to Deploy
```bash
npm run build        # Builds static site to /out
firebase deploy --only hosting
```

### Files
- `firebase.json` — hosting config, rewrites, caching headers
- `.firebaserc` — links to Firebase project ID

---

## 7. Accounts & Services

| Service | Account | Status |
|---------|---------|--------|
| **Domain** | agentoffomo.com | Owned |
| **Firebase** | agentoffomo project | Active |
| **X (Twitter)** | @agentoffomo | Active |
| **Helius RPC** | Free tier | Active |
| **Phantom** | Single account, 5 wallets | Active |
| **Telegram** | TBD | Pending |
| **Discord** | TBD | Pending |
| **Project Email** | TBD (contact@agentoffomo.com) | Pending |

---

## 8. What's Done vs What's Missing

### DONE
- [x] Brand identity & CLAUDE.md blueprint
- [x] Domain (agentoffomo.com)
- [x] Next.js + Tailwind website with all V1 sections
- [x] The Dossier page
- [x] Firebase hosting configured
- [x] Website deployed to Firebase
- [x] Solana CLI installed
- [x] 4 wallets created in Phantom
- [x] Helius RPC configured
- [x] Token minted on Solana mainnet (1B supply)
- [x] Tokens distributed to all wallets
- [x] Mint authority revoked
- [x] X account (@agentoffomo)
- [x] Mascot art created

### TODO — Before Launch
- [ ] Token metadata (name "AgentOfFomo", symbol "AOFOMO", logo) — needs on-chain metadata via Metaplex
- [ ] Update website with real mint address
- [ ] Add mascot images to website (hero, about, etc.)
- [ ] Create favicon and OG image from mascot
- [ ] Raydium liquidity pool setup
- [ ] Telegram group
- [ ] Discord server
- [ ] Project email (contact@agentoffomo.com)
- [ ] Redeploy website to Firebase

### TODO — Post-Launch
- [ ] Pin mint address on all social channels
- [ ] Submit to Solana token list / Jupiter aggregator
- [ ] Submit to CoinGecko / CMC (when eligible)
- [ ] Content pipeline (memes, stickers, posts)
- [ ] FAQ page on website

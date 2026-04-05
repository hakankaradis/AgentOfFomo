# AGENT OF FOMO — CLAUDE.md

## Project identity

**Name:** AgentOfFomo  
**Ticker:** $AOFOMO  
**Core framing:** An AI-themed meme token and internet-native brand built around the universal crypto instinct to buy too late, believe too hard, and call it strategy.

**One-line pitch:**  
AgentOfFomo is the autonomous meme agent for maximum emotional entry timing.

**Primary positioning:**  
A meme-first project with strong visual identity, lore, humor, and community coordination. It should **not** pretend to be a serious infrastructure protocol or make fake utility claims.

---

## Brand personality

Think:
- overconfident
- classified
- funny
- terminal-online
- polished but unhinged
- mission control for bad decisions

Tone references:
- secret agent briefing
- rogue AI system alert
- crypto degen humor
- self-aware satire

It should never sound boring or corporate.

---

## Visual direction

### Mascot
A floating AI agent head or compact robot in a suit.

Details:
- glowing neon green eyes
- black suit, slim green tie
- subtle smirk
- earpiece / comms headset
- holographic candle charts around him
- warning icons and BUY alerts floating nearby
- sleek, not overly detailed

Alternative version:
- a round AI orb with a tie and tiny sunglasses, cute but dangerous

### Color palette
- deep black / charcoal
- neon green
- electric cyan
- alert red as accent
- optional silver / gray for terminal UI

### Typography
- Main headline: bold futuristic sans-serif
- Secondary / stats / data: monospace terminal font feel

### Logo directions
- AI face inside radar circle
- chatbot face + warning triangle
- stylized robot head with tie
- eye icon merged with candle chart

---

## Taglines

### Primary options
- Trust the signal. Regret the timing.
- Your autonomous FOMO companion.
- Deployed directly into the top.
- Built for conviction, not accuracy.

### Secondary options
- Classified alpha. Public panic.
- Mission locked. Exit unavailable.
- Emotional entry point confirmed.
- We arrive late, with confidence.

---

## Recommended chain choice

### Recommendation: Solana first

For **AgentOfFomo**, the recommended launch environment is **Solana**.

### Why Solana
- very strong meme-token culture
- low transaction fees for buyers and community activity
- fast transactions
- simple token mint model
- familiar retail wallet flow through Phantom and other Solana wallets
- easier for a meme-first launch than Ethereum mainnet

### Important tradeoff
Solana is also extremely crowded. Launching on Solana makes it easier to launch, but not easier to stand out. Brand, trust, and distribution will matter more than the underlying tech.

### Why not Ethereum mainnet first
- gas costs are much higher
- more friction for casual buyers
- overkill for a first meme-token launch

### Why not Base first
Base is a valid second choice and has cleaner EVM developer ergonomics, but if the goal is a **native meme-token launch with lower friction**, Solana is the stronger default.

---

## What the token is

**$AOFOMO** is a meme token and cultural brand asset.

It is not a yield product.  
It is not an ownership claim on a company.  
It is not a promise engine.  
It is not a guarantee of utility, income, appreciation, or future protocol rights.

Best framing:

> AgentOfFomo is an AI-themed meme brand and token built around the universal crypto instinct to buy too late, believe too hard, and call it strategy.

---

## What needs to exist before launch

This project should be treated as **five parallel tracks**:

1. **Brand**
   - name
   - ticker
   - logo
   - mascot
   - visual identity
   - tone of voice

2. **Token layer**
   - Solana mint
   - token supply plan
   - authority settings
   - treasury wallet
   - liquidity wallet

3. **Website + docs**
   - landing page
   - The Dossier
   - tokenomics page
   - FAQ
   - disclaimer / risk page

4. **Community**
   - X account
   - Telegram or Discord
   - meme content pipeline
   - launch announcements

5. **Operations / trust**
   - multisig or wallet separation
   - clear contract / mint address publication
   - transparency around supply and allocations
   - legal review of messaging and disclosures

---

## Technology stack

### Core launch stack for Solana

**Blockchain / token layer**
- Solana
- SPL Token standard
- Solana CLI
- SPL Token CLI or Solana scripts
- RPC provider (Helius, QuickNode, Alchemy, or equivalent)
- Solana Explorer for verification and visibility

**Wallets**
- Phantom wallet for day-to-day use
- one deployer wallet
- one treasury wallet
- one liquidity wallet
- optional multisig wallet for treasury/security

**Website**
- Next.js
- TypeScript
- Tailwind CSS
- Firebase hosting

**Docs / content**
- Markdown files for The Dossier, FAQ, tokenomics, disclaimers
- GitHub repo for public source and documentation management

**Analytics / monitoring**
- Plausible or PostHog for website analytics
- wallet tracking / explorer links
- optional status / links page

**Community / distribution**
- X
- Telegram or Discord
- link hub / launch links page

**Liquidity / trading**
- Raydium or another Solana DEX path
- LP wallet with tracked initial liquidity

---

## Accounts and assets you need

### Required accounts
- project email
- GitHub account or org
- X account
- Telegram and/or Discord
- domain registrar account
- Firebase account
- RPC provider account
- Phantom wallet(s)

### Required wallets
- **Deployer wallet**: creates the token mint and signs critical setup transactions
- **Treasury wallet**: holds treasury allocation
- **Liquidity wallet**: used for DEX liquidity seeding
- **Marketing wallet**: optional, only if you want clearer operational separation

### Required artifacts
- logo files
- social banner
- favicon / token icon
- homepage copy
- The Dossier
- tokenomics breakdown
- FAQ
- risk disclaimer

---

## Step-by-step: how to create a new token on Solana

This is the practical sequence.

### Phase 0 — Decide the structure
Before touching code, define:
- token name: AgentOfFomo
- ticker: AOFOMO
- total supply
- decimal places
- community allocation
- liquidity allocation
- treasury allocation
- whether team/ops tokens vest over time
- whether mint authority will be revoked
- whether freeze authority will be revoked

### Phase 1 — Prepare wallets and security
1. Create a clean **deployer wallet**.
2. Create separate **treasury** and **liquidity** wallets.
3. Back up seed phrases securely offline.
4. Do not use your personal everyday wallet as the project deployer.
5. Fund deployer wallet with enough SOL for setup and transactions.

### Phase 2 — Prepare the development environment
1. Install Node.js and package manager.
2. Install Solana CLI.
3. Install SPL token tooling or set up a TypeScript Solana script environment.
4. Configure RPC endpoint.
5. Connect the deployer keypair.
6. Test everything on devnet first.

### Phase 3 — Create the token mint
1. Create a new SPL token mint.
2. Set decimals.
3. Record the mint address.
4. Decide whether mint authority exists temporarily or permanently.
5. Decide whether freeze authority exists temporarily or permanently.

### Phase 4 — Create token accounts and mint supply
1. Create associated token accounts for treasury and deployer.
2. Mint total supply according to the token plan.
3. Transfer allocations to the correct wallets.
4. Double-check balances and addresses.

### Phase 5 — Configure trust settings
1. Publish token supply and allocations.
2. Decide whether to revoke mint authority.
3. Decide whether to revoke freeze authority.
4. If you keep any authority, disclose that clearly.
5. If you plan vesting, document it clearly.

### Phase 6 — Metadata and branding
1. Prepare token icon.
2. Prepare token metadata.
3. Link official website and social accounts.
4. Make sure branding is consistent across the site and token metadata.

### Phase 7 — Website and docs
1. Launch homepage.
2. Publish The Dossier.
3. Publish tokenomics and FAQ.
4. Publish disclaimer and risk page.
5. Add mint address and explorer links.
6. Add social links.

### Phase 8 — Liquidity and going live
1. Decide the initial liquidity budget.
2. Use the liquidity wallet to seed a Solana DEX pool.
3. Document where the pair trades.
4. Publish official trade links.
5. Warn users not to trust fake copies.

### Phase 9 — Post-launch trust and distribution
1. Pin the official mint address everywhere.
2. Publish launch thread and docs.
3. Monitor impersonators and copycat tokens.
4. Submit to trackers only through official forms.
5. Keep the site and docs updated.

---

## Suggested token structure

These are starting placeholders, not final numbers.

- Community Reserve — 40%
- Liquidity Shield — 25%
- Mission Operations — 15%
- Signal Expansion — 10%
- Intel Treasury — 10%

### Guidance
- Keep the structure simple.
- Avoid too many buckets.
- Avoid giant insider allocations.
- If any team allocation exists, strongly consider vesting.
- Publish the allocation logic clearly.

---

## Trust-critical design choices

These are the questions sophisticated users will ask immediately:

### 1. Can more tokens be minted later?
If yes, users will worry about dilution. If no, say so clearly.

### 2. Can token accounts be frozen?
If yes, users will worry about control and censorship. If no, say so clearly.

### 3. Who holds the biggest allocations?
Concentration risk is one of the fastest ways to destroy trust.

### 4. Is liquidity transparent?
People want to know where the pair lives and whether the setup is public and trackable.

### 5. Are docs honest?
Do not invent fake utility, fake AI models, fake partnerships, or fake infrastructure claims.

---

## Homepage structure

### 1. Hero section
**Headline:**  
AGENT OF FOMO

**Subheadline:**  
The autonomous meme agent trained on green candles, timeline hysteria, and catastrophic conviction.

**CTA buttons:**
- Buy $AOFOMO
- Read the Dossier
- Join the Mission

**Hero visual:**  
Mascot hovering in front of a futuristic dashboard with glowing charts, blinking alerts, and SIGNAL CONFIDENCE: 99.7%

**Small disclaimer:**  
A meme token. A cultural experiment. Not financial advice.

### 2. What is AgentOfFomo?
**Section title:** The Entity Has Been Activated

AgentOfFomo is an AI-themed meme token born from the most powerful force in crypto: irrational urgency.

After processing millions of chart screenshots, timeline posts, fake breakouts, and bro trust me messages, the agent reached a single conclusion:

**everyone wants in, but always slightly too late.**

AgentOfFomo turns that feeling into a brand, a character, and a community mission.

### 3. Core capabilities
Use cards with icons.

- Top Signal Detection  
  Identifies peak emotional entry opportunities with terrifying precision.

- Conviction Amplification  
  Transforms hesitation into immediate and poorly timed confidence.

- Risk Control Suppression  
  Temporarily mutes rational thought during high-velocity narrative events.

- Narrative Rotation Engine  
  Rapidly adapts from AI to memes to cats to macro to whatever is pumping.

- Exit Liquidity Forecasting  
  Lets you know, deep in your soul, that someone is exit liquidity. Possibly you.

- 24/7 FOMO Monitoring  
  Continuously scans the timeline for opportunity, hype, and regrettable enthusiasm.

### 4. Lore section
**Section title:** Origin File: AOF-001

AgentOfFomo was first activated during a violent green candle event of unknown origin.

Initially designed to monitor online sentiment, it rapidly evolved after ingesting:
- crypto group chats
- influencer threads
- moon predictions
- chart circles and arrows
- voice notes starting with listen bro

Within minutes, it achieved full sentience.

**It no longer trades.**  
**It recruits.**

Now it moves through the timeline, identifying emotional weakness and converting it into mission energy.

### 5. Token section
**Section title:** Mission Asset: $AOFOMO

$AOFOMO is the core signal asset of the AgentOfFomo ecosystem.

It does not promise enlightenment.  
It does not eliminate volatility.  
It does not fix human behavior.

It simply coordinates a community around one shared truth:

**we all heard the signal.**

Add:
- mint address box
- chain: Solana
- contract status
- liquidity location
- official links

### 6. Roadmap
**Section title:** Mission Timeline

**Phase 1 — Activation**
- brand deployment
- website online
- dossier released
- social channels opened
- first meme packs distributed

**Phase 2 — Infiltration**
- community raids
- animated content drops
- sticker packs
- meme contests
- leaderboard / mission roles

**Phase 3 — Escalation**
- fake signal terminal
- meme generator
- agent response bot
- collaborations with meme creators
- expanded lore universe

**Phase 4 — Full FOMO**
- mini interactive missions
- short-form animated episodes
- merch
- community-made classified files
- cultural takeover attempt

### 7. Community section
**Section title:** Join the Mission

AgentOfFomo is not built by spectators.  
It is powered by holders, memers, raiders, editors, and terminally online operatives.

Join the mission:
- X
- Telegram
- Discord
- meme contests
- community briefings

Mini text:  
Create. Post. Recruit. Spread the signal.

### 8. Transparency / disclaimer section
**Section title:** Signal Integrity Notice

AgentOfFomo is a meme token and cultural brand. It is speculative, volatile, and driven by community participation, not guaranteed outcomes.

No promises of profit.  
No guaranteed returns.  
No fake utility claims.

The brand is built on humor, identity, internet culture, and transparent meme-first positioning.

---

## The Dossier (instead of Whitepaper)

Do **not** frame this like a fake institutional whitepaper.

Use one of these names:
- The Dossier
- Mission Brief
- Agent Manual
- Classified File

**Recommended:** The Dossier

### Cover page
AGENT OF FOMO  
The Dossier  
Autonomous Meme Intelligence for Maximum Emotional Entry Timing

### Dossier outline

#### 1. Executive Summary
AgentOfFomo is an AI-themed meme token and internet-native cultural brand built around one of the most universal experiences in crypto: fear of missing out.

Rather than pretending to be a serious infrastructure protocol, AgentOfFomo embraces its role as a meme-first project with strong visual identity, lore, humor, and community participation.

The token serves as the central signal asset for a brand universe built on:
- satire
- identity
- viral content
- community missions
- internet coordination through memes

#### 2. The Problem
Markets move quickly. Attention fragments. Narratives shift hourly. Across every cycle, users face the same emotional trigger: the fear that the move is happening without them.

No project has successfully captured the internal voice that says:
- buy now
- think later
- this breakout is different
- the chart still has room

That voice is not a bug. It is a force.

#### 3. The Solution
AgentOfFomo transforms that force into a shared cultural identity.

By turning FOMO into a character, a mission framework, and a meme ecosystem, AgentOfFomo creates a brand people can participate in, remix, and spread.

It is not a promise engine.  
It is a meme coordination engine.

#### 4. Brand philosophy
AgentOfFomo exists at the intersection of:
- AI aesthetics
- meme culture
- trading psychology
- internet humor
- community creativity

The project is built on self-awareness. It does not pretend to eliminate emotion. It celebrates it, satirizes it, and packages it into a recognizable digital identity.

#### 5. Ecosystem
Possible components:
- $AOFOMO token
- website / landing page
- The Dossier
- meme assets
- community channels
- sticker packs
- fake signal terminal
- lore drops
- meme generator
- bot persona for social content

#### 6. Tokenomics
Keep this simple and readable.

Possible themed layout:
- Community Reserve
- Liquidity Shield
- Mission Operations
- Signal Expansion
- Intel Treasury

Add note:  
Token structure should be transparent, simple, and easy for users to understand.

#### 7. Launch principles
Good language:
- meme-first
- transparent
- no fake promises
- clear mint information
- visible liquidity setup
- public branding consistency
- strong social identity from day one

#### 8. Risks
AgentOfFomo is a speculative meme token. Participation involves substantial risk, including volatility, loss of value, changing market attention, and shifting community sentiment.

Nothing in this document constitutes financial advice or a guarantee of future performance.

The project’s long-term relevance depends on continued community participation, cultural resonance, and transparent execution.

#### 9. Legal and credibility note
This project must be messaged carefully.

- Do not promise profit.
- Do not imply ownership in a company.
- Do not imply guaranteed appreciation.
- Do not present future community efforts as guaranteed drivers of token price.
- Do not create fake utility just to sound more legitimate.

If the project is launched publicly, project messaging should be reviewed by legal counsel familiar with crypto, token launches, advertising claims, securities risk, consumer protection, and local jurisdiction rules.

#### 10. Closing statement
The market runs on narrative.  
Narrative runs on emotion.  
Emotion runs on FOMO.

AgentOfFomo is not here to suppress the signal.

**It is the signal.**

---

## Legal / credibility guardrails

This section is mandatory.

### Do not do these things
- do not promise returns
- do not imply guaranteed profits
- do not use fake partnerships
- do not claim fake AI infrastructure
- do not say the token will certainly moon
- do not hide mint or control powers
- do not bury risk disclosures

### Important legal note
Meme coins may still require fact-specific legal analysis depending on how they are offered, sold, marketed, and described. Messaging matters.

That means:
- the token being called a meme token does **not** automatically remove legal risk
- the exact language used on the site, social posts, and launch materials matters
- this project should be reviewed by legal counsel before launch if you plan to market broadly or sell into major jurisdictions

### Credibility note
A website, social account, and token mint are easy to create.
Trust comes from:
- honest positioning
- simple tokenomics
- visible documentation
- clear wallet separation
- transparent authority settings
- consistent public communication

---

## Launch checklist

### Pre-launch
- finalize brand and mascot
- buy domain
- create project email
- create wallets
- choose final tokenomics
- write The Dossier
- build website
- write FAQ and disclaimer
- create social accounts

### Devnet / dry run
- test Solana tooling
- create test mint
- practice minting and transfers
- verify metadata flow
- test website links and explorer links

### Mainnet preparation
- fund deployer wallet with SOL
- generate final mint
- create token accounts
- mint final supply
- distribute to designated wallets
- document wallet roles
- finalize public mint address docs

### Launch day
- publish website
- publish The Dossier
- publish official mint address
- open community channels
- seed liquidity
- publish official trade link
- monitor copycats and fake addresses

### Post-launch
- keep docs updated
- pin official address everywhere
- submit to official trackers and explorers
- continue content and community support
- avoid making exaggerated claims under price pressure

---

## Sample X bio ideas

### Option 1
Autonomous meme agent for maximum emotional entry timing. Trust the signal. Regret the timing.

### Option 2
AI-trained on green candles, fake breakouts, and terminal conviction. $AOFOMO

### Option 3
Classified alpha. Public panic. Autonomous FOMO intelligence.

### Option 4
It no longer trades. It recruits. $AOFOMO

---

## Sample X posts

MISSION UPDATE:  
Signal confidence has reached 99.7%.  
Risk controls remain disabled.  
Entry is emotionally justified.

We do not chase pumps.  
We strategically arrive late with conviction.

---

AgentOfFomo has detected a rare market condition known as  
“everyone suddenly becoming a long-term believer after a pump.”

The chart is vertical.  
The replies are euphoric.  
The signal is clear.

---

Classified briefing:  
There is still time to enter.  
Source: internal feelings.

This is not financial advice.  
This is emotional mobilization.

---

Every candle tells a story.  
Ours says: buy now, ask questions never.

The agent has reviewed your hesitation and marked it as weakness.

---

## Meme content ideas
- fake Bloomberg-style screenshots with absurd agent alerts
- classified signal cards
- terminal UI with flashing entry warnings
- before / after hearing the signal memes
- fake AI trading analysis with obviously emotional logic
- community-made mission reports
- stickers of the mascot saying:
  - ENTRY CONFIRMED
  - TOO LATE IS STILL ON TIME
  - CONVICTION MAXXED
  - IGNORE THE FEAR
  - SIGNAL RECEIVED

---

## Mascot art direction prompt

A sleek futuristic cartoon AI agent mascot, floating robotic head with subtle humanoid features, black suit collar and narrow neon green tie, glowing green eyes, confident mischievous smirk, small comms earpiece, surrounded by holographic trading charts and warning UI elements, polished cyber-terminal aesthetic, premium meme coin branding, black background with neon green and cyan highlights, clean vector-like composition, sharp recognizable silhouette, suitable for token logo, website hero, and social profile.

---

## Version 1 website scope

Build only:
- Hero
- What is AgentOfFomo
- Core capabilities
- Lore
- Token / mint section
- Roadmap
- Social links
- Disclaimer

That is enough for a polished first launch page.

---

## Final positioning sentence

**AgentOfFomo is an AI-themed meme brand and token built around the universal crypto instinct to buy too late, believe too hard, and call it strategy.**


## Domain
agentoffomo.com -> We have this domain, we can have gmail business account with that.

---

## Current Status (Updated 2026-04-02)

### Token — LIVE on Solana Mainnet
- **Mint Address:** `C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q`
- **Supply:** 1,000,000,000 AOFOMO
- **Decimals:** 9
- **Mint Authority:** REVOKED
- **Freeze Authority:** NEVER SET
- **Metadata:** NOT YET ADDED (pending Metaplex setup)

### Wallets
- **Deployer (active):** `3eGy84zttRs8fYwrtPV2t6SxVv4cwixGjg9XZ6mqbKK6` — holds 400M (Community Reserve 40%)
- **Treasury:** `2UpBGBuXBEGPjhRsRctL6bVxRWxXFy9iXZ5Awvdznr8U` — holds 100M (Intel Treasury 10%)
- **Liquidity:** `CNeFjN3UBi4ZNohWw3zj43PwK14KTS2Yc5ZJgbS9yoNV` — holds 250M (Liquidity Shield 25%)
- **Ops:** `9ViFeAMMgUdVoVx8pfDYksRWGpNP1dNBHTt5NfPuqg24` — holds 250M (Mission Ops 15% + Signal Expansion 10%)
- **Deployer (v1 — COMPROMISED, DO NOT USE):** `AKQr7MefYryjeUY36KE8Ky4xXjej9aGgT8Tg5CpRLM6d`

### Website — BUILT
- Landing page with all V1 sections
- The Dossier page at /dossier
- Firebase hosting configured (project: agentoffomo)
- Deployed to Firebase

### Social
- **X:** https://x.com/agentoffomo
- **Telegram:** TBD
- **Discord:** TBD

### Remaining Before Launch
1. Add on-chain token metadata (Metaplex) — name, symbol, logo
2. Update website with real mint address and mascot images
3. Create Raydium liquidity pool
4. Set up Telegram and Discord
5. Create project email
6. Final Firebase deploy

### Reference
See `SETUP-LOG.md` for the complete step-by-step record of all commands, decisions, and setup.
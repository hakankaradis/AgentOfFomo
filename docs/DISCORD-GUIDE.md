# AgentOfFomo Discord Setup & Management Guide

> Classification Level: OPERATIONAL
> Document Status: ACTIVE
> Last Updated: 2026-04-02

---

## Table of Contents

1. [Server Setup](#1-server-setup)
2. [Channel Structure](#2-channel-structure)
3. [Roles & Permissions](#3-roles--permissions)
4. [Bots to Install](#4-bots-to-install)
5. [Moderation](#5-moderation)
6. [Engagement Strategies](#6-engagement-strategies)
7. [Growth Tactics](#7-growth-tactics)
8. [Content to Pin](#8-content-to-pin)
9. [Launch Day Discord Plan](#9-launch-day-discord-plan)

---

## 1. Server Setup

### Server Name

**AgentOfFomo HQ**

### Server Icon

Use the AgentOfFomo mascot head (the floating AI agent with glowing neon green eyes, black suit collar, and slim green tie) on a pure black background. The icon should be recognizable at small sizes. Export at 512x512 minimum.

### Server Banner

A wide banner showing the mascot in front of a holographic terminal dashboard with glowing candle charts, warning icons, and the text "AGENT OF FOMO" in bold futuristic sans-serif. Color palette: deep black background, neon green and electric cyan highlights, subtle alert red accents.

Recommended dimensions: 960x540.

### Server Description

```
Autonomous Meme Intelligence for Maximum Emotional Entry Timing.

AgentOfFomo is an AI-themed meme token and cultural brand on Solana.
Trust the signal. Regret the timing. $AOFOMO

agentoffomo.com
```

### Verification Level

Set to **Medium** (must have a verified email and be registered on Discord for longer than 5 minutes). This blocks throwaway raid accounts without creating excessive friction for legitimate joiners.

After reaching 500+ members, consider raising to **High** (must also be a member of the server for 10 minutes before they can send messages).

### Community Features to Enable

- **Community Server** -- Enable this in Server Settings > Community. This unlocks Announcement channels, Server Discovery eligibility, Welcome Screen, and Server Insights.
- **Welcome Screen** -- Configure with a custom message and channel shortcuts (see below).
- **Server Discovery** -- Enable once you meet the requirements (500+ members). Add tags: `crypto`, `meme`, `solana`, `ai`, `trading`.
- **Membership Screening** -- Enable and add a rules agreement gate (see Moderation section for the rules template).

### Welcome Screen Configuration

Welcome message:

```
SIGNAL DETECTED. NEW OPERATIVE IDENTIFIED.

Welcome to AgentOfFomo HQ. You have been recruited.

Your mission: meme, hold, and spread the signal. Exit strategy not included.
```

Channel shortcuts to display:

| Channel | Description |
|---------|-------------|
| #mission-briefing | Official announcements and intel drops |
| #the-bullpen | General chat with fellow operatives |
| #rules-of-engagement | Read the rules before proceeding |
| #role-assignment | Pick your division and verify your wallet |

---

## 2. Channel Structure

All channel and category names follow the classified agent / rogue AI theme.

### Category: COMMAND CENTER

Core information channels. Read-only for most members.

| Channel | Purpose | Permissions |
|---------|---------|-------------|
| #mission-briefing | Official announcements (converted to Announcement channel type so other servers can follow) | Read-only. Only Command and Core Team can post. |
| #rules-of-engagement | Server rules and code of conduct | Read-only |
| #intel-report | Project updates, development logs, partnership news | Read-only |
| #signal-status | Bot-fed price updates, market cap, holder count | Read-only, bot posts only |
| #verified-links | Pinned official links, mint address, how to buy | Read-only |

### Category: FIELD OPERATIONS

Active community channels.

| Channel | Purpose |
|---------|---------|
| #the-bullpen | General chat, the main social channel |
| #meme-armory | Post and share memes. Meme contest submissions go here. |
| #chart-surveillance | Price discussion, chart analysis, trading talk |
| #alpha-intercepts | Community members sharing alpha, calls, market observations |
| #tinfoil-room | Off-topic, conspiracy theories, shitposting, unhinged takes |
| #media-vault | Fan art, videos, edits, content creation showcase |

### Category: SUPPORT & INTEL

Help and information channels.

| Channel | Purpose |
|---------|---------|
| #new-recruit-intake | Questions from new members, how to get started |
| #tech-support | Wallet issues, transaction help, buying help |
| #bug-reports | Report website or bot issues |
| #suggestions-box | Community feedback and feature requests |

### Category: MISSION EVENTS

Event and activity channels.

| Channel | Purpose |
|---------|---------|
| #active-missions | Current contests, raids, community tasks |
| #mission-log | Archive of past events and winners |
| #ama-briefings | Scheduled AMA sessions (can be locked between events) |
| #polls-and-votes | Community polls and governance-style votes |

### Category: COMMS (Voice Channels)

| Channel | Purpose |
|---------|---------|
| Situation Room | General voice hangout |
| War Room | Focused discussion, limited access during events |
| Debriefing Lounge | Chill voice channel, music bot enabled |
| Stage: Live Briefing | Stage channel for AMAs, announcements, and community calls |

### Category: CLASSIFIED (Private / Team Channels)

Hidden from regular members. Only visible to team roles.

| Channel | Purpose | Access |
|---------|---------|--------|
| #command-deck | Core team strategy and decision-making | Founders, Core Team |
| #mod-ops | Moderator coordination, incident reports, user flags | Moderators, Core Team |
| #content-lab | Content planning, meme pipeline, social media drafts | Content Team, Core Team |
| #dev-bunker | Development discussion, deployment coordination | Developers, Core Team |
| #treasury-ledger | Wallet updates, treasury movements, financial transparency notes | Founders only |
| #legal-review | Messaging review, compliance notes, disclaimer checks | Founders only |

---

## 3. Roles & Permissions

### Role Hierarchy (Top to Bottom)

Roles are listed from highest to lowest priority. Discord applies permissions from the highest role a user holds.

#### Team Roles

| Role | Color | Purpose |
|------|-------|---------|
| **The Architect** | Gold (#FFD700) | Project founder(s). Full admin permissions. |
| **Core Command** | Electric Cyan (#00FFFF) | Core team members. Near-full admin. |
| **Field Commander** | Neon Green (#39FF14) | Senior moderators. Can manage messages, mute, kick, ban. |
| **Operative Handler** | Bright Green (#00FF00) | Junior moderators. Can manage messages, mute, timeout. |
| **Content Specialist** | Cyan (#00CED1) | Content creators on the team. Access to content-lab. |
| **Dev Unit** | Purple (#8A2BE2) | Developers. Access to dev-bunker. |

#### Bot Roles

| Role | Color | Purpose |
|------|-------|---------|
| **Signal Bot** | Gray (#808080) | Generic bot role for utility bots |
| **Verification Agent** | Dark Green (#006400) | Holder verification bot role |
| **Guard Dog** | Red (#FF0000) | Moderation bot role |

#### Community Roles (Earned)

| Role | Color | How to Earn |
|------|-------|-------------|
| **Diamond Operative** | White (#FFFFFF) | Verified holder of 1M+ $AOFOMO |
| **Gold Operative** | Gold (#DAA520) | Verified holder of 500K+ $AOFOMO |
| **Silver Operative** | Silver (#C0C0C0) | Verified holder of 100K+ $AOFOMO |
| **Bronze Operative** | Bronze (#CD7F32) | Verified holder of any $AOFOMO |
| **Signal Verified** | Green (#32CD32) | Completed wallet verification (holder of any amount) |
| **Meme Agent** | Neon Green (#39FF14) | Won a meme contest or created viral content |
| **Raid Captain** | Alert Red (#FF4444) | Led or organized a successful community raid |
| **OG Recruit** | Cyan (#00CED1) | Joined before or on launch day |
| **New Recruit** | Gray (#A9A9A9) | Default role assigned on join after passing screening |

#### Special Event Roles

| Role | Color | Purpose |
|------|-------|-------------|
| **AMA Cleared** | Yellow (#FFD700) | Can speak during AMA stage events |
| **Contest Runner** | Orange (#FFA500) | Currently participating in an active contest |

### Permission Breakdown

| Permission | Architect | Core Command | Field Commander | Operative Handler | Verified Holders | New Recruit |
|------------|-----------|--------------|-----------------|-------------------|-------------------|-------------|
| Administrator | Yes | No | No | No | No | No |
| Manage Server | Yes | Yes | No | No | No | No |
| Manage Channels | Yes | Yes | No | No | No | No |
| Manage Roles | Yes | Yes | Yes (below own) | No | No | No |
| Ban Members | Yes | Yes | Yes | No | No | No |
| Kick Members | Yes | Yes | Yes | Yes | No | No |
| Timeout Members | Yes | Yes | Yes | Yes | No | No |
| Manage Messages | Yes | Yes | Yes | Yes | No | No |
| Mention @everyone | Yes | Yes | Yes | No | No | No |
| Send Messages | Yes | Yes | Yes | Yes | Yes | Yes |
| Embed Links | Yes | Yes | Yes | Yes | Yes | No |
| Attach Files | Yes | Yes | Yes | Yes | Yes | No |
| Use External Emojis | Yes | Yes | Yes | Yes | Yes | No |
| Add Reactions | Yes | Yes | Yes | Yes | Yes | Yes |
| Connect (Voice) | Yes | Yes | Yes | Yes | Yes | Yes |
| Speak (Voice) | Yes | Yes | Yes | Yes | Yes | Yes |
| Use Stage | Yes | Yes | Yes | Yes | No | No |

### How to Earn Roles

**Holder Roles (Automatic via verification bot):**
Members connect their Solana wallet through the verification bot (Matrica or Grape). The bot checks $AOFOMO balance and assigns the appropriate tier. Balances are re-checked periodically (every 24 hours recommended).

**OG Recruit:**
Manually assigned or auto-assigned to anyone who joins before or on launch day. Lock this role after launch day so it cannot be assigned again.

**Meme Agent:**
Awarded by moderators to meme contest winners or community members who create standout content. This is a permanent badge of honor.

**Raid Captain:**
Awarded by moderators when a member organizes and leads a successful community social media raid (coordinated posting on X, engagement push, etc.).

---

## 4. Bots to Install

### Essential Bots

#### 1. Carl-bot (Moderation + Reaction Roles)

**Why Carl-bot over MEE6:** Carl-bot has a more generous free tier, better reaction role support, and strong auto-moderation. MEE6's premium features are expensive and the free version pushes upgrade prompts to users.

**Setup steps:**
1. Invite from carl.gg
2. Set prefix to `!` or use slash commands
3. Configure auto-moderation (see Moderation section)
4. Set up reaction roles in #role-assignment
5. Configure welcome messages (see below)
6. Set up logging to #mod-ops

**Welcome message configuration:**
```
SIGNAL INTERCEPTED.

Welcome to AgentOfFomo HQ, {user}. You are Recruit #{count}.

Your first orders:
1. Read #rules-of-engagement
2. Verify your wallet in #role-assignment
3. Report to #the-bullpen

Trust the signal. Regret the timing.
```

**Reaction roles message in #role-assignment:**

Post a message like this and add reactions for self-assignable roles:

```
DIVISION ASSIGNMENT

React to select your interests. These do not grant special permissions, they help us tag you for relevant pings.

:chart_with_upwards_trend: -- Chart Watcher (get pinged for price alerts)
:art: -- Meme Division (get pinged for meme contests)
:loudspeaker: -- Raid Squad (get pinged for social raids)
:mega: -- AMA Listener (get pinged for upcoming AMAs)
:hammer: -- Builder (interested in contributing to the project)
```

#### 2. Matrica (Holder Verification)

**Why Matrica:** Native Solana support, clean UX, supports SPL token verification, active development, widely used in Solana communities.

**Alternative:** Grape Protocol's verification tools.

**Setup steps:**
1. Go to matrica.io and connect your Discord server
2. Configure a verification rule for $AOFOMO using the mint address
3. Set token thresholds for each holder tier:
   - Bronze Operative: any amount > 0
   - Silver Operative: 100,000+ tokens
   - Gold Operative: 500,000+ tokens
   - Diamond Operative: 1,000,000+ tokens
4. Map each threshold to the corresponding Discord role
5. Set re-verification interval to 24 hours
6. Post the verification link in #role-assignment with instructions

**Verification instructions message for #role-assignment:**

```
WALLET VERIFICATION PROTOCOL

To verify your $AOFOMO holdings and earn your Operative rank:

1. Click the verification link below
2. Connect your Solana wallet (Phantom recommended)
3. Sign the message (this is free, no transaction required)
4. Your role will be assigned automatically based on your holdings

[Verify Here] (insert Matrica verification link)

Roles update every 24 hours. If you buy more, just re-verify.
```

#### 3. Discord AutoMod (Built-in)

Discord's native AutoMod is free and runs before any message is posted. Use it as a first layer of defense.

**Setup steps:**
1. Go to Server Settings > AutoMod
2. Enable "Block Mention Spam" -- set threshold to 5 mentions per message
3. Enable "Block Spam Content" -- uses Discord's ML spam filter
4. Create custom keyword filter rules (see Moderation section for word lists)
5. Create a custom rule to block messages with excessive caps (optional)

### Nice-to-Have Bots

#### 4. Apollo (Scheduled Events)

Useful for scheduling AMAs, community calls, and contests with RSVP tracking.

**Setup:** Invite from apollo.fyi, link to a calendar, and create events that post reminders to #active-missions.

#### 5. YAGPDB (Yet Another General Purpose Discord Bot)

Backup moderation bot and advanced auto-responder. Useful for setting up custom commands like:

- `!contract` -- replies with the mint address
- `!buy` -- replies with a how-to-buy summary
- `!links` -- replies with all official links
- `!price` -- replies with current price info

**Custom command examples:**

```
Command: !contract
Response:
CLASSIFIED ASSET IDENTIFIER
Mint Address: [INSERT MINT ADDRESS]
Chain: Solana
Verify on Solscan: [INSERT LINK]
DO NOT trust any other address.
```

```
Command: !buy
Response:
ACQUISITION PROTOCOL
1. Install Phantom wallet (phantom.app)
2. Fund wallet with SOL
3. Go to [INSERT DEX LINK]
4. Swap SOL for $AOFOMO
5. Welcome to the mission, operative.
```

#### 6. Tip.cc or Botto (Tipping Bot)

Allows members to tip each other small amounts of $AOFOMO or SOL. Encourages engagement and rewards good memes.

#### 7. Polls Bot (Simple Poll or Carl-bot polls)

Carl-bot includes poll functionality. If you want something more advanced, Simple Poll is lightweight and effective.

#### 8. Midjourney / Image Generation Channel (Optional)

If budget allows, a channel where members can generate AgentOfFomo-themed images using a connected image bot.

---

## 5. Moderation

### Rules Template

Post the following in #rules-of-engagement:

```
AGENT OF FOMO -- RULES OF ENGAGEMENT
Classification: MANDATORY READING

By entering this server, you agree to the following operational protocols.
Violation results in timeout, demotion, or permanent exile.

1. NO SCAMS, PHISHING, OR FAKE LINKS
   Do not post wallet drainers, fake airdrops, phishing links, or
   impersonation attempts. Instant ban. No appeal.

2. NO IMPERSONATION
   Do not pretend to be a team member, moderator, or official bot.
   Team members will NEVER DM you first asking for funds or wallet access.

3. NO SPAM OR SELF-PROMOTION
   Do not shill other tokens, NFTs, or projects without permission.
   Do not DM members with promotions. Do not flood channels.

4. NO HARASSMENT OR HATE
   No racism, sexism, homophobia, threats, doxxing, or targeted harassment.
   Keep it degen, not degenerate.

5. NO NSFW CONTENT
   Keep it clean enough for a public server.

6. USE CHANNELS CORRECTLY
   Memes go in #meme-armory. Price talk goes in #chart-surveillance.
   Off-topic goes in #tinfoil-room. Respect the channel structure.

7. NO FINANCIAL ADVICE
   Nothing here is financial advice. Do not tell people to buy or sell
   with guarantees of profit. We are a meme project, not a hedge fund.

8. RESPECT THE TEAM AND MODERATORS
   Mods are volunteers. Disagree respectfully. If you have an issue
   with moderation, DM a Field Commander.

9. NO BEGGING
   Do not beg for tokens, airdrops, or giveaways in chat.

10. HAVE FUN
    This is a meme project. The signal is strong. The vibes are mandatory.

Penalties:
- Minor offenses: Warning > Timeout (1hr) > Timeout (24hr) > Kick
- Major offenses (scams, phishing, hate): Instant ban
- Repeated minor offenses: Ban

Report issues to @Operative Handler or @Field Commander.
```

### Auto-Moderation Setup

#### Discord Native AutoMod Rules

**Rule 1: Scam Keywords**
- Trigger: keyword filter
- Keywords: `free airdrop`, `claim your tokens`, `connect wallet to claim`, `validate your wallet`, `sync wallet`, `dm me to claim`, `metamask support`, `trust wallet support`, `send SOL to`, `guaranteed profit`, `100x guaranteed`, `whitelist spot dm`
- Action: Block message + alert to #mod-ops
- Exempt roles: Core Command, Field Commander

**Rule 2: Competitor Shill Filter**
- Trigger: keyword filter
- Keywords: Add specific competitor token names or shill phrases you want to block
- Action: Block message + alert to #mod-ops
- Exempt roles: Core Command, Field Commander

**Rule 3: Excessive Mentions**
- Trigger: Mention spam
- Threshold: 4+ mentions per message
- Action: Timeout 60 minutes + alert to #mod-ops

**Rule 4: Spam Content**
- Trigger: Discord's ML spam detection
- Action: Block message + alert to #mod-ops

#### Carl-bot Auto-Moderation

Configure the following in Carl-bot dashboard:

- **Anti-raid:** Enable raid detection. If 10+ accounts join within 60 seconds, auto-enable verification mode and alert mods.
- **Anti-link:** Block links from accounts less than 7 days old in the server. Exempt verified holder roles.
- **Anti-invite:** Block Discord invite links (except your own server's). Exempt team roles.
- **Duplicate message filter:** Delete duplicate messages sent within 10 seconds.
- **New account filter:** Flag accounts less than 7 days old that try to post links or mentions.

### How to Handle Common Threats

**Scam links / wallet drainers:**
1. Delete the message immediately
2. Ban the account
3. Post a warning in #the-bullpen: "A scam link was just removed. NEVER click links from DMs. The team will NEVER DM you first."
4. Log the incident in #mod-ops

**Impersonators:**
1. Ban immediately
2. Screenshot evidence for #mod-ops
3. Alert the community that someone was impersonating a team member
4. Remind members: "Check for the role color and role tag. Team members have specific roles visible."

**Spam raids:**
1. Enable slow mode on affected channels (30 seconds or more)
2. Temporarily set server verification to Highest
3. Use Carl-bot's lockdown command if available
4. Once the raid subsides, restore normal settings
5. Review and clean up messages

**FUD campaigns:**
1. Do not delete criticism -- only delete rule violations
2. Address legitimate concerns with facts in #the-bullpen
3. If a single user is spreading false information repeatedly, warn then timeout
4. Post a clarification in #intel-report if needed

### Mod Team Structure

| Role | Count | Responsibilities |
|------|-------|------------------|
| The Architect (Founder) | 1-2 | Final authority, server ownership, treasury decisions |
| Core Command | 2-3 | Server management, bot configuration, strategic decisions |
| Field Commander (Senior Mod) | 3-5 | Bans, kicks, escalation handling, rule enforcement, community leadership |
| Operative Handler (Junior Mod) | 5-10 | Message management, timeouts, first-response to issues, welcoming new members |

**Mod recruitment criteria:**
- Active in the community for 2+ weeks
- Helpful and positive presence
- Available during specific time zones (aim for 24-hour coverage)
- Trustworthy and level-headed
- Willing to handle conflict without ego

**Mod communication:**
- All mod actions logged in #mod-ops with reason
- Weekly mod sync (voice or text) to discuss issues and improvements
- Escalation chain: Operative Handler > Field Commander > Core Command > Architect

---

## 6. Engagement Strategies

### Daily Activities

**Morning Signal (automated, daily at 9:00 AM UTC):**
Use Carl-bot or a custom bot to post a daily message in #the-bullpen:

```
DAILY SIGNAL REPORT -- [DATE]
Status: OPERATIONAL
Conviction Level: MAXIMUM
Vibes: [rotating funny status]

What's the play today, operatives?
```

Rotating vibes options:
- "Suspiciously bullish"
- "Emotionally invested"
- "Chart-dependent"
- "Unshakeable (source: feelings)"
- "Fully deployed, zero regrets (for now)"

**Meme of the Day:**
Moderators or a bot highlight the best meme posted in #meme-armory each day. Pin it or repost it with a "MEME OF THE DAY" tag.

**Price Check Thread:**
Encourage a daily price discussion in #chart-surveillance. No auto-posting price bots that spam -- a single daily summary is better.

### Weekly Activities

| Day | Event | Channel |
|-----|-------|---------|
| Monday | Mission Monday -- weekly goals and community targets | #active-missions |
| Tuesday | Meme Submission Day -- submit memes for the weekly contest | #meme-armory |
| Wednesday | Alpha Wednesday -- community shares their best finds | #alpha-intercepts |
| Thursday | Lore Thursday -- new lore drops or community lore writing | #the-bullpen |
| Friday | Raid Friday -- coordinated social media push | #active-missions |
| Saturday | Open Mic -- voice channel hangout, casual vibes | Situation Room |
| Sunday | Weekly Recap -- summary of the week, winners announced | #mission-briefing |

### Meme Contests

**Weekly Meme Mission:**
1. Announce the theme on Monday in #active-missions
2. Submissions in #meme-armory with a specific tag or emoji
3. Voting via reactions (or a poll bot) from Tuesday to Saturday
4. Winner announced Sunday in #mission-briefing
5. Winner gets the "Meme Agent" role + a small $AOFOMO prize from marketing wallet

**Theme ideas:**
- "Agent's worst trade" -- meme about terrible timing
- "FOMO face" -- reaction images for green candles
- "Classified briefing gone wrong" -- fake classified documents
- "The signal was wrong" -- when conviction meets reality
- "Explain $AOFOMO to your family"

### AMA Schedule

**Frequency:** Bi-weekly or monthly, depending on team availability.

**Format:** Use the "Stage: Live Briefing" stage channel.

**Process:**
1. Announce AMA 3-5 days before in #mission-briefing
2. Collect questions in #ama-briefings (lock submissions 2 hours before)
3. Go live on stage. Architect or Core Command host. Assign "AMA Cleared" role to selected questioners.
4. Record highlights and post a summary in #intel-report afterward

### Community Missions / Quests

Create multi-step engagement campaigns:

**Example: Operation First Signal**
- Step 1: Follow AgentOfFomo on X
- Step 2: Like and retweet the pinned post
- Step 3: Post a meme with #AgentOfFomo
- Step 4: Screenshot proof in #active-missions
- Reward: "OG Recruit" role or small $AOFOMO prize

**Example: Operation Meme Flood**
- Goal: Community creates 50 memes in one week
- Progress tracked publicly in #active-missions
- If goal is met, team does a bonus lore drop or giveaway

---

## 7. Growth Tactics

### Getting the First 100 Members

1. **Seed the server before going public.** Invite 10-20 trusted people (friends, early supporters, other project founders) before opening. A dead server repels new members. Have conversations happening before the first stranger arrives.

2. **Cross-post from X.** Every X post should mention the Discord. Add the Discord link to the X bio. Post the invite link in replies to relevant threads.

3. **Telegram bridge.** If you have a Telegram group, announce the Discord there. Consider running both but making Discord the "HQ" and Telegram the "field comms."

4. **DM outreach (carefully).** Reach out personally to active members of adjacent communities. Do not spam. A genuine message works better than a mass DM.

5. **Launch with content.** Do not launch an empty server. Have pinned messages, rules, a few memes, and the lore/dossier posted before inviting anyone.

6. **Create a shareable invite link.** Use a vanity URL if possible: `discord.gg/agentoffomo`. Set it to never expire with no member limit.

### Partnerships with Other Servers

- Identify 5-10 other Solana meme communities and propose mutual announcement channel follows (Discord's built-in Announcement follow feature).
- Offer to co-host AMAs or meme contests.
- Create a #partnerships channel in the CLASSIFIED category to track outreach.
- Avoid "follow-for-follow" with low-quality servers. Quality over quantity.

### Invite Rewards

Use Carl-bot's invite tracking to reward members who bring in new people:

| Invites | Reward |
|---------|--------|
| 5 | "Recruiter" role (cosmetic badge) |
| 15 | Entry into a monthly $AOFOMO raffle |
| 30 | "Senior Recruiter" role + guaranteed small $AOFOMO prize |
| 50+ | "Recruitment Director" role + featured shoutout |

Track in #active-missions. Announce top recruiters weekly.

**Important:** Monitor for invite abuse (bot accounts, fake joins). Carl-bot can show which invites led to accounts that actually stayed.

### Cross-Promotion with Telegram and X

- **X to Discord:** Post weekly "classified intel available only on Discord" teasers. Make some content Discord-exclusive (early meme drops, lore previews, alpha).
- **Telegram to Discord:** Use Telegram for quick, mobile-friendly chat and Discord for deep engagement, events, and verification. Post Discord event links in Telegram.
- **Discord to X:** Run Discord-exclusive meme contests where the best memes get posted on the official X account with credit. Members are incentivized to create because they get visibility.

---

## 8. Content to Pin

### #verified-links (Pin All)

```
OFFICIAL LINKS -- TRUST NO OTHERS

Website: https://agentoffomo.com
X (Twitter): [INSERT LINK]
Telegram: [INSERT LINK]
Discord: You are here.

Mint Address: [INSERT MINT ADDRESS]
Solscan: [INSERT SOLSCAN LINK]
DEX (Buy Here): [INSERT DEX LINK]

The team will NEVER DM you asking for funds, seed phrases,
or wallet connections. Report impersonators immediately.
```

### #verified-links (Pin: How to Buy Guide)

```
HOW TO ACQUIRE $AOFOMO -- STEP BY STEP

1. INSTALL A SOLANA WALLET
   Download Phantom (phantom.app) on browser or mobile.
   Create a new wallet. Save your seed phrase securely OFFLINE.
   Never share your seed phrase with anyone.

2. FUND YOUR WALLET WITH SOL
   Buy SOL on a centralized exchange (Coinbase, Binance, Kraken, etc.)
   Withdraw SOL to your Phantom wallet address.
   Keep at least 0.05 SOL for transaction fees.

3. SWAP SOL FOR $AOFOMO
   Go to [INSERT DEX LINK]
   Connect your Phantom wallet.
   Enter the amount of SOL you want to swap.
   Confirm the transaction.

4. VERIFY YOUR HOLDINGS
   Go to #role-assignment and verify your wallet.
   Your Operative rank will be assigned automatically.

IMPORTANT:
- Only use the official mint address: [INSERT MINT ADDRESS]
- Only use links from this channel.
- Set slippage to 1-3% (adjust if needed during high volatility).
- This is a meme token. Only spend what you can afford to lose.
```

### #rules-of-engagement (Pin)

Pin the full rules template from the Moderation section above.

### #mission-briefing (Pin: FAQ)

```
FREQUENTLY ASKED QUESTIONS

Q: What is AgentOfFomo?
A: An AI-themed meme token and cultural brand on Solana. Built around
   the universal crypto instinct to buy too late, believe too hard,
   and call it strategy.

Q: What is the mint address?
A: [INSERT MINT ADDRESS] -- Always verify against #verified-links.

Q: Is this a rug pull?
A: Mint authority: [REVOKED/STATUS]
   Freeze authority: [REVOKED/STATUS]
   Liquidity: [LOCKED/DETAILS]
   All wallets and allocations are publicly documented in The Dossier.

Q: Where can I buy?
A: See the How to Buy guide pinned in #verified-links.

Q: Is there a utility?
A: $AOFOMO is a meme token and cultural brand. It does not promise
   utility, yield, or guaranteed returns. It coordinates a community
   around humor, identity, and memes.

Q: Will the token go up?
A: The agent has reviewed your question and marked it as
   "emotionally motivated." This is a meme token. Act accordingly.

Q: Who is the team?
A: The team is pseudonymous but publicly accountable through
   wallet transparency, documentation, and community presence.

Q: How do I verify my holdings?
A: Go to #role-assignment and follow the Matrica verification link.

Q: I got a DM from someone claiming to be the team.
A: That is a scammer. The team will NEVER DM you first. Block them
   and report to a moderator.
```

### #chart-surveillance (Pin)

```
CHART SURVEILLANCE PROTOCOLS

- Share charts, analysis, and observations freely.
- Do not post fake screenshots or manipulated data.
- Do not guarantee price targets or promise profits.
- Tag speculation clearly. "I think" is different from "it will."
- Respect that everyone has different entry points and risk tolerance.
- No harassing people for selling or buying.

Useful links:
- DEXScreener: [INSERT LINK]
- Birdeye: [INSERT LINK]
- Solscan token page: [INSERT LINK]
```

---

## 9. Launch Day Discord Plan

### Pre-Launch (24-48 Hours Before)

**Server preparation:**
- Double-check all channels, permissions, and pins
- Test all bot commands
- Ensure verification bot is working with the final mint address
- Pre-write all launch day messages as drafts
- Brief the mod team on the plan and assign shifts
- Set #the-bullpen to slow mode (10 seconds) preemptively
- Lock #ama-briefings and #active-missions (no events on launch day -- focus on the launch)

**Team communication:**
- Confirm all mods are available and in #mod-ops
- Assign time zone coverage shifts
- Establish a rapid-response chain for scam/impersonator incidents
- Test the emergency lockdown procedure

### Launch Day Timeline

**T-2 Hours: Final Check**
- Post in #mod-ops: "Launch sequence initiated. All handlers report in."
- Verify website is live
- Verify mint address matches everywhere
- Verify DEX link is working
- Verify all pinned content is correct

**T-0: Launch**

Post in #mission-briefing (Announcement channel):

```
@everyone

MISSION STATUS: ACTIVE
DATE: [DATE]
TIME: [TIME] UTC

AgentOfFomo has been deployed.

The signal is live. $AOFOMO is now tradeable.

OFFICIAL MINT ADDRESS:
[INSERT MINT ADDRESS]

BUY HERE:
[INSERT DEX LINK]

VERIFY ON SOLSCAN:
[INSERT SOLSCAN LINK]

WEBSITE:
https://agentoffomo.com

THE DOSSIER:
[INSERT DOSSIER LINK]

DO NOT TRUST ANY OTHER LINKS OR ADDRESSES.
THE TEAM WILL NEVER DM YOU.

Trust the signal. Regret the timing.

Welcome to the mission.
```

**T+5 Minutes:**
Post in #the-bullpen:

```
WE ARE LIVE.

Drop your entry confirmations below. Show your conviction.

The agent sees all. The agent judges none.
(The agent judges a little.)
```

**T+15 Minutes:**
Post the How to Buy guide in #new-recruit-intake if not already pinned.

**T+30 Minutes:**
Post a status update in #signal-status:

```
SIGNAL STATUS UPDATE -- T+30 MINUTES
Holders: [NUMBER]
Liquidity: [AMOUNT]
Status: OPERATIONAL
Conviction level: RISING

More updates to follow.
```

**T+1 Hour:**
Post in #mission-briefing:

```
SITUATION REPORT -- HOUR ONE

[Brief summary of how launch is going]
[Holder count]
[Any relevant milestones]

The signal remains strong. New operatives: verify your wallets
in #role-assignment to earn your rank.
```

**Throughout the day:**
- Post status updates every 1-2 hours in #signal-status
- Respond to questions in #new-recruit-intake and #tech-support actively
- Monitor #mod-ops for scam attempts
- Repost the official mint address whenever someone asks
- Celebrate milestones (100 holders, 500 holders, etc.) in #the-bullpen

### Channel Management on Launch Day

| Channel | Status | Notes |
|---------|--------|-------|
| #mission-briefing | Active, team posts only | Official updates only. No noise. |
| #the-bullpen | Open, slow mode 10s | Main social channel. High traffic expected. |
| #meme-armory | Open | Encourage meme creation from minute one |
| #chart-surveillance | Open, slow mode 15s | Expect heavy activity. Mod for FUD. |
| #new-recruit-intake | Open | Station 1-2 mods here permanently |
| #tech-support | Open | Station 1 mod here permanently |
| #tinfoil-room | Open | Let people vent and shitpost freely |
| #active-missions | Locked | No active missions on launch day |
| #ama-briefings | Locked | First AMA should be 3-7 days post-launch |
| Situation Room (voice) | Open | Team can hop in to hang with community |

### Post-Launch (First 24-48 Hours)

1. **Hour 6:** Post a longer recap in #mission-briefing with milestones hit
2. **Hour 12:** If traction is strong, announce the first community mission (e.g., "Operation Signal Spread" -- get 100 retweets on the launch post)
3. **Hour 24:** Post a Day 1 recap with stats, highlights, best memes, and a "what's next" teaser
4. **Day 2:** Open #active-missions with the first meme contest or community task
5. **Day 3-5:** Schedule the first AMA and announce it
6. **Day 7:** Post a full Week 1 report in #intel-report

### Emergency Procedures

**If the server gets raided:**
1. Field Commander enables lockdown: set verification to Highest, enable slow mode 120s on all channels
2. Core Command reviews and bans raid accounts
3. Post in #mission-briefing: "Server under temporary lockdown due to bot raid. Normal operations resume shortly."
4. Restore settings once cleared

**If a scam token appears:**
1. Immediately post the real mint address in #mission-briefing and #the-bullpen
2. Report the scam token on relevant platforms
3. Pin a warning about the fake token

**If the website goes down:**
1. Post official links manually in #verified-links
2. Keep the mint address and DEX link visible
3. Update #signal-status with "Website temporarily offline, all other operations normal"

---

## Quick Reference: All Channel Names

```
COMMAND CENTER
  #mission-briefing
  #rules-of-engagement
  #intel-report
  #signal-status
  #verified-links

FIELD OPERATIONS
  #the-bullpen
  #meme-armory
  #chart-surveillance
  #alpha-intercepts
  #tinfoil-room
  #media-vault

SUPPORT & INTEL
  #new-recruit-intake
  #tech-support
  #bug-reports
  #suggestions-box

MISSION EVENTS
  #active-missions
  #mission-log
  #ama-briefings
  #polls-and-votes

COMMS (Voice)
  Situation Room
  War Room
  Debriefing Lounge
  Stage: Live Briefing

CLASSIFIED (Private)
  #command-deck
  #mod-ops
  #content-lab
  #dev-bunker
  #treasury-ledger
  #legal-review
```

---

## Quick Reference: All Role Names

```
TEAM ROLES
  The Architect
  Core Command
  Field Commander
  Operative Handler
  Content Specialist
  Dev Unit

BOT ROLES
  Signal Bot
  Verification Agent
  Guard Dog

COMMUNITY ROLES
  Diamond Operative
  Gold Operative
  Silver Operative
  Bronze Operative
  Signal Verified
  Meme Agent
  Raid Captain
  OG Recruit
  New Recruit

EVENT ROLES
  AMA Cleared
  Contest Runner
```

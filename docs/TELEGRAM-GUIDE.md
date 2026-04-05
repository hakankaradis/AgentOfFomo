# AGENT OF FOMO -- TELEGRAM OPERATIONS MANUAL

**Classification:** OPERATIONAL  
**Document:** TG-OPS-001  
**Status:** PRE-DEPLOYMENT  
**Last Updated:** 2026-04-02

> This document contains the full Telegram deployment and management protocol for AgentOfFomo ($AOFOMO). All operatives involved in community management must read and internalize this file before activation.

---

## Table of Contents

1. [Group Setup](#1-group-setup)
2. [Group Structure](#2-group-structure)
3. [Bot Setup](#3-bot-setup)
4. [Pinned Messages](#4-pinned-messages)
5. [Moderation](#5-moderation)
6. [Engagement](#6-engagement)
7. [Growth Tactics](#7-growth-tactics)
8. [Security](#8-security)
9. [Launch Day Plan](#9-launch-day-plan)
10. [Templates](#10-templates)

---

## 1. Group Setup

### 1.1 Main Group

**Name:** AgentOfFomo | $AOFOMO  
**Username:** @AgentOfFomo  
**Type:** Supergroup (must be upgraded from regular group to access admin features)

**Description:**
```
SIGNAL ACTIVE | The autonomous meme agent for maximum emotional entry timing.

Trust the signal. Regret the timing. $AOFOMO on Solana.

Website: agentoffomo.com
Announcements: @AgentOfFomoAlerts
```

**Profile Photo:** The AgentOfFomo mascot (floating AI head, green eyes, black suit, green tie) on a dark background. Use high-contrast neon green on black so it reads clearly at small sizes.

**Group Settings:**
- **Chat History for New Members:** Visible (so newcomers can see the vibe)
- **Slow Mode:** OFF at launch, enable 30-second cooldown if chat moves too fast or during raids
- **Content Type:** Allow text, photos, stickers, GIFs. Disable file sharing and voice messages initially to reduce spam surface
- **Who Can Add Members:** Everyone (for organic growth)
- **Who Can Send Messages:** All members
- **Who Can Send Media:** All members (restrict to "members who joined > 10 min ago" if spam becomes an issue)
- **Aggressive Anti-Spam:** ON (Telegram built-in)

### 1.2 Announcements Channel

**Name:** AgentOfFomo Alerts  
**Username:** @AgentOfFomoAlerts  
**Type:** Channel (one-way broadcast)

**Description:**
```
CLASSIFIED BROADCAST | Official signals from AgentOfFomo.

Token updates. Mission briefings. Launch intel.
No discussion here -- join @AgentOfFomo for comms.

agentoffomo.com
```

**Profile Photo:** Same mascot but with a subtle "SIGNAL" or broadcast icon overlay to differentiate from the main group.

**Settings:**
- **Sign Messages:** ON (shows which admin posted)
- **Discussion Group:** Link to the main @AgentOfFomo group so channel posts get a comment thread
- **Reactions:** Enable (lets community react to announcements)

### 1.3 Linking Channel and Group

1. Go to the Announcements Channel settings
2. Select "Discussion" and link the main group
3. This allows channel posts to have comment threads that appear in the main group
4. Announcements will auto-forward to the group with a "Comment" button

---

## 2. Group Structure

### 2.1 Core Groups (Required)

| Group | Purpose | Type |
|---|---|---|
| **AgentOfFomo** (@AgentOfFomo) | Main community chat, discussion, memes, vibes | Supergroup |
| **AgentOfFomo Alerts** (@AgentOfFomoAlerts) | One-way official announcements, mission briefings | Channel |

### 2.2 Optional Groups (Add as community grows)

| Group | Purpose | When to Create |
|---|---|---|
| **AOFOMO Meme Lab** | Meme submissions, community art, content creation | After 500+ members |
| **AOFOMO Signal Room** | Alpha discussion, chart analysis, trade talk | After 1,000+ members |
| **AOFOMO Operatives** | Private group for top contributors and community mods | After identifying 5-10 active contributors |
| **AOFOMO Regional** (CN/KR/TR/etc.) | Language-specific groups with local mods | Only when organic demand appears from a region |

### 2.3 Telegram Community Feature (Topics)

Consider using Telegram's built-in Topics feature as an alternative to multiple groups:

- **General** -- main chat
- **Memes** -- meme submissions and sharing
- **Charts & Alpha** -- price discussion and analysis
- **Support** -- how to buy, wallet help, troubleshooting
- **Suggestions** -- community ideas and feedback

Topics keep everyone in one group while organizing conversation. Enable via Group Settings > Topics.

---

## 3. Bot Setup

### 3.1 Welcome Bot -- Rose (@MissRose_bot)

Rose is the most widely used Telegram group management bot. Free, reliable, and well-documented.

**Setup:**
1. Add @MissRose_bot to the group
2. Make it admin with permissions: Delete Messages, Ban Users, Pin Messages
3. Configure via DM with the bot or in-group commands

**Configuration:**
```
/welcome on
/setwelcome [see welcome template in Section 10.1]
/cleanwelcome on          -- deletes previous welcome messages to reduce clutter
/welcomemute 10m          -- mutes new members for 10 minutes until they pass captcha
/setflood 15              -- triggers flood protection after 15 messages in a row
/setfloodmode mute 1h     -- mutes flooders for 1 hour
/reports on               -- allows users to report messages with /report
/antiarabic off            -- do not restrict by language
/setantiflood 15           -- anti-flood threshold
```

**Welcome Message:** See Section 10.1 for the full template.

### 3.2 Anti-Spam / Raid Bot -- Combot (@comaborasbot)

Combot provides advanced anti-spam, analytics, and moderation features.

**Setup:**
1. Add @comaborasbot to the group
2. Make it admin with all moderation permissions
3. Configure via https://combot.org dashboard

**Configuration (via dashboard):**
- **Captcha:** ON -- new members must solve a captcha within 120 seconds or get kicked
- **Anti-spam:** ON -- auto-delete messages with known spam patterns
- **Anti-flood:** ON -- restrict users who send more than 10 messages in 10 seconds
- **Anti-bot:** ON -- auto-kick bots that are not whitelisted
- **Link filter:** ON -- delete messages with links from non-admin users (tune this; you may want to allow certain domains)
- **Forward filter:** ON -- delete forwarded messages from non-members (common spam vector)

**Alternative: Shieldy (@shaborasbot)**

If you prefer a simpler captcha-only solution:
1. Add @shaborasbot to the group
2. Make it admin
3. `/captcha` to enable
4. `/complexity` to set difficulty (use `button` mode -- user clicks a button to verify)
5. `/timeLimit 120` -- kick if not verified in 120 seconds
6. `/deleteEntryMessages` -- clean up join/leave messages
7. `/banUsers` -- ban (not just kick) failed verifications

### 3.3 Price Bot -- Maestro (@MaesBot)

Shows current token price, market cap, and chart on command.

**Setup:**
1. Add @MaestroBots to the group (check current bot username as it may change)
2. Register your token's Solana mint address with the bot
3. Users can query price with a command like `/p` or `/price`

**Alternative: DexScreener Bot**
- Some projects use a custom bot that pulls from the DexScreener API
- Provides price, 24h volume, market cap, and a chart link

**Alternative: BonkBot (@bonaborasbot)**
- Popular in Solana communities
- Allows in-chat trading (users can buy/sell directly)
- Adds buy/price commands

### 3.4 Buy Bot -- Transaction Notifications

A buy bot posts a message in chat every time someone buys $AOFOMO above a certain threshold. This creates social proof and excitement.

**Recommended: Maestro Buy Bot or SolTrendingBot**

**Setup (general flow):**
1. Add the buy bot to the group
2. Configure with your token's mint address and the liquidity pool address
3. Set minimum buy threshold (e.g., only show buys > $50 to avoid noise)
4. Customize the message template

**Custom buy notification format (request this from whichever bot you use):**
```
SIGNAL DETECTED

New $AOFOMO acquisition confirmed.
Amount: {amount} $AOFOMO
Value: ${value}
Buyer: {wallet_short}
TX: {explorer_link}

Total holders: {holders}
Market Cap: ${mcap}

The signal grows stronger.
```

**Configuration tips:**
- Set minimum buy amount to reduce spam during high-volume periods
- Include emoji sparingly -- a green circle or siren fits the brand
- Include a link to the explorer transaction for transparency
- Disable during extremely high volume if it overwhelms the chat

### 3.5 Captcha / Verification Bot

If you are not using Combot or Shieldy for captcha, consider:

**Verificate Bot (@VerificateBot):**
1. Add to group as admin
2. New members must complete a verification step
3. Unverified members cannot send messages
4. Customize the verification message

**Rose's built-in captcha:**
```
/captcha on
/captchamode button      -- simple button press verification
/captcharules on         -- show rules during captcha
```

### 3.6 Bot Summary

| Bot | Purpose | Priority |
|---|---|---|
| Rose (@MissRose_bot) | Welcome messages, flood control, basic moderation | Required |
| Combot (@comaborasbot) | Anti-spam, captcha, analytics | Required |
| Maestro or equivalent | Price commands | Required |
| Buy bot | Transaction notifications | Required |
| Shieldy | Backup captcha (if not using Combot) | Optional |
| BonkBot | In-chat trading | Optional |

---

## 4. Pinned Messages

Pin a maximum of 3-4 messages to avoid clutter. Use a single comprehensive pinned message if possible.

### 4.1 Primary Pinned Message (Pin #1)

See Section 10.1 for the full welcome/info message template. This should contain:

- Project description (1-2 lines)
- Official links (website, X, announcements channel)
- Contract/mint address (copy-pasteable)
- How to buy (brief steps)
- Rules summary (link to full rules)
- Scam warning

### 4.2 How to Buy (Pin #2)

See Section 10.3 for the full how-to-buy template. Step-by-step instructions for purchasing $AOFOMO on Solana.

### 4.3 Rules (Pin #3)

See Section 10.2 for the full rules template. Themed as "Mission Protocols."

### 4.4 When to Update Pins

- **Immediately** when the contract/mint address is finalized
- **Immediately** when trading goes live (add DEX link)
- **Immediately** if there is a security incident or scam alert
- **Weekly** to refresh any time-sensitive information
- **After milestones** to update holder count, market cap achievements, etc.

---

## 5. Moderation

### 5.1 Mission Protocols (Rules)

See Section 10.2 for the full rules message. Key rules themed as protocols:

**PROTOCOL 1 -- OPERATIONAL INTEGRITY**  
No scam links, phishing, or impersonation of admins/team. Instant ban.

**PROTOCOL 2 -- SIGNAL CLARITY**  
No excessive shilling of other tokens. Brief mentions are fine. Repeated promotion is not.

**PROTOCOL 3 -- AGENT CONDUCT**  
No harassment, threats, doxxing, hate speech, or NSFW content.

**PROTOCOL 4 -- INTEL DISCIPLINE**  
No spreading deliberate misinformation about the project, team, or token.

**PROTOCOL 5 -- COMMS HYGIENE**  
No spam, flood, or bot-like behavior. No unsolicited DMs to other members.

**PROTOCOL 6 -- CHAIN OF COMMAND**  
Respect moderators. Disputes go to DM, not public chat.

### 5.2 Handling Common Issues

**FUD (Fear, Uncertainty, Doubt):**
- Distinguish between genuine questions and bad-faith attacks
- Genuine concern: answer transparently, provide facts, link to docs
- Bad-faith FUD: warn once, mute if repeated, ban if persistent
- Never delete genuine questions -- it looks worse than the question itself

**Scams and Phishing:**
- Delete immediately, ban the sender, warn the group
- Pin a warning if a scam is widespread (e.g., fake airdrop, impersonator DMs)
- Report the scam account to Telegram via @notoscam

**Impersonators:**
- People will create accounts with admin names/photos and DM members
- Regularly post warnings: "Admins will NEVER DM you first. Report anyone who does."
- Report impersonator accounts to Telegram

**Price Complaints / "Wen Moon":**
- Do not delete these -- they are normal community behavior
- Redirect to the project's mission and long-term vision
- Engage with humor that fits the brand: "The signal requires patience, operative."

**Rug Accusations:**
- Take seriously, respond with facts
- Point to on-chain transparency: mint authority status, liquidity locks, wallet separation
- Never get defensive or emotional

### 5.3 Admin Roles

| Role | Permissions | Who |
|---|---|---|
| **Owner** | Full control, can add/remove admins | Project founder only |
| **Lead Mod** | All moderation powers, can configure bots | 1-2 trusted people |
| **Moderator** | Delete messages, mute users, ban spammers | 3-5 community members |
| **Announcements Admin** | Can post in the announcements channel | Lead team only |

**Admin guidelines:**
- Admins must have 2FA enabled on their Telegram accounts
- Admins should set their username to include a tag like "[AOFOMO MOD]" or similar
- Admins should have their Telegram privacy settings locked down
- Never share admin credentials or bot tokens
- Never make emotional moderation decisions during price dumps

### 5.4 Ban Criteria

**Instant ban (no warning):**
- Posting scam/phishing links
- Impersonating admins or team members
- Posting NSFW content
- Doxxing or threatening other members
- Bot accounts spamming

**Warn then ban:**
- Repeated shilling of other tokens (warn 1x, mute 1h, ban on 3rd offense)
- Persistent negativity with no constructive purpose (warn 2x, then mute/ban)
- Flooding chat (auto-handled by bots, manual ban if repeated)
- Circumventing mutes or bans with alt accounts (instant ban once confirmed)

---

## 6. Engagement

### 6.1 Daily Discussion Prompts

Rotate through themed prompts to keep the chat active. Post these from an admin account or a bot on a schedule.

**Monday -- Mission Monday:**
> MISSION BRIEFING: What is your $AOFOMO signal confidence level this week? Rate 1-10 and explain your emotional justification.

**Tuesday -- Meme Tuesday:**
> CONTENT DROP REQUESTED: Post your best AgentOfFomo meme. Top meme gets pinned until tomorrow. Go.

**Wednesday -- Intel Wednesday:**
> FIELD REPORT: What other signals is the market generating today? What narratives are moving? Share your intel.

**Thursday -- Throwback Thursday:**
> ARCHIVE ACCESS: What was your worst FOMO trade of all time? Confess. The agent does not judge. The agent relates.

**Friday -- FOMO Friday:**
> ALERT: It is Friday. The weekend candle is approaching. Share what you are watching and why you are irrationally confident about it.

**Saturday -- Sticker Saturday:**
> COMMS CHECK: Drop your favorite $AOFOMO sticker. If you have made a custom one, now is the time.

**Sunday -- Strategy Sunday:**
> DEBRIEF: Reflect on the week. What went right? What went wrong? What emotional entry did you almost make?

### 6.2 Meme Culture

- Encourage members to share memes by reacting positively and pinning the best ones
- Run weekly or bi-weekly meme contests with small $AOFOMO prizes
- Create a dedicated meme submission thread or use the Meme Lab group
- Repost the best community memes on the official X account (with credit)
- Provide meme templates: the mascot in various poses, blank mission briefing cards, fake terminal screenshots

### 6.3 Price Milestone Celebrations

Pre-plan celebrations for key milestones. When a milestone hits:

1. Post a themed announcement in the channel
2. Pin a celebration message in the group
3. Share a milestone graphic (pre-made)
4. Encourage the community to share the news on X

**Milestone message format:**
```
SIGNAL MILESTONE ACHIEVED

$AOFOMO has reached [MILESTONE].

Holder count: [X]
Market cap: $[X]
Signal confidence: MAXIMUM

This is not the top.
This is the signal confirming the signal.

Share the mission: agentoffomo.com
```

**Milestones to pre-plan graphics for:**
- 100 / 500 / 1,000 / 5,000 / 10,000 holders
- $100K / $500K / $1M / $5M / $10M market cap
- First DEX listing
- First CEX listing
- Trending on DexScreener, DexTools, or similar

### 6.4 Community Challenges

**"Mission" Challenges:**
- Post $AOFOMO on X with the hashtag -- screenshot it in the group for a role/reward
- Create a meme using the official template pack
- Recruit 3 new members (verified by a referral tracking bot or honor system)
- Write a short "field report" about why you joined the mission

**Leaderboard (optional):**
- Track top contributors manually or with a bot like @XPBot
- Assign themed ranks: Recruit, Operative, Field Agent, Senior Agent, Handler, Director
- Reward top contributors with roles, shoutouts, or token prizes

### 6.5 Sticker Packs

Since sticker art already exists:

1. Create a Telegram sticker pack via @Stickers bot
2. Include 15-30 stickers covering common chat reactions
3. Pin the sticker pack link in the group
4. Encourage members to add and use the pack

**Sticker ideas that fit the brand:**
- Mascot saying "SIGNAL RECEIVED"
- Mascot saying "ENTRY CONFIRMED"
- Mascot saying "TOO LATE IS STILL ON TIME"
- Mascot saying "CONVICTION MAXXED"
- Mascot facepalming (for bad trades)
- Mascot with laser eyes (for pumps)
- Mascot saluting (for milestones)
- "CLASSIFIED" stamp
- Green candle with the mascot riding it
- Red candle with the mascot unbothered

---

## 7. Growth Tactics

### 7.1 Telegram-Specific Growth

**Organic tactics:**
- Cross-promote the Telegram link on every other platform (X bio, website, Discord)
- Add the Telegram link to every X post, thread, and announcement
- Make the group entertaining enough that people want to stay and invite friends
- Respond to every new member's first message to make them feel welcome
- Keep the chat active during all major timezone windows (US, EU, Asia)

**Viral mechanics:**
- Run invite contests: "Recruit 5 operatives, earn [reward]"
- Create shareable content (memes, stickers, mission briefings) that naturally includes the Telegram link
- Encourage members to set $AOFOMO-themed profile pictures or bios

**Content strategy:**
- Post in the group at least 10-20 times per day across admin accounts
- Share alpha, memes, market commentary, and mission updates
- Never let the chat go silent for more than 2-3 hours during peak hours

### 7.2 Partnerships with Other Communities

- Identify 10-20 Telegram groups in the Solana meme token space
- Reach out to admins for mutual shoutouts or "raid" partnerships
- Participate authentically in other groups before asking for partnerships
- Offer to feature partner projects in your announcements if they do the same
- Join Telegram group networks or alliances (informal communities of community managers)

**Partnership message template:**
```
Hey [admin name], I run the community for AgentOfFomo ($AOFOMO) -- 
an AI-themed meme token on Solana. We have [X] members and growing.

Would you be open to a mutual shoutout or AMA exchange? 
We can feature your project to our community if you do the same.

Let me know -- happy to share more details.

agentoffomo.com
@AgentOfFomo
```

### 7.3 Call Channels

Getting featured in popular "call channels" (Telegram channels that highlight new tokens) can drive significant traffic.

**How to approach call channels:**
1. Identify relevant call channels (Solana-focused, meme-focused, AI-themed)
2. Check if they have a submission process or contact info
3. Prepare a pitch package: project summary, links, chart, why it is interesting
4. Some channels charge fees ($500-$5,000+ depending on size); others call projects for free if they like them
5. Never pay for calls before verifying the channel is legitimate and has real engagement

**What call channels look for:**
- Active community (not a dead chat)
- Good chart / momentum
- Professional website and branding
- Clear tokenomics and transparency
- Something that makes the project stand out

**Popular Solana call channel categories:**
- Gem hunters / low-cap callers
- AI/tech-themed token channels
- Meme token specific channels
- General Solana alpha channels

Research current active channels as they change frequently.

### 7.4 Telegram Ads

Telegram offers official advertising through its ad platform.

**How Telegram Ads work:**
- Ads appear at the bottom of public channels with 1,000+ subscribers
- You set targeting by language, channel topics, and specific channels
- Minimum budget: approximately $2,000 (this threshold has changed over time; verify current minimums)
- Ads are text-only, up to 160 characters, with a link
- You manage campaigns at ads.telegram.org or through the Telegram Ad Platform

**Cost structure:**
- CPM (cost per thousand impressions) model
- Rates vary by targeting; expect $2-$10 CPM for crypto-adjacent audiences
- Budget minimum may be a barrier for early-stage projects

**Recommended approach:**
- Wait until the community has organic activity before running ads (an empty group kills conversion)
- Target channels related to Solana, meme tokens, crypto trading, AI
- Use concise, on-brand copy

**Example ad copy:**
```
AgentOfFomo | $AOFOMO
The autonomous meme agent for maximum emotional entry timing.
Trust the signal.
```

**Alternative paid growth:**
- Sponsored posts in relevant Telegram channels (negotiate directly with channel owners)
- Telegram influencer shoutouts
- KOL (Key Opinion Leader) partnerships with Telegram-native crypto influencers

---

## 8. Security

### 8.1 Preventing Admin Impersonation

This is the single biggest security threat in Telegram crypto communities.

**What happens:**
- Scammers create accounts with the same name and profile photo as your admins
- They DM members offering "support," "airdrops," or "investment opportunities"
- Members lose funds by clicking malicious links or sending crypto

**Prevention:**
1. All admins must set a unique, hard-to-copy username (e.g., @AOFOMO_Admin_Hakan)
2. All admins should add a note to their bio: "I will NEVER DM you first."
3. Pin a warning in the group at least once per week: "Admins will never DM you. Report anyone who contacts you claiming to be from the team."
4. Disable "Add to Group" in admin privacy settings so scammers cannot pull admins into fake groups
5. Regularly search for impersonator accounts and report them to @notoscam

### 8.2 Scam Link Prevention

**Bot configuration:**
- Configure Rose or Combot to auto-delete messages containing links from non-admin users
- Whitelist specific domains if needed (agentoffomo.com, solscan.io, dexscreener.com, etc.)
- Auto-delete messages containing known scam patterns: "airdrop," "validate wallet," "connect wallet," "claim reward"

**Rose link filter:**
```
/setlink on           -- enable link filtering
/linkmode delete      -- delete messages with links
/linkwhitelist agentoffomo.com solscan.io dexscreener.com
```

**Manual vigilance:**
- Admins should monitor for disguised links (e.g., using Unicode characters or URL shorteners)
- Delete and ban immediately -- do not engage with scammers

### 8.3 Verifying Official Accounts

**Make it unmistakable what is official:**
- Pin the official links in the group
- List all official accounts on the website (agentoffomo.com)
- Use consistent branding across all official accounts
- Never create "secondary" official accounts that could confuse members

**Official account verification checklist:**
- Website: agentoffomo.com
- X: [official handle]
- Telegram Group: @AgentOfFomo
- Telegram Channel: @AgentOfFomoAlerts
- Any other official accounts

Post this list regularly and include it in the welcome message.

### 8.4 What Admins Must NEVER Do

- **NEVER** DM members first (this is the #1 rule -- it must be inviolable so members know any unsolicited DM is a scam)
- **NEVER** ask for seed phrases, private keys, or wallet passwords
- **NEVER** ask members to "connect wallet" or "validate" anything via a link in DM
- **NEVER** share bot tokens, admin credentials, or API keys in any chat
- **NEVER** click suspicious links, even "to check if they are scams"
- **NEVER** add unknown bots to the group without team approval
- **NEVER** make the group admin list public unless necessary (reduces impersonation surface)
- **NEVER** send tokens from project wallets based on a Telegram message (all treasury actions must follow a separate, verified process)

### 8.5 Admin Account Security

All admins must:
- Enable Telegram 2FA (Settings > Privacy and Security > Two-Step Verification)
- Use a strong, unique password for their Telegram account
- Not use the same device for admin duties and personal browsing of unknown links
- Be wary of "Telegram support" messages -- Telegram support will never message you first
- Review active sessions regularly (Settings > Devices) and terminate unknown sessions

---

## 9. Launch Day Plan

### 9.1 Pre-Launch (T-minus 48 to 24 hours)

**Group setup:**
- [ ] Main group created, configured, and tested
- [ ] Announcements channel created and linked
- [ ] All bots added, configured, and tested
- [ ] Welcome message set and tested (have someone join to verify)
- [ ] Rules message written and pinned
- [ ] How-to-buy message drafted (update with live links at launch)
- [ ] Anti-spam and captcha bots verified working
- [ ] Admin team confirmed and roles assigned
- [ ] All admins have 2FA enabled
- [ ] Sticker pack created and link ready

**Content preparation:**
- [ ] 10+ announcement messages pre-written for the launch sequence
- [ ] Milestone graphics pre-made (first 100 holders, first $X market cap, etc.)
- [ ] Meme pack ready to share
- [ ] X posts drafted and scheduled

**Moderation preparation:**
- [ ] All mods briefed on launch day protocol
- [ ] Mod shift schedule set (ensure 24-hour coverage for at least the first 48 hours)
- [ ] Scam response templates ready
- [ ] Ban list from known scammer databases loaded (if available)

### 9.2 Launch Hour (T-zero)

**Minute 0 -- Token goes live:**
1. Post mint address in the announcements channel
2. Pin the mint address in the main group
3. Update the welcome message with the live mint address
4. Update the how-to-buy pinned message with the DEX link

**First announcement:**
```
MISSION STATUS: ACTIVE

AgentOfFomo ($AOFOMO) is now live on Solana.

Mint address: [ADDRESS]
DEX: [LINK]
Chart: [LINK]

Website: agentoffomo.com
How to buy: [pinned in group]

The signal is live. Trust the signal.
```

**Minute 5-15:**
- Monitor for scam links and impersonators (this is when they hit hardest)
- All mods on high alert
- Respond to questions in real-time
- Share the first buy bot notifications as they come in

**Minute 15-60:**
- Post periodic updates: holder count, first milestone hits
- Share memes and encourage the community to post on X
- Keep energy high but do not spam -- let organic conversation flow
- Pin any major milestone announcements

### 9.3 First 24 Hours

**Moderation intensity: MAXIMUM**

- At least 2 mods online at all times
- Response time to scam links: under 60 seconds
- Post a scam warning every 2-3 hours
- Monitor for impersonator accounts actively
- If the group is getting raided, enable slow mode (30-60 second cooldown)
- If spam is overwhelming, temporarily restrict new members from posting links or media

**Content cadence:**
- Post an update in the announcements channel every 2-4 hours
- Share milestone achievements as they happen
- Repost community memes and give credit
- Pin chart screenshots at key price points

**Community management:**
- Welcome new members actively (not just the bot message)
- Answer every genuine question
- Do not argue with FUD -- respond with facts once, then move on
- Celebrate buys and holder milestones publicly

**After 24 hours:**
- Assess moderation needs and adjust bot settings
- Identify emerging community leaders for potential mod recruitment
- Post a "Day 1 Debrief" in the announcements channel summarizing the launch
- Begin transitioning from "launch mode" to "steady state" community management

---

## 10. Templates

### 10.1 Welcome Message

Configure this in Rose with `/setwelcome`:

```
SIGNAL DETECTED -- NEW OPERATIVE IDENTIFIED

Welcome to AgentOfFomo, {first}.

You have entered the autonomous meme intelligence zone.

QUICK INTEL:
-- Website: agentoffomo.com
-- Announcements: @AgentOfFomoAlerts
-- X: [X LINK]

CONTRACT:
[MINT ADDRESS]
(Solana | SPL Token)

HOW TO BUY:
1. Get a Solana wallet (Phantom recommended)
2. Fund it with SOL
3. Go to [DEX LINK]
4. Paste the contract address above
5. Swap SOL for $AOFOMO

MISSION PROTOCOLS (RULES):
- No scam links or phishing
- No impersonating admins
- No spam or flood
- Be funny, not toxic
- Full rules: [pinned]

WARNING: Admins will NEVER DM you first.
If someone DMs you claiming to be from this team, BLOCK and REPORT them.

Trust the signal. Regret the timing.
```

### 10.2 Rules Message (Mission Protocols)

```
CLASSIFIED: MISSION PROTOCOLS
AgentOfFomo Community Operating Rules

All operatives must comply. Violations result in disciplinary action up to permanent extraction.

PROTOCOL 1 -- ZERO TOLERANCE
No scam links, phishing attempts, or wallet drainers. No impersonation of admins or team. 
Penalty: Instant permanent ban. No appeal.

PROTOCOL 2 -- OPERATIONAL FOCUS
This is an $AOFOMO community. Brief mentions of other tokens are fine. Repeated shilling is not.
Penalty: Warning, then mute, then ban.

PROTOCOL 3 -- AGENT CONDUCT
No harassment, threats, doxxing, hate speech, discrimination, or NSFW content.
Penalty: Instant ban.

PROTOCOL 4 -- INTEL INTEGRITY
Do not spread deliberate misinformation about the project, team, token supply, or partnerships.
Penalty: Warning, then ban.

PROTOCOL 5 -- COMMS DISCIPLINE
No spam, flooding, or repetitive messages. No unsolicited DMs to members promoting anything.
Penalty: Auto-mute by bot, then ban if repeated.

PROTOCOL 6 -- CHAIN OF COMMAND
Respect moderators. If you disagree with a moderation action, DM an admin. Do not argue in chat.
Penalty: Mute.

PROTOCOL 7 -- SELF-AWARENESS
This is a meme token. Do not make financial promises on behalf of the project. 
Nothing here is financial advice. We are here for the mission, the memes, and the signal.

STANDING ORDER:
Admins will NEVER DM you first. 
Anyone DMing you claiming to be an admin is a scammer. Block and report.

Questions? Ask in chat. An operative will assist.

Trust the signal.
```

### 10.3 How to Buy Message

```
ACQUISITION PROTOCOL: HOW TO BUY $AOFOMO

Step 1 -- DEPLOY YOUR WALLET
Download Phantom wallet (phantom.app) on mobile or browser extension.
Create a new wallet. Save your seed phrase securely offline. Never share it.

Step 2 -- FUND YOUR WALLET
Buy SOL on a centralized exchange (Coinbase, Binance, Kraken, etc.).
Withdraw SOL to your Phantom wallet address.
Keep at least 0.05 SOL for transaction fees.

Step 3 -- ACCESS THE DEX
Go to [DEX LINK] (e.g., Raydium, Jupiter)
Or use the swap feature inside Phantom wallet.

Step 4 -- PASTE THE CONTRACT
Official $AOFOMO mint address:
[MINT ADDRESS]

VERIFY this matches the address on agentoffomo.com.
Do not trust addresses from DMs or random messages.

Step 5 -- EXECUTE THE SWAP
Set your desired SOL amount.
Set slippage to 1-5% (increase if the transaction fails).
Confirm the swap.

Step 6 -- CONFIRM THE ACQUISITION
Your $AOFOMO tokens will appear in your Phantom wallet.
If they do not appear immediately, add the token manually using the mint address.

SECURITY REMINDERS:
- Only use the contract address from official sources
- Never share your seed phrase with anyone
- Admins will NEVER ask for your wallet info
- Double check the URL of any site you connect your wallet to

Welcome to the mission, operative.
```

### 10.4 Announcement Templates

**General Update:**
```
MISSION UPDATE -- [DATE]

[Content of the update]

Status: [ACTIVE / ON TRACK / MILESTONE REACHED]
Signal confidence: [X]%

Stay locked in. More intel incoming.
agentoffomo.com
```

**Partnership / Collaboration:**
```
INCOMING TRANSMISSION

AgentOfFomo has established contact with [PARTNER].

[Brief description of the collaboration]

Details: [link if applicable]

The network grows.
```

**Milestone:**
```
SIGNAL MILESTONE ACHIEVED

$AOFOMO has reached [MILESTONE DESCRIPTION].

[Key stats: holders, market cap, volume, etc.]

This is what happens when the signal is real.
Share the mission: agentoffomo.com
```

**Urgent / Security:**
```
PRIORITY ALERT

[Description of the issue -- scam warning, fake token, impersonator, etc.]

Official links:
- Website: agentoffomo.com
- Group: @AgentOfFomo
- Channel: @AgentOfFomoAlerts
- Contract: [MINT ADDRESS]

Everything else is unauthorized. Report and block.
```

**AMA / Event:**
```
CLASSIFIED BRIEFING SCHEDULED

[Event type]: [Date and time, include timezone]
Location: [Where -- this group, X Spaces, etc.]
Topic: [What will be discussed]

Prepare your questions. The agent will respond.
```

**Weekly Recap:**
```
WEEKLY DEBRIEF -- WEEK OF [DATE]

Signal activity this week:
- [Key event 1]
- [Key event 2]
- [Key event 3]

Stats:
- Holders: [X]
- Market cap: $[X]
- Community growth: [X] new operatives

Top community meme of the week: [description or repost]

Next week's mission objectives:
- [Objective 1]
- [Objective 2]

We do not rest. We signal.
```

---

## Appendix: Quick Reference Commands

### Rose Bot
| Command | Purpose |
|---|---|
| `/welcome on/off` | Toggle welcome messages |
| `/setwelcome [text]` | Set welcome message |
| `/rules` | Display rules |
| `/setrules [text]` | Set rules |
| `/ban` | Ban a user (reply to their message) |
| `/mute [time]` | Mute a user (reply to their message) |
| `/unmute` | Unmute a user |
| `/purge [count]` | Delete last N messages |
| `/report` | Report a message to admins |
| `/lock [type]` | Lock a message type (e.g., `/lock url`) |

### Combot
Managed primarily through the web dashboard at combot.org. In-group commands are limited.

### General Admin
| Action | How |
|---|---|
| Pin a message | Long-press (mobile) or right-click (desktop) > Pin |
| Delete a message | Long-press or right-click > Delete |
| Ban a user | Tap their name > three dots > Ban |
| Restrict a user | Tap their name > three dots > Restrict |
| Enable slow mode | Group settings > Slow Mode > choose interval |
| Enable topics | Group settings > Topics > ON |

---

## Final Note

The Telegram group is where the community lives day-to-day. X is for reach, the website is for credibility, but Telegram is where conviction is built and maintained.

Keep it active. Keep it funny. Keep it secure. Keep it on-brand.

The signal does not broadcast itself.

**Trust the signal. Regret the timing.**

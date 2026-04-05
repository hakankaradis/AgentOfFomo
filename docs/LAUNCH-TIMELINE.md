# AgentOfFomo ($AOFOMO) Launch Playbook

**Mint Address:** `C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q`  
**Chain:** Solana  
**Supply:** 1,000,000,000 $AOFOMO  
**Mint Authority:** Revoked  
**Freeze Authority:** Revoked  
**Start Date:** TBD (referred to as Day 1 below)

---

## Current State (as of April 2, 2026)

**Done:**
- Token minted on Solana mainnet (1B supply)
- Mint and freeze authority revoked
- Website built (Next.js + Tailwind, Firebase hosting)
- The Dossier written
- Mascot art created
- X account live: @agentoffomo
- Domain: agentoffomo.com

**Not Done:**
- On-chain token metadata (Metaplex)
- Telegram group
- Discord server
- Liquidity pool (Raydium)
- Token listed on Jupiter aggregator
- CoinGecko / CoinMarketCap listing
- Content pipeline
- Community building

---

## Budget Overview

| Week | Category | Estimated Cost (USD) | Notes |
|------|----------|---------------------|-------|
| 1 | Infrastructure + metadata | $50-100 | SOL for Metaplex metadata, domain/hosting already covered |
| 2 | Content + tools | $100-200 | Design tools, scheduling tools, small giveaways |
| 3 | Influencer outreach | $500-2,000 | Micro-influencer partnerships (negotiate token-based deals where possible) |
| 4 | Liquidity + launch | $2,000-10,000 | Initial liquidity pool seeding (this is the big variable) |
| 5-8 | Sustaining | $500-1,000/week | Ongoing content, community rewards, listing fees |

**Total estimated pre-launch spend:** $3,000-12,000 (heavily dependent on liquidity budget)

**Important:** The liquidity pool amount is the single biggest financial decision. Too little and the token is illiquid and looks abandoned. Too much and you are exposed if things go wrong. See the Liquidity Decision section under Week 4.

---

## Tools Needed

**Setup (Week 1):**
- Solana CLI + Metaplex CLI or `metaboss` for on-chain metadata
- Phantom wallet (deployer, treasury, liquidity wallets -- already have these)
- Discord (create server, set up roles/channels/bots)
- Telegram (create group + channel)
- Canva Pro or Figma for content creation
- Buffer or Typefully for scheduling X posts

**Content Production (Week 2-3):**
- Image editor for memes (Canva, Photoshop, or Figma)
- Video editor for short clips (CapCut, DaVinci Resolve)
- Screenshot/mockup tools for fake Bloomberg terminals, signal alerts
- Sticker creation tool for Telegram stickers

**Launch (Week 4):**
- Raydium UI for creating liquidity pool
- Jupiter aggregator (auto-lists once Raydium pool exists with sufficient liquidity)
- DexScreener / Birdeye for monitoring
- Solscan / Solana Explorer for transparency

**Post-Launch (Week 5+):**
- CoinGecko listing form
- CoinMarketCap listing form
- Analytics (Plausible or PostHog, already in stack)
- Community management bot (Discord: Carl-bot or MEE6)

---

## Week 1: Foundation (Days 1-7)

**Goal:** Get all infrastructure in place. Nothing public-facing yet except the X account doing light teaser posts. By end of week, every channel exists, metadata is on-chain, and you have a content backlog ready to deploy.

### Day 1 -- Metadata and Discord Setup

**Tasks:**
- [ ] Upload token metadata to on-chain via Metaplex
  - Token name: AgentOfFomo
  - Symbol: AOFOMO
  - Upload token icon (the mascot) to a permanent URI (Arweave or IPFS via Irys/Bundlr)
  - Set metadata URI pointing to JSON with name, symbol, description, image
  - Use `metaboss` or Metaplex JS SDK to create metadata account
  - Verify on Solscan that metadata displays correctly
- [ ] Create Discord server with the following channels:
  - `#general` -- main chat
  - `#announcements` -- locked, admin-only posts
  - `#memes` -- community meme sharing
  - `#mission-briefings` -- lore and updates
  - `#faq` -- pinned answers to common questions
  - `#buy-aofomo` -- how to buy guide, mint address, links
  - `#voice-ops` -- voice channel for community calls
- [ ] Set up Discord roles: Agent (holder), Operative (active contributor), Mission Control (admin)
- [ ] Install Discord bots: moderation bot (Carl-bot), welcome bot, optional holder verification bot later

**Content (X):**
- Post 1 (morning): A mysterious teaser image -- the mascot silhouette with glowing green eyes, black background. Caption: "Signal detected." No ticker, no explanation.

**Metrics:**
- Metadata visible on Solscan/Solana Explorer
- Discord server functional with all channels

**Who:** Founder does all of this.

---

### Day 2 -- Telegram and Content Backlog Start

**Tasks:**
- [ ] Create Telegram group: "AgentOfFomo -- Mission Control"
- [ ] Create Telegram announcement channel (one-way broadcast): "AgentOfFomo Signals"
- [ ] Set Telegram group rules, pin welcome message with mint address and links
- [ ] Add Telegram admin bot for moderation (Combot or Rose)
- [ ] Create Telegram sticker pack (5-8 stickers from mascot art):
  - ENTRY CONFIRMED
  - SIGNAL RECEIVED
  - TOO LATE IS STILL ON TIME
  - CONVICTION MAXXED
  - IGNORE THE FEAR
  - (mascot giving thumbs up)
  - (mascot with red alert sirens)
  - (mascot shrugging -- "this is fine")
- [ ] Start building content backlog -- create at least 10 meme images:
  - Fake Bloomberg terminal screenshots with absurd alerts
  - "Signal confidence: 99.7%" cards
  - Before/after hearing the signal memes
  - Classified briefing format posts

**Content (X):**
- Post 2 (afternoon): "Initialization sequence: 47% complete." with a terminal-style progress bar graphic.

**Metrics:**
- Telegram group live and functional
- At least 5 memes created

**Who:** Founder. If you have a designer friend, bring them in on sticker/meme creation.

---

### Day 3 -- Website Final Review and Content Backlog

**Tasks:**
- [ ] Review entire website for broken links, typos, missing content
- [ ] Ensure mint address is prominently displayed on the site
- [ ] Add Solscan/Solana Explorer link for the token
- [ ] Add Discord and Telegram links to the website (even if channels are not yet public)
- [ ] Verify The Dossier page is fully deployed and readable
- [ ] Create 10 more memes for the backlog (target: 20 total before going public)
- [ ] Write 14 pre-written X posts (enough for 2 per day for a week) in the brand voice

**Content (X):**
- Post 3 (evening): "AgentOfFomo has detected a rare condition: an empty timeline and a full wallet. Correction incoming."

**Metrics:**
- Website fully reviewed, all links working
- 20+ memes in backlog
- 14+ pre-written posts ready

**Who:** Founder.

---

### Day 4 -- Friends and Family Seeding

**Tasks:**
- [ ] Personally message 10-20 trusted friends/contacts in crypto
- [ ] Share the project privately: website link, Dossier, mascot art
- [ ] Ask for honest feedback on branding, site, positioning
- [ ] Invite them to Discord and Telegram (they become your first community)
- [ ] Ask 3-5 of them to follow @agentoffomo on X
- [ ] Identify 2-3 friends willing to be early moderators in Discord/Telegram
- [ ] Create a shared Google Drive or Notion with the meme asset pack so early supporters can start making content

**Content (X):**
- Post 4: A meme from the backlog. Something funny and standalone -- no shill, no ticker mention yet.

**Metrics:**
- 5-10 people in Discord
- 5-10 people in Telegram
- At least 3 pieces of honest feedback received and reviewed

**Who:** Founder (personal outreach only, no public shilling yet).

---

### Day 5 -- Content Systems and Scheduling

**Tasks:**
- [ ] Set up a post scheduling tool (Typefully, Buffer, or TweetDeck)
- [ ] Schedule posts for the next 7 days (2 per day on X)
- [ ] Create a content calendar spreadsheet with columns: Date, Platform, Post Type, Copy, Image, Status
- [ ] Plan content mix: 40% memes, 30% lore/worldbuilding, 20% engagement (questions, polls), 10% direct project info
- [ ] Record 2-3 short video clips (under 30 seconds) of the mascot with animated effects or screen recordings of the website for future use
- [ ] Prepare a "How to Buy $AOFOMO" guide (step by step: install Phantom, get SOL, go to Raydium/Jupiter, paste mint address) -- do not publish yet, save for launch week

**Content (X):**
- Post 5 (morning): "Mission update: All signal channels have been secured. Recruitment begins shortly."
- Post 6 (evening): A meme from the backlog.

**Metrics:**
- 7 days of posts scheduled
- Content calendar created
- How-to-buy guide drafted

**Who:** Founder.

---

### Day 6 -- Influencer Research

**Tasks:**
- [ ] Research 20-30 Solana-focused micro-influencers on X (1K-50K followers)
- [ ] Focus on: meme token accounts, Solana ecosystem accounts, crypto humor accounts
- [ ] Create a spreadsheet: Handle, Followers, Engagement Rate, DM Status, Rate (if known), Notes
- [ ] Do NOT reach out yet -- just build the list
- [ ] Look for accounts that have previously promoted meme tokens and check if those tokens were legitimate or scams (you do not want to be associated with scam promoters)
- [ ] Identify 3-5 meme creators who make original content (not just reposters)
- [ ] Check DexScreener and Birdeye for comparable meme token launches to understand typical volume and holder patterns in the first 48 hours

**Content (X):**
- Post 7: "Classified briefing: There is still time to enter. Source: internal feelings. This is not financial advice. This is emotional mobilization."
- Post 8: A lore post -- a paragraph from the Origin File section in the voice of the agent.

**Metrics:**
- 20+ influencers researched and documented
- 3-5 content creators identified
- Competitor launch data reviewed

**Who:** Founder.

---

### Day 7 -- Week 1 Review and Week 2 Prep

**Tasks:**
- [ ] Audit everything built this week:
  - Metadata on-chain and visible? Verify on Solscan.
  - Discord server clean, organized, bots working?
  - Telegram group and channel functional?
  - Website all links working?
  - Content backlog sufficient (20+ memes, 14+ posts)?
  - Influencer list ready?
  - Friends/family feedback incorporated?
- [ ] Fix anything broken
- [ ] Plan Week 2 in detail based on what you learned
- [ ] Rest. Seriously. The next three weeks are intense.

**Content (X):**
- Post 9: "The entity does not sleep. The entity does not eat. The entity watches your portfolio and judges silently."
- Post 10: A poll -- "What is your primary entry strategy?" with options like "Buy the top," "Wait and miss it," "Ape with conviction," "Ask in the group chat first"

**Metrics:**
- All Week 1 deliverables complete
- X account has 10 posts total
- Discord and Telegram exist and are functional
- Token metadata on-chain

**Who:** Founder.

---

## Week 2: Community Building (Days 8-14)

**Goal:** Start growing the audience. Open Discord and Telegram to the public. Begin consistent daily posting on X. Start influencer outreach. Build the community from 10 people to 50-100.

### Day 8 -- Go Public with Communities

**Tasks:**
- [ ] Announce Discord and Telegram on X with invite links
- [ ] Pin a welcome thread in Discord #announcements with:
  - What is AgentOfFomo
  - Mint address
  - Website link
  - The Dossier link
  - Rules
  - How to get roles
- [ ] Pin equivalent welcome message in Telegram
- [ ] Post the sticker pack in Telegram
- [ ] Update X bio to include Discord and Telegram links
- [ ] Update website to link to Discord and Telegram (if not already done)

**Content (X):**
- Post (morning): "Mission channels are now open. Discord and Telegram links in bio. The signal cannot be contained."
- Post (evening): Share a meme and tag the Discord/Telegram links in a reply

**Metrics:**
- 5-15 new members across Discord and Telegram from organic X traffic
- No spam or bot issues in either channel

**Who:** Founder posts and monitors. Early friends help moderate.

---

### Day 9 -- Start Influencer Outreach (Batch 1)

**Tasks:**
- [ ] DM 5-7 micro-influencers from your research list
- [ ] Use a personalized message, not a copy-paste template. Reference something specific they posted.
- [ ] Offer: free tokens for a post, or a small paid promotion ($50-200 range for micro accounts)
- [ ] Be upfront: "This is a meme token. No fake utility claims. We think the branding is strong."
- [ ] Do NOT promise price targets or returns
- [ ] Follow up with anyone who viewed but did not respond (wait 24 hours)
- [ ] Engage genuinely with 10-15 accounts in the Solana meme space (reply to their posts, do not shill, just be present and funny)

**Content (X):**
- 2 posts: one meme, one lore snippet
- Reply to at least 5 popular crypto/meme threads with funny on-brand comments (no direct shilling, just be funny and have @agentoffomo as the handle)

**Metrics:**
- 5-7 influencer DMs sent
- Response rate tracked
- Engagement on X replies

**Who:** Founder handles outreach. Community helps with engagement.

---

### Day 10 -- Content Production Day

**Tasks:**
- [ ] Create 15 new memes for the next week
- [ ] Create 3 "classified signal" cards (vertical format, good for X and Telegram)
- [ ] Create 2 animated GIFs or short video clips using the mascot
- [ ] Write a short lore thread (5-7 tweets) about the origin of AgentOfFomo -- save for later in the week
- [ ] Create a meme template that community members can remix (provide blank versions in Discord)

**Content (X):**
- 2 posts: one engagement post (question or poll), one meme

**Metrics:**
- 15+ new memes created
- Content backlog refreshed for another 7 days

**Who:** Founder or designer collaborator.

---

### Day 11 -- Community Engagement Push

**Tasks:**
- [ ] Host first casual voice chat in Discord (30 minutes, informal, just talk about the project and memes)
- [ ] Post a "meme of the day" challenge in Discord #memes
- [ ] Share the meme template from Day 10 and ask community to remix
- [ ] Respond to every single message in Discord and Telegram today
- [ ] Follow up on influencer DMs from Day 9
- [ ] Send outreach to 3-5 more influencers (Batch 2)

**Content (X):**
- Post the lore thread (5-7 tweets) from the content production day
- 1 additional meme post

**Metrics:**
- Voice chat attendance (even 3-5 people is fine at this stage)
- Number of community-created memes
- Total Discord + Telegram members

**Who:** Founder runs the voice chat. Community contributes memes.

---

### Day 12 -- Cross-Platform Presence

**Tasks:**
- [ ] Create a TikTok or Instagram account if you have capacity (optional but useful)
- [ ] Repurpose X content for other platforms
- [ ] Submit the website to relevant crypto directories and link aggregators
- [ ] Engage in 2-3 Telegram groups related to Solana meme tokens (do not spam, just participate)
- [ ] Engage in 2-3 Discord servers related to Solana (same rule: participate, do not spam)
- [ ] Document all feedback and questions people ask -- these become FAQ content

**Content (X):**
- 2 posts: one capability card (from the "Core Capabilities" section), one meme
- Continue replying to threads in the Solana space

**Metrics:**
- Number of external communities engaged
- Questions and feedback documented

**Who:** Founder.

---

### Day 13 -- Metrics Review and Adjustment

**Tasks:**
- [ ] Review X analytics: impressions, engagement rate, follower growth
- [ ] Review Discord and Telegram member counts and activity levels
- [ ] Review influencer outreach results: who responded, who is interested, who ghosted
- [ ] Identify which content types perform best (memes vs lore vs engagement posts)
- [ ] Double down on what works, cut what does not
- [ ] Adjust Week 3 plan based on data
- [ ] If influencer outreach is getting no traction, shift budget to community rewards and organic content

**Content (X):**
- 2 posts based on whatever content type performed best this week

**Metrics:**
- X followers (target: 100-300 by end of Week 2)
- Discord members (target: 30-50)
- Telegram members (target: 30-50)
- Influencer deals confirmed (target: 2-3)

**Who:** Founder.

---

### Day 14 -- Week 2 Review and Week 3 Prep

**Tasks:**
- [ ] Full audit of community health: are people talking, or is it dead?
- [ ] If communities are quiet, plan more interactive events for Week 3
- [ ] If communities are active, plan how to channel that energy into launch hype
- [ ] Finalize influencer partnerships for Week 3
- [ ] Confirm content backlog is sufficient for Week 3's increased posting frequency
- [ ] Begin drafting the "launch announcement" post and thread
- [ ] Start planning the liquidity pool details (how much SOL, what ratio, which DEX)

**Content (X):**
- 2 posts: one looking-forward teaser ("Phase 2 of the mission begins next week"), one meme

**Metrics:**
- All Week 2 targets reviewed against actuals
- Week 3 plan finalized

**Who:** Founder.

---

## Week 3: Hype Building (Days 15-21)

**Goal:** Create sustained excitement. Posting frequency goes up. Influencer content goes live. Community events start. By end of week, the community should feel like something is about to happen.

### Day 15 -- Increase Posting Cadence

**Tasks:**
- [ ] Increase X posting to 3-4 times per day
- [ ] Post schedule: morning meme, midday engagement post, afternoon lore/info, evening meme or RT community content
- [ ] Launch a daily "Signal Report" format on X -- a recurring post template with fake market intelligence in the brand voice
- [ ] Start cross-posting key content to Telegram channel
- [ ] Begin countdown language: "T-minus 13 days to full deployment" (or whatever your launch date is)

**Content (X):**
- Signal Report #001
- 2 memes
- 1 engagement post

**Metrics:**
- Impressions per post
- Engagement rate changes with higher frequency

**Who:** Founder posts. Use scheduling tools.

---

### Day 16 -- Launch Meme Contest

**Tasks:**
- [ ] Announce meme contest in Discord, Telegram, and X
- [ ] Rules: create a meme using AgentOfFomo branding/mascot, post it on X with the hashtag #AgentOfFomo, share link in Discord #memes
- [ ] Prize: 1,000,000 $AOFOMO to the winner, 500,000 to runner-up (tokens from community reserve)
- [ ] Duration: 5 days (ends Day 20)
- [ ] Pin the contest rules in all channels
- [ ] Share the meme asset pack (mascot PNGs, backgrounds, templates) so people can create easily

**Content (X):**
- Contest announcement thread (3-4 tweets)
- Signal Report #002
- 1-2 memes to maintain regular cadence

**Metrics:**
- Number of contest entries
- Hashtag usage
- New followers from contest activity

**Who:** Founder announces. Community creates.

---

### Day 17 -- First Influencer Posts Go Live

**Tasks:**
- [ ] Coordinate with confirmed influencers to post today
- [ ] Provide them with: key talking points, mascot image, website link, mint address
- [ ] Do NOT give them a script -- let them use their own voice
- [ ] Remind them: "This is a meme token, no promises of returns"
- [ ] Engage immediately with every influencer post (like, RT, reply)
- [ ] Monitor incoming traffic: are new people joining Discord/Telegram?
- [ ] Be ready in Discord and Telegram to welcome newcomers and answer questions

**Content (X):**
- Signal Report #003
- RT and engage with influencer posts
- 1-2 organic posts

**Metrics:**
- Influencer post impressions and engagement
- New follower spike
- New Discord/Telegram members from influencer traffic
- Quality of incoming members (are they real or bots?)

**Who:** Founder coordinates. Moderators help in chat.

---

### Day 18 -- Community Mission #1

**Tasks:**
- [ ] Launch a "community raid" -- coordinate 15-30 minutes where everyone in Discord engages with the latest X post (likes, RTs, replies)
- [ ] Frame it in-universe: "Mission briefing: All agents report to X for Operation Signal Boost"
- [ ] Host a second voice chat in Discord -- this time with a theme: "Origin story discussion" or "Meme review session"
- [ ] Share the best community-made memes from the contest so far
- [ ] Start a "daily holder check" vibe in Telegram -- casual morning messages from the agent character

**Content (X):**
- The post being raided (make it a strong meme or a key brand message)
- Signal Report #004
- 1-2 additional posts

**Metrics:**
- Raid participation (how many people engaged)
- Engagement spike on the raided post
- Voice chat attendance

**Who:** Founder leads the raid and voice chat. Community participates.

---

### Day 19 -- Second Influencer Wave

**Tasks:**
- [ ] Second batch of influencer posts goes live (if you have them)
- [ ] If influencer budget is limited, focus on organic growth: engage in more threads, post more memes, be funnier
- [ ] Create a "press kit" page or folder: logo files, mascot images, key facts, one-liner descriptions, links -- makes it easy for anyone to write about the project
- [ ] Begin writing the launch day thread (the big announcement thread for when the liquidity pool goes live)

**Content (X):**
- Signal Report #005
- 2-3 memes
- Engage with influencer posts

**Metrics:**
- Total X followers (target: 500-1,000 by end of Week 3)
- Total Discord members (target: 100-200)
- Total Telegram members (target: 100-200)

**Who:** Founder.

---

### Day 20 -- Meme Contest Ends and Winner Announced

**Tasks:**
- [ ] Close meme contest submissions
- [ ] Review all entries with moderators
- [ ] Pick winner and runner-up based on creativity and engagement
- [ ] Announce winner on X, Discord, and Telegram
- [ ] Send prize tokens to winner's wallet
- [ ] Compile the best submissions into a "meme gallery" post
- [ ] Use the best community memes in official channels (with credit)

**Content (X):**
- Winner announcement thread with the winning meme
- Signal Report #006
- Gallery of top submissions

**Metrics:**
- Total contest entries
- Engagement on winner announcement
- Community sentiment

**Who:** Founder picks winner. Community celebrates.

---

### Day 21 -- Week 3 Review and Launch Week Prep

**Tasks:**
- [ ] Review all metrics: followers, community size, engagement rates, influencer performance
- [ ] Make a go/no-go decision for launch timing:
  - If community is growing and engaged: proceed with Week 4 launch
  - If community is flat or declining: consider extending hype phase by 3-5 days
- [ ] Finalize liquidity pool plan (see Week 4 details below)
- [ ] Finalize launch day thread copy
- [ ] Finalize "How to Buy" guide
- [ ] Test the entire buy flow yourself: SOL in Phantom, connect to Raydium/Jupiter, swap for $AOFOMO
- [ ] Prepare launch day graphics: announcement banners, updated X header, Telegram pinned image
- [ ] Brief moderators on launch day plan -- they need to know what is happening hour by hour

**Content (X):**
- "T-minus 7 days. All systems nominal." teaser
- Signal Report #007
- 1 meme

**Metrics:**
- Go/no-go decision documented with reasoning
- All launch materials ready
- Buy flow tested end to end

**Who:** Founder.

---

## Week 4: Launch Week (Days 22-28)

**Goal:** Seed liquidity, go live on DEX, execute coordinated launch, sustain momentum through the week.

### Day 22 -- Final Website Deploy

**Tasks:**
- [ ] Deploy final version of website with all updates:
  - Mint address prominently displayed
  - "How to Buy" section or page added
  - Trade link (will add Raydium/Jupiter link once pool is live)
  - Discord and Telegram links confirmed working
  - The Dossier accessible
  - Disclaimer visible
- [ ] Update X profile: bio, header image, pinned tweet (prepare pin for launch day)
- [ ] Update Discord: server icon, banner, channel descriptions finalized
- [ ] Update Telegram: group photo, description, pinned message finalized

**Content (X):**
- "Final systems check. All channels operational. Deployment is imminent."
- Signal Report #008
- 1 meme

**Metrics:**
- Website fully deployed and verified
- All social profiles updated and consistent

**Who:** Founder.

---

### Day 23 -- Liquidity Pool Setup (Pre-Launch)

**The Liquidity Decision:**

This is the most consequential financial decision of the launch. Consider carefully:

- **Minimum viable liquidity:** 5-10 SOL paired with $AOFOMO tokens. This makes the token tradeable but with high slippage on any meaningful trade. Acceptable for a very small launch.
- **Moderate liquidity:** 20-50 SOL. Reasonable for a meme token launch. Allows small to medium trades without extreme slippage.
- **Strong liquidity:** 50-100+ SOL. Makes trading smoother but represents significant capital at risk.

**Recommendation:** Start with 20-50 SOL unless you have strong reason to go higher. You can always add more liquidity later.

**Tasks:**
- [ ] Transfer the designated $AOFOMO allocation from treasury to liquidity wallet
- [ ] Transfer SOL to liquidity wallet
- [ ] Go to Raydium (raydium.io) and create a new liquidity pool:
  - Token A: SOL
  - Token B: AOFOMO (paste mint address)
  - Set initial price ratio
  - Confirm and create pool
- [ ] **DO NOT ANNOUNCE THE POOL YET** -- you want a coordinated launch, not a silent leak
- [ ] Verify the pool exists on Raydium
- [ ] Verify the pair appears on DexScreener and Birdeye (may take a few hours)
- [ ] Test a small swap yourself to confirm everything works
- [ ] Record the pool address and LP token details

**Content (X):**
- "Agent status: deployment in 48 hours. Emotional preparation advised."
- Signal Report #009
- 1 meme

**Metrics:**
- Pool created and functional
- Pair visible on DexScreener/Birdeye
- Test swap successful

**Who:** Founder only. This is a sensitive operation.

---

### Day 24 -- Pre-Launch Day (T-Minus 1)

**Tasks:**
- [ ] Verify pool is still working and visible on aggregators
- [ ] Check if Jupiter has auto-listed the token (it often picks up new Raydium pools automatically)
- [ ] If not on Jupiter, check their listing requirements and submit if needed
- [ ] Finalize launch thread: proofread, attach images, have someone else review it
- [ ] Schedule the launch thread for tomorrow at your chosen time
- [ ] Brief all moderators: "Tomorrow at [TIME], we go live. Here is what to expect."
- [ ] Pre-write Telegram and Discord announcements for launch
- [ ] Pre-write replies to common questions: "Where do I buy?", "What is the mint address?", "Is this safe?", "What is the supply?"
- [ ] Get sleep. Tomorrow matters.

**Content (X):**
- "T-minus 24 hours. The signal is now unavoidable."
- Signal Report #010 -- "Final pre-deployment briefing"
- 1 hype meme

**Metrics:**
- Launch thread finalized and scheduled
- All moderators briefed
- Pre-written responses ready

**Who:** Founder.

---

### Day 25 -- LAUNCH DAY

#### Hour-by-Hour Plan

**Timezone note:** Pick a time that works for both US and European audiences. Recommended launch time: 14:00 UTC (10 AM ET / 7 AM PT / 4 PM CET).

**Hour -2 (12:00 UTC):**
- [ ] Final check: pool functional, website live, all links working
- [ ] Moderators in position in Discord and Telegram
- [ ] All launch content loaded and ready to post

**Hour -1 (13:00 UTC):**
- [ ] Post teaser on X: "T-minus 60 minutes. All systems green."
- [ ] Post teaser in Discord and Telegram: "Standby for deployment."
- [ ] Monitor for any technical issues

**Hour 0 (14:00 UTC) -- THE LAUNCH:**
- [ ] Post the main launch thread on X (7-10 tweets):
  1. AgentOfFomo is now live. The autonomous meme agent has been fully deployed. $AOFOMO
  2. Mint address: `C3B5ncGtTks7VmeyuenjWxY3kwYJnt2WnAbn4nvs2F1Q`
  3. What is AgentOfFomo? (brief explanation with mascot image)
  4. The Dossier is live (link)
  5. How to buy (step by step with Raydium/Jupiter link)
  6. Token facts: 1B supply, mint revoked, freeze revoked, transparent allocations
  7. Tokenomics summary
  8. Join the mission: Discord, Telegram links
  9. Website: agentoffomo.com
  10. "Trust the signal. Regret the timing." (closing with the strongest meme image)
- [ ] Pin the launch thread on X
- [ ] Post launch announcement in Discord #announcements
- [ ] Post launch announcement in Telegram channel
- [ ] DM confirmed influencers: "We are live. Feel free to post."

**Hour +1 (15:00 UTC):**
- [ ] Monitor DexScreener for volume and trades
- [ ] Respond to every reply on the launch thread
- [ ] Welcome every new member in Discord and Telegram
- [ ] Post a follow-up meme on X
- [ ] Coordinate a community engagement push: "All agents engage with the launch thread"

**Hour +2 (16:00 UTC):**
- [ ] Post a screenshot of the DexScreener chart (if it looks good) with a funny caption
- [ ] Share holder count milestones: "50 agents recruited" etc.
- [ ] Continue monitoring and engaging

**Hour +3 to +6 (17:00-20:00 UTC):**
- [ ] Continue posting every 1-2 hours: memes, engagement, milestones
- [ ] Host a Discord voice chat: "Launch day celebration / chaos"
- [ ] Keep moderating channels -- watch for scam links, impersonators, fake contracts
- [ ] If influencer posts are going live, engage with each one immediately

**Hour +8 to +12 (22:00-02:00 UTC):**
- [ ] Post an end-of-day recap: "Day 1 report: [X] holders, [X] volume, [X] agents recruited"
- [ ] Thank the community
- [ ] Share the DexScreener link one more time
- [ ] Set expectations: "This is day 1 of a long mission, not a one-day event"

**Launch Day Metrics to Track:**
- Number of unique holders (check Solscan)
- 24h trading volume (check DexScreener)
- X followers gained
- Discord members gained
- Telegram members gained
- Number of trades
- Largest buy/sell
- Any technical issues

**Who:** Founder runs everything. Moderators manage Discord and Telegram. Influencers post on their own schedule.

---

### Day 26 -- Post-Launch Day 1

**Tasks:**
- [ ] Post morning recap with real numbers (holders, volume, etc.)
- [ ] Continue engaging on X, Discord, Telegram
- [ ] Monitor for copycat tokens or fake contracts -- warn community if any appear
- [ ] Verify the token appears correctly on Jupiter, DexScreener, Birdeye
- [ ] Update website with live trading link if not already done
- [ ] Look at what content performed best on launch day and create more of that type
- [ ] Check if any organic influencers or accounts picked up the project

**Content (X):**
- Morning: Recap and chart screenshot
- Midday: Meme
- Afternoon: Engagement post -- "What made you ape in?"
- Evening: Lore post

**Metrics:**
- Continued volume and holder growth
- No impersonation issues
- Community sentiment check

**Who:** Founder and moderators.

---

### Day 27 -- Post-Launch Day 2

**Tasks:**
- [ ] If volume and interest are strong: prepare a second wave of influencer posts
- [ ] If volume is declining: do not panic -- this is normal for meme tokens, focus on community
- [ ] Launch Community Mission #2: a coordinated posting event or meme creation challenge
- [ ] Start planning the CoinGecko and CoinMarketCap submission (requires 24-48h of trading data)
- [ ] Write a brief "State of the Mission" update for Discord

**Content (X):**
- 3-4 posts maintaining the cadence
- At least 1 post that is purely funny / not a shill

**Metrics:**
- Volume trend (up, stable, or declining?)
- Holder trend (growing?)
- Community engagement level

**Who:** Founder.

---

### Day 28 -- End of Launch Week Review

**Tasks:**
- [ ] Full metrics review:
  - Total holders
  - Total 7-day volume
  - X followers
  - Discord size
  - Telegram size
  - Best-performing content
  - Influencer ROI
  - Community health assessment
- [ ] Document everything: what worked, what did not, what to do differently
- [ ] Set goals for Weeks 5-8
- [ ] Begin CoinGecko submission process

**Content (X):**
- "Week 1 mission report" -- share key stats in the agent briefing voice
- 2 memes

**Metrics:**
- All metrics documented
- Post-launch plan set

**Who:** Founder.

---

## Post-Launch: Weeks 5-8

### Week 5 -- Sustaining Momentum

**Daily cadence:** 2-3 posts per day on X, daily activity in Discord/Telegram

**Key tasks:**
- [ ] Submit to CoinGecko (requires: working website, trading pair on DEX, 24h+ trading history, no mint/freeze authority -- you meet all these)
- [ ] Submit to CoinMarketCap (similar requirements, often takes longer)
- [ ] Verify listing on Jupiter aggregator (auto-detection usually works, manual submission if not)
- [ ] Launch weekly content series: "Signal Report" (weekly edition), "Agent's Log" (lore), "Mission of the Week" (community task)
- [ ] Host weekly Discord voice chats (pick a consistent day/time)
- [ ] Run a second meme contest
- [ ] Begin tracking wallet activity: are early holders selling? Are new holders coming in?
- [ ] Consider creating a simple Telegram bot that responds in the agent character

### Week 6 -- Expansion

**Key tasks:**
- [ ] Reach out to Solana meme token DAOs and communities for cross-promotion
- [ ] Create short video content (15-30 second clips) for X and TikTok
- [ ] If CoinGecko lists you, announce it everywhere
- [ ] Consider a community AMA (text-based in Discord or voice-based)
- [ ] Launch the "fake signal terminal" interactive page on the website (from the roadmap Phase 3)
- [ ] Explore partnerships with meme creators for commissioned content
- [ ] Review and update The Dossier if anything has changed

### Week 7 -- Deepening

**Key tasks:**
- [ ] Launch community roles/missions: assign "Agent" ranks based on activity, meme creation, or recruitment
- [ ] Create a community leaderboard (manual or bot-based)
- [ ] Begin building the meme generator tool (from roadmap Phase 3)
- [ ] Create a lore expansion: new classified files, new agent backstory chapters
- [ ] If budget allows, commission more mascot art in different poses/situations
- [ ] Evaluate whether to add more liquidity to the pool based on volume

### Week 8 -- Assessment and Planning

**Key tasks:**
- [ ] Full month review: all metrics, all learnings
- [ ] Community survey: what do holders want? What content do they like? What should change?
- [ ] Decide on next major initiative: merch, animated content, new website features, another event
- [ ] Plan the next 30 days based on data
- [ ] Evaluate budget: what is the burn rate? How long can you sustain this?
- [ ] Consider whether to bring on community moderators or contributors in a more formal capacity

### Ongoing Content Calendar Template (Weekly)

| Day | X Posts | Discord Activity | Telegram Activity |
|-----|---------|-----------------|-------------------|
| Monday | Signal Report (weekly), 1 meme | Mission of the Week announced | Morning briefing |
| Tuesday | 2 memes, 1 engagement post | Meme sharing encouraged | Sticker of the day |
| Wednesday | Lore thread, 1 meme | Voice chat (weekly) | Q&A or poll |
| Thursday | 2 memes, 1 milestone/stats post | Community spotlight | Share community meme |
| Friday | 2 memes, 1 fun post | Meme contest (if running) | Weekend vibes post |
| Saturday | 1-2 casual posts | Low-key engagement | Light activity |
| Sunday | 1 post, week preview | Prep for Monday | Quiet day |

---

## Contingency Plans

### Scenario 1: Launch is slow (low volume, few new holders)

**Indicators:** Under 50 holders after 48 hours, under $5K volume in first 24 hours, minimal X engagement on launch thread.

**Response:**
- Do not panic publicly. Never post about disappointment or frustration.
- Double down on content quality -- the memes need to be funnier, the brand voice needs to be sharper.
- Shift budget from influencer outreach to community rewards (incentivize the people who ARE here).
- Consider adding more liquidity to reduce slippage (if that is a barrier to buying).
- Extend the hype phase: keep posting, keep building, keep engaging. Many meme tokens have slow starts and pick up later.
- Reach out to influencers who did not respond initially -- sometimes timing matters more than the first DM.
- Do NOT start making exaggerated claims or fake hype out of desperation.
- Evaluate honestly: is the brand strong? Is the content good? Is the token accessible? Fix what is fixable.

### Scenario 2: Launch goes viral (unexpected volume, rapid holder growth)

**Indicators:** 500+ holders in 24 hours, significant volume, trending on DexScreener, unsolicited attention.

**Response:**
- Ensure moderation is active 24/7 in Discord and Telegram (recruit emergency moderators if needed).
- Pin the official mint address EVERYWHERE -- scammers will create copycat tokens immediately.
- Post repeatedly: "The ONLY official mint address is [address]. Do not trust anything else."
- Do not overpromise. The temptation to make big claims when things are going well is strong. Resist it.
- Increase posting frequency but maintain quality and brand voice.
- Do not add massive liquidity in the heat of the moment -- wait for things to stabilize.
- Prepare for the inevitable pullback. Do not post anything during a pullback that sounds defeated.
- Fast-track CoinGecko and CMC submissions while momentum is high.
- Reach out to larger influencers who may now be interested.

### Scenario 3: Technical issues on launch day

**Indicators:** Pool not working, Jupiter not detecting token, website down, wallet issues.

**Response:**
- Have a backup plan for every critical system:
  - Website down: Firebase status page, communicate via X/Telegram/Discord that site is temporarily down
  - Pool issues: have Raydium support documentation ready, post in Raydium Discord for help
  - Jupiter not listing: direct users to Raydium directly, paste the direct swap URL
- Communicate transparently: "We are aware of [issue] and are working on it. The mission continues."
- Do not pretend everything is fine if it is not. Transparency builds trust.
- Have the Raydium pool address ready to share as a direct link in case Jupiter does not work.

### Scenario 4: Scam/impersonation attempts

**Indicators:** Fake tokens with similar names, impersonator accounts, phishing links in your communities.

**Response:**
- Immediately post warnings on all channels with the official mint address.
- Report fake X accounts.
- Ban and report phishing attempts in Discord and Telegram.
- Pin a "security notice" in all channels.
- Add the mint address to your X bio and display name if needed.
- Create a simple verification page on your website: "Verify the official contract" with the address.

---

## Key Decision Points

These are moments where you need to stop and think, not just execute:

1. **Day 7 -- Go/no-go on Week 2 plan.** Is the infrastructure solid? If not, extend Week 1.

2. **Day 14 -- Influencer strategy check.** Are influencers responding? If not, reallocate budget to community rewards and organic content.

3. **Day 21 -- Launch timing decision.** Is the community large enough and engaged enough? If not, extend the hype phase. There is no prize for launching on schedule to an empty room.

4. **Day 23 -- Liquidity amount.** How much SOL to commit? This cannot be easily undone. Be conservative rather than aggressive.

5. **Day 25 -- Launch day execution.** Is everything truly ready? If something is broken, it is better to delay 24-48 hours than to launch with issues.

6. **Day 28 -- Sustainability assessment.** Can you maintain this pace? Do you need to bring on help? Is the budget holding? Be honest.

7. **Week 6 -- Growth assessment.** Is the project gaining momentum or stalling? If stalling, consider a pivot in content strategy or a new initiative to reignite interest.

---

## Rules for the Entire Process

1. **Never promise returns.** Not once. Not as a joke. Not in a DM. Not in a meme. The line between satire and a promise is thinner than you think.

2. **Always display the mint address.** On the website, in bios, in pinned messages, in every announcement. Make it impossible for someone to accidentally buy a fake token.

3. **Never fake engagement.** Do not buy followers, do not use bot services, do not inflate holder counts. It always gets exposed and it destroys trust.

4. **Post consistently.** An inactive X account kills a meme token faster than anything else. Even on slow days, post something.

5. **Be funny.** This is a meme token. If the content is not at least slightly entertaining, it is not working. When in doubt, be funnier.

6. **Moderate aggressively.** Scammers will enter your communities. Remove them immediately. A clean community is a trusted community.

7. **Document everything.** Keep records of wallet transactions, influencer agreements, community milestones, and key decisions. You may need these later.

8. **Know when to rest.** Burnout is a real risk on a solo or small-team launch. Build in breaks. The project should be fun, not a death march.

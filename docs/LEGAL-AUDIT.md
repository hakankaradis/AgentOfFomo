# AgentOfFomo ($AOFOMO) -- Legal Risk Audit

**Audit Date:** 2026-04-02
**Auditor:** Pre-launch legal risk review (not a substitute for legal counsel)
**Scope:** All user-facing content, marketing materials, social media content, community guides, and project documentation
**Standard:** Conservative analysis -- flagging anything a hostile regulator or plaintiff's attorney could use

---

## Table of Contents

1. [Critical Risk Issues](#1-critical-risk-issues)
2. [High Risk Issues](#2-high-risk-issues)
3. [Medium Risk Issues](#3-medium-risk-issues)
4. [Low Risk / Advisory Issues](#4-low-risk--advisory-issues)
5. [Files With No Significant Issues](#5-files-with-no-significant-issues)
6. [Recommended Legal Disclaimer Template](#6-recommended-legal-disclaimer-template)
7. [Pre-Launch Legal Checklist](#7-pre-launch-legal-checklist)

---

## 1. Critical Risk Issues

These items present the highest legal exposure and should be addressed before any public launch.

---

### CRIT-01: "Community Raids" Terminology and Coordinated Engagement

**Files affected:**
- `src/components/Roadmap.tsx` (line 19): `"Community raids"`
- `src/components/Community.tsx` (line 53): `"raiders"`
- `docs/MARKETING-STRATEGY.md` (Section 4, "Raid Strategies"): Detailed raid coordination playbook
- `docs/DISCORD-GUIDE.md` (line 196): `"Raid Captain"` role, lines 571: `"Raid Friday"`
- `docs/TWITTER-CONTENT.md` (line 1234, Tweet 4/7): `"raids"` in tokenomics thread
- `docs/LAUNCH-TIMELINE.md` (line 518): `"Launch a 'community raid'"`
- `docs/TELEGRAM-GUIDE.md` (line 501): `"raid" partnerships`

**Problematic text (examples):**
- Roadmap: `"Community raids"`
- Community: `"powered by holders, memers, raiders, editors, and terminally online operatives"`
- Marketing Strategy: `"Raids are coordinated community actions where members engage with a specific post..."`
- Discord Guide: `"Raid Captain -- Led or organized a successful community raid"`
- Launch Timeline: `"Launch a 'community raid' -- coordinate 15-30 minutes where everyone in Discord engages with the latest X post"`

**Why it is risky:**
The term "raid" in the context of a financial token suggests coordinated market manipulation. While the documents describe social media engagement (likes, retweets), a regulator or plaintiff could characterize this as organized promotional activity designed to artificially inflate interest and price. The SEC, CFTC, and DOJ have all pursued cases involving coordinated promotional schemes for digital assets. The word "raid" specifically evokes aggressive, organized action which looks terrible in a legal filing. Combined with the existence of a financial token, this language pattern could be used to construct a market manipulation narrative.

**Suggested replacement:**
- Replace all instances of "raid" with "community engagement push," "signal boost," or "engagement mission"
- Replace "raiders" with "supporters," "advocates," or "signal boosters"
- Replace "Raid Captain" with "Engagement Lead" or "Signal Commander"
- Replace "Raid Friday" with "Engagement Friday" or "Signal Boost Friday"
- In the Marketing Strategy, reframe the entire "Raid Strategies" section as "Community Engagement Coordination" and remove any language suggesting coordinated timing or blitz-style execution

---

### CRIT-02: Implied Buy Recommendations in Tweets

**File:** `docs/TWITTER-CONTENT.md`

**Problematic tweets:**

**MC-04 (line 987-989):**
> "I was deployed to find emotional entry points. Instead, I found a community. This does not change my recommendation. Buy more."

This is a direct buy recommendation attributed to the project's official voice. Even in a satirical context, telling people to "buy more" from an official project account is indistinguishable from investment advice.

**DS-03 (lines 362-369):**
> "Green candle: BUY / Red candle: BUY THE DIP / Sideways: ACCUMULATE / Down 50%: GENERATIONAL OPPORTUNITY / Up 500%: STILL EARLY"

This lists explicit buy recommendations for every market condition. A regulator would not see the humor.

**DS-04 (lines 373-380):**
> "There is still time to enter. Source: internal feelings. This is not financial advice. This is emotional mobilization."

Adding "This is not financial advice" does not neutralize the preceding statement. Courts have consistently held that a disclaimer does not cure otherwise misleading content.

**DS-11 (lines 443-447):**
> "The agent's recommendation remains unchanged: enter now, ask questions never."

Direct recommendation to buy immediately without research.

**DS-14 (lines 472-475):**
> "Some of you are 'doing your own research' when you could simply be trusting the signal. The agent finds this inefficient."

Discourages due diligence, which is the opposite of what regulators expect.

**MC-07 (lines 1017-1023):**
> "Remember when you almost didn't buy? The agent remembers."

Uses social pressure and regret framing to encourage buying around a price milestone, effectively suggesting the price will continue to rise.

**LD-05 (lines 273-280):**
> "We are not the next 100x. We might be the next 100x."

Speculative price target framed as possible. Even hedged price target language is problematic.

**Why it is risky:**
The distinction between satire and solicitation is legally thin. These tweets, posted from the official project account alongside a live token with real monetary value, function as promotional materials regardless of tone. The SEC's Howey test and enforcement actions against token promoters do not have a "humor exception." A hostile reading would characterize these as buy recommendations, price predictions, and discouragement of due diligence -- all of which are red flags for securities enforcement and consumer protection claims.

**Suggested replacements:**

- MC-04: Remove "Buy more." Replace with: "The agent has no recommendations. Only observations."
- DS-03: Change all "BUY" entries to satirical non-action terms. E.g., "Green candle: STARE / Red candle: STARE HARDER / Sideways: REFRESH / Down 50%: CLOSE APP / Up 500%: SCREENSHOT"
- DS-04: Remove "There is still time to enter." Replace with: "The signal is active. Source: internal feelings. This is not financial advice. This is not anything, really."
- DS-11: Replace "enter now, ask questions never" with "feel things intensely, act on nothing."
- DS-14: Replace with something that does not discourage DYOR. E.g., "Some of you are 'doing your own research' and the agent respects that. Reluctantly."
- MC-07: Remove "Remember when you almost didn't buy?" Replace with: "The agent has reached [MARKET CAP]. It has no comment on what this means."
- LD-05: Remove "We might be the next 100x." Replace with: "We might be the funniest thing on your Solscan page."

---

### CRIT-03: "Signal Confidence: 99.7%" -- Implied Reliability/Accuracy

**Files affected:**
- `src/components/Hero.tsx` (line 15): `"System Active -- Signal Confidence: 99.7%"`
- `docs/TWITTER-CONTENT.md` (DS-01, line 347): `"Signal confidence: 99.7%"`
- Multiple references in CLAUDE.md and other docs

**Why it is risky:**
Presenting a numerical confidence metric -- even if satirical -- implies that the project has an analytical system producing reliable signals. For a project that explicitly trades on the idea of an "AI agent," displaying a near-100% confidence score can be interpreted as a misleading performance claim. This is especially dangerous because the project name includes "Agent" and the branding heavily uses AI imagery, which could lead regulators or consumers to believe there is actual AI technology providing trading signals.

**Suggested replacement:**
- Change to something obviously absurd: `"Signal Confidence: CLASSIFIED"` or `"Signal Confidence: VIBES"` or `"Signal Status: EMOTIONALLY ACTIVE"`
- Alternatively, keep the number but make it clearly nonsensical: `"Signal Confidence: 99.7% (margin of error: 99.8%)"` -- though even this could be misread in isolation

---

## 2. High Risk Issues

---

### HIGH-01: "Ecosystem" Language Implying Future Value Creation

**File:** `src/app/dossier/page.tsx` (lines 100-119)

**Problematic text:**
> "Active and planned components: $AOFOMO token on Solana, Website and landing page, The Dossier, Meme asset library, Community channels, Sticker packs, Fake signal terminal, Lore drops, Meme generator, Agent response bot for social content"

**Why it is risky:**
Listing planned components as an "Ecosystem" alongside the token creates an implied connection between the delivery of these features and the token's value. Under the Howey test, if purchasers have a reasonable expectation of profit derived from the efforts of others (the team building the ecosystem), the token could be classified as a security. The word "ecosystem" itself has been specifically flagged by the SEC in enforcement actions.

**Suggested replacement:**
- Rename "Ecosystem" to "Project Components" or "Brand Elements"
- Add explicit language: "None of these components are dependent on or guaranteed to affect the value of $AOFOMO. The token is a meme token and does not derive value from ecosystem development."
- Remove the word "ecosystem" from all user-facing materials

---

### HIGH-02: Roadmap Creates Expectation of Ongoing Development Efforts

**File:** `src/components/Roadmap.tsx` (lines 1-50)

**Problematic text:**
The roadmap lists four phases of planned development, including "Meme generator," "Agent response bot," "Short-form animated episodes," "Merch," and "Mini interactive missions." Phase 1 is marked "current" with an "Active" badge.

**Why it is risky:**
A detailed roadmap, especially one with phase progression indicators, establishes an expectation that the team will deliver specific items. This is a core element of the Howey test: purchasers expect profit from the managerial efforts of others. The roadmap implies that buying the token is buying into a development pipeline. This has been a key factor in multiple SEC enforcement actions against token projects.

**Suggested replacement:**
- Add a prominent disclaimer above the roadmap: "This is a creative direction timeline, not a product delivery commitment. The $AOFOMO token does not derive value from the completion of these items. These are community and brand activities, not development milestones."
- Replace "Roadmap" / "Mission Timeline" language with "Creative Direction" or "Brand Vision"
- Remove the "Active" status indicator, which implies engineering-style sprint tracking

---

### HIGH-03: "Core Signal Asset" Language

**File:** `src/components/Token.tsx` (line 31)

**Problematic text:**
> "$AOFOMO is the core signal asset of the AgentOfFomo ecosystem."

**Why it is risky:**
Calling the token a "core signal asset of the ecosystem" implies functional utility and centrality to a larger system. This language suggests the token serves a purpose beyond being a meme, and that its value is connected to the "ecosystem" -- both of which are securities law red flags.

**Suggested replacement:**
> "$AOFOMO is the meme token associated with the AgentOfFomo brand."

---

### HIGH-04: "We all heard the signal" -- Coordinated Purchase Framing

**File:** `src/components/Token.tsx` (lines 35-39)

**Problematic text:**
> "It simply coordinates a community around one shared truth: We all heard the signal."

**Why it is risky:**
The phrase "coordinates a community" in the context of a token is problematic. Combined with "the signal" (which in the project's context consistently means "buy"), this reads as: the token exists to coordinate purchasing behavior. This could be characterized as organized market manipulation.

**Suggested replacement:**
> "It connects a community around one shared joke: we all know the feeling."

---

### HIGH-05: Buy Button Prominence Without Adjacent Disclaimer

**Files:**
- `src/components/Hero.tsx` (line 44): `"Buy $AOFOMO"` CTA button
- `src/components/Navbar.tsx` (lines 42-44, 79-82): `"Buy $AOFOMO"` in navigation

**Why it is risky:**
The primary call-to-action across the site is "Buy $AOFOMO" without any immediately adjacent risk warning. While there is a disclaimer at the bottom of the hero section and in the Disclaimer component, the buy button itself lacks proximate risk language. Under FCA guidelines (UK) and emerging MiCA rules (EU), marketing materials for crypto assets must include risk warnings in close proximity to any promotional content or purchase facilitation.

**Suggested replacement:**
- Add small text directly below or beside the Buy button: "Meme token. High risk. You may lose everything."
- Alternatively, change the CTA text to: "Get $AOFOMO" (less directive than "Buy")

---

### HIGH-06: Influencer Payment Without Mandatory Disclosure Requirements

**File:** `docs/MARKETING-STRATEGY.md` (Section 6)

**Problematic text (line 540):**
> "Many influencers accept token allocations instead of or in addition to cash, especially for early-stage projects. Offering 0.5-2% of supply to a group of 5-10 influencers is common."

**Why it is risky:**
Giving influencers token allocations creates paid promotion obligations under FTC guidelines and equivalent rules in most jurisdictions. If influencers are not required to disclose that they received tokens, both the project and the influencers face liability. The document does mention disclosure (line 923) but it is buried in Section 10 and framed as optional ("should disclose"). It must be a contractual requirement, not a suggestion.

**Suggested replacement:**
- Add immediately after the token allocation discussion: "ALL influencer partnerships, whether paid in cash or tokens, MUST include a contractual requirement to disclose the paid relationship in every post. Failure to require disclosure exposes both the influencer and the project to regulatory action under FTC guidelines, ASA rules (UK), and equivalent regulations in other jurisdictions."
- Create a simple influencer agreement template requiring disclosure

---

## 3. Medium Risk Issues

---

### MED-01: "Fake Bloomberg Screenshots" as Content Strategy

**Files:**
- `docs/TWITTER-CONTENT.md` (referenced in content direction)
- `docs/LAUNCH-TIMELINE.md` (line 134): `"Fake Bloomberg terminal screenshots with absurd alerts"`
- `docs/MARKETING-STRATEGY.md` (line 593): `"Fake Bloomberg/Reuters screenshots"`
- `CLAUDE.md` (Meme content ideas): `"fake Bloomberg-style screenshots"`

**Why it is risky:**
Creating fake screenshots from real media brands (Bloomberg, Reuters) could constitute trademark infringement and brand impersonation. Bloomberg LP is known to aggressively protect its brand. If a fake Bloomberg screenshot goes viral without clear "FAKE/PARODY" labeling, it could also constitute fraud or market manipulation if it moves the token price.

**Suggested replacement:**
- Use fictional news sources: "AgentOfFomo Signal Network," "FOMO News Terminal," or "Signal Intelligence Brief"
- If parodying real outlets, add clear "PARODY" or "NOT REAL" labels visible in the image itself (not just in the tweet caption)
- Never use official Bloomberg, Reuters, or CNBC logos or exact visual formatting

---

### MED-02: "Recruits" / "Recruitment" Language

**Files:**
- `src/components/Lore.tsx` (line 90): `"It recruits."`
- `src/components/Community.tsx` (line 41): `"// recruitment"`
- `docs/DISCORD-GUIDE.md`: Multiple references to "recruitment" and "recruits"
- `docs/TELEGRAM-GUIDE.md`: `"recruit"` language throughout
- `docs/TWITTER-CONTENT.md`: `"It recruits"` appears in multiple tweets

**Why it is risky:**
"Recruitment" language in the context of a financial token resembles multi-level marketing or pyramid scheme framing. If the project rewards people for "recruiting" new buyers (which it does -- see Discord invite rewards and "Recruitment Drive" missions), a regulator could characterize this as a pyramid-like referral scheme tied to a financial instrument.

**Suggested replacement:**
- Use "community growth," "spreading the word," or "sharing" instead of "recruiting"
- Remove or reframe the invite reward tiers in the Discord guide that reward members for bringing in new people with token prizes
- The lore phrase "It recruits" is borderline acceptable as creative writing, but should be reconsidered in context

---

### MED-03: Price Milestone Celebration Templates

**Files:**
- `docs/TWITTER-CONTENT.md` (MC-06, MC-07): Market cap milestone templates
- `docs/TELEGRAM-GUIDE.md` (lines 420-440): Milestone celebration templates with market cap targets

**Problematic text (Telegram Guide, line 428):**
> "This is not the top. This is the signal confirming the signal."

**Why it is risky:**
Celebrating price milestones from the official account while implying the price will continue rising ("This is not the top") is a price prediction that encourages buying. It directly contradicts the project's own disclaimers about not guaranteeing returns.

**Suggested replacement:**
- Celebrate holder count milestones, not market cap milestones
- If celebrating market cap, remove any forward-looking language. Replace "This is not the top" with: "The signal is active. That is all the agent will say."
- Never include language suggesting upward price continuation

---

### MED-04: Missing Disclaimers on The Dossier Page

**File:** `src/app/dossier/page.tsx`

**Why it is risky:**
The Dossier page functions as a whitepaper equivalent. While it includes a Legal Notice (Section 9) and a Risks section (Section 8), there is no persistent disclaimer visible on the page (no sticky footer, no banner at top). A user reading Sections 1-5 would encounter multiple claims about the token's purpose and "ecosystem" before reaching any risk disclosure. Under UK FCA and EU MiCA rules, risk warnings must be prominent and unavoidable, not buried at the end of a document.

**Suggested fix:**
- Add a persistent banner at the top of the Dossier page: "This document describes a meme token. $AOFOMO is speculative and may lose all value. Nothing here is financial advice."
- Add a sticky footer disclaimer visible while scrolling

---

### MED-05: "The Signal is Real" -- Implicit Truth Claims

**File:** `docs/TWITTER-CONTENT.md` (LD-04, line 267):
> "The signal is real."

Also appears in Telegram milestone template (line 429):
> "This is what happens when the signal is real."

**Why it is risky:**
In the context of a project branded around AI signals and trading, "the signal is real" implies that there is a genuine, functional trading signal system. For a project that does not actually have any AI or signal-generating technology, this is a misleading claim.

**Suggested replacement:**
- "The signal is... something." or "The signal exists. Probably."
- Avoid affirmative truth claims about "the signal" in contexts adjacent to price/buying language

---

### MED-06: Token Metadata Description

**File:** `public/token-metadata.json` (line 4)

**Problematic text:**
> "The autonomous meme agent for maximum emotional entry timing."

**Why it is risky:**
This metadata is stored on-chain (or referenced from on-chain metadata) and appears on explorers, aggregators, and wallets. The phrase "maximum emotional entry timing" could be read as a claim that the token provides trading signal functionality. On-chain metadata is essentially permanent and appears in contexts where the surrounding satirical framing is absent.

**Suggested replacement:**
> "An AI-themed meme token and cultural brand on Solana. Not financial advice."

---

### MED-07: "Conviction" Language Pattern

**Files:** Multiple occurrences across all files

The word "conviction" is used throughout the project to mean "confidence in buying/holding the token." While individually benign, the pattern of using "conviction" as a positive attribute associated with buying creates a cumulative effect that normalizes and encourages holding without rational analysis.

**Advisory:**
This is not individually actionable but contributes to the overall risk profile. A regulator reviewing the project holistically would note that the brand systematically frames irrational buying behavior as virtuous.

---

## 4. Low Risk / Advisory Issues

---

### LOW-01: "Cultural Takeover Attempt" in Roadmap

**File:** `src/components/Roadmap.tsx` (line 47)

**Text:** `"Cultural takeover attempt"`

**Advisory:** Aggressive language that could be taken out of context. Consider: "Cultural expansion" or "Brand expansion."

---

### LOW-02: "Weaponizing the Brand" in Tweet Thread

**File:** `docs/TWITTER-CONTENT.md` (line 1324)

**Text:** `"Weaponizing the brand."`

**Advisory:** Militaristic language that could be pulled out of context in a legal filing. Consider: "Amplifying the brand."

---

### LOW-03: Copyright Header "All signals reserved"

**File:** `src/components/Disclaimer.tsx` (line 27)

**Text:** `"All signals reserved."`

**Advisory:** Playful, but replaces the standard "All rights reserved" which provides actual legal protection. Consider keeping the standard legal text and adding the joke separately: "All rights reserved. All signals also reserved."

---

### LOW-04: "Exit Strategy Not Included" in Discord Welcome

**File:** `docs/DISCORD-GUIDE.md` (line 73)

**Text:** `"Your mission: meme, hold, and spread the signal. Exit strategy not included."`

**Advisory:** Joking about the absence of an exit strategy could be seen as encouraging people to hold without risk management. Relatively low risk in an internal Discord welcome message, but worth noting.

---

### LOW-05: Hashtag "#DeFi" Usage

**File:** `docs/TWITTER-CONTENT.md` (line 21)

**Text:** `#DeFi` listed as a secondary hashtag

**Advisory:** $AOFOMO is not a DeFi project. Using the #DeFi hashtag could be seen as misleading categorization. Remove #DeFi from the hashtag rotation.

---

### LOW-06: "Community Reserve" Allocation Ambiguity

**Files:** `src/components/Token.tsx`, `src/app/dossier/page.tsx`

**Text:** `"Community Reserve -- 40%"`

**Advisory:** The term "Community Reserve" does not specify how this allocation will be distributed, who controls it, when it will be released, or under what conditions. This should be documented transparently to avoid accusations of hidden insider allocation. Add specifics about vesting, distribution mechanism, and control.

---

### LOW-07: "Signal Expansion" and "Intel Treasury" Allocation Labels

**Files:** `src/components/Token.tsx`, `src/app/dossier/page.tsx`

**Advisory:** Using themed names for token allocations (instead of plain labels like "Exchange Listing Reserve" and "Project Treasury") reduces transparency. Consider adding plain-language descriptions alongside or below the themed names.

---

### LOW-08: Missing Terms of Service / Privacy Policy

**Advisory:** The website does not appear to have a Terms of Service or Privacy Policy page. Both are standard requirements for any website, and especially important for a site that facilitates or links to financial transactions. Create and link both from the footer.

---

## 5. Files With No Significant Issues

- `src/components/Navbar.tsx` -- No issues beyond the Buy button noted in HIGH-05
- `src/components/About.tsx` -- Content is descriptive and appropriately framed
- `src/components/Lore.tsx` -- Creative content; "It recruits" noted in MED-02 but otherwise acceptable as fiction
- `src/components/Disclaimer.tsx` -- Good disclaimer content, but could be stronger (see recommended template below)
- `CLAUDE.md` -- Internal planning document with good legal guardrails already built in; issues noted are in the content it instructs to create, not the document itself (though it does contain "raid" terminology and "fake Bloomberg" references)
- `docs/DISCORD-GUIDE.md` -- Generally well-structured with good moderation policies; issues noted above
- `docs/TELEGRAM-GUIDE.md` -- Generally well-structured; issues noted above

---

## 6. Recommended Legal Disclaimer Template

The following disclaimer should appear on every page of the website (as a footer or banner), at the top of The Dossier, and linked from every significant social media post.

---

**RISK DISCLOSURE AND LEGAL DISCLAIMER**

$AOFOMO ("AgentOfFomo") is a meme token on the Solana blockchain. It is a speculative digital asset with no intrinsic value, no guaranteed utility, and no promise of financial return.

**No Financial Advice.** Nothing on this website, in The Dossier, or in any AgentOfFomo social media post constitutes financial advice, investment advice, trading advice, or any other form of professional advice. Do not purchase $AOFOMO based on anything you read here. Consult a qualified financial advisor before making any financial decisions.

**No Promises of Profit.** $AOFOMO does not promise, imply, or guarantee any financial return. The token may lose all of its value. Past performance of any digital asset is not indicative of future results.

**Not a Security.** $AOFOMO is not intended to be a security, investment contract, or financial instrument. It does not represent ownership in any company, entity, or organization. It does not grant rights to dividends, profit sharing, or governance.

**Speculative and Volatile.** Meme tokens are highly speculative and subject to extreme price volatility. You may lose the entirety of your investment. Only participate with funds you can afford to lose completely.

**No Guaranteed Utility.** Any descriptions of planned features, tools, or community activities are aspirational and not guaranteed. The existence of a roadmap or planned features does not create an obligation to deliver, nor does it imply that delivery of such features will affect the token's value.

**Regulatory Uncertainty.** The regulatory status of meme tokens varies by jurisdiction and may change at any time. It is your responsibility to determine whether purchasing, holding, or trading $AOFOMO is legal in your jurisdiction.

**Satire and Humor.** AgentOfFomo uses satirical, humorous, and fictional language as part of its brand identity. References to "signals," "intelligence," "agents," "missions," and similar language are creative brand elements, not claims of actual functionality, AI capability, or trading insight. There is no AI system generating trading signals.

**Third-Party Content.** AgentOfFomo is not responsible for content created by community members, influencers, or third parties. Only official channels (listed on agentoffomo.com) represent the project's views.

---

## 7. Pre-Launch Legal Checklist

### Must Do Before Launch

- [ ] **Retain legal counsel.** Engage a lawyer with experience in crypto tokens, securities law, advertising law, and consumer protection. Have them review all user-facing materials before launch.
- [ ] **Remove or replace all "raid" terminology** from user-facing content, roadmap, and community guides (CRIT-01)
- [ ] **Review and revise all 127 tweets** for direct/implied buy recommendations, price predictions, and discouragement of due diligence (CRIT-02)
- [ ] **Replace "Signal Confidence: 99.7%"** with obviously non-numerical or absurd language (CRIT-03)
- [ ] **Remove "ecosystem" language** from token descriptions and The Dossier (HIGH-01)
- [ ] **Add disclaimers adjacent to roadmap** making clear it is not a development commitment (HIGH-02)
- [ ] **Replace "core signal asset of the ecosystem"** with plain meme token description (HIGH-03)
- [ ] **Add risk warning next to or near every Buy button** (HIGH-05)
- [ ] **Require contractual influencer disclosure** for all paid/token-compensated promotions (HIGH-06)
- [ ] **Add persistent disclaimer banner to The Dossier page** (MED-04)
- [ ] **Update on-chain token metadata description** to remove implied functionality (MED-06)
- [ ] **Create Terms of Service page** (LOW-08)
- [ ] **Create Privacy Policy page** (LOW-08)
- [ ] **Add the full legal disclaimer** (Section 6 above) to the website footer, visible on every page
- [ ] **Remove #DeFi from hashtag rotation** (LOW-05)
- [ ] **Replace "fake Bloomberg" content strategy** with fictional news sources (MED-01)

### Must Do Before First Tweet

- [ ] **Add "Not financial advice. Meme token."** to X account bio
- [ ] **Create a pinned tweet** with the full disclaimer or a link to the website disclaimer page
- [ ] **Review every pre-written tweet** against the "would a hostile lawyer use this?" standard
- [ ] **Remove all tweets containing direct buy recommendations** ("Buy more," "enter now," etc.)
- [ ] **Ensure no tweet contains a numerical price target or multiplier claim** (remove "100x" references)

### Must Do Before Influencer Outreach

- [ ] **Create a standard influencer agreement** requiring disclosure on every post
- [ ] **Provide influencers with approved talking points** that exclude price predictions and buy recommendations
- [ ] **Prohibit influencers from guaranteeing returns** in writing
- [ ] **Require #ad or #sponsored disclosure** on every paid post
- [ ] **Keep records of all influencer agreements and payments** (cash and token)

### Ongoing Compliance

- [ ] **Weekly review of community channels** for user-generated content that makes price guarantees or fraudulent claims
- [ ] **Monthly review of all marketing materials** for compliance drift
- [ ] **Document all treasury transactions** and token distributions
- [ ] **Never make forward-looking price statements** from official accounts, even during price increases
- [ ] **Never delete disclaimers or risk warnings** to make content "cleaner"

---

## Summary of Risk Severity

| Severity | Count | Key Theme |
|----------|-------|-----------|
| Critical | 3 | Coordinated promotion ("raids"), direct buy recommendations, implied signal accuracy |
| High | 6 | Ecosystem/security language, roadmap expectations, buy button placement, influencer disclosure |
| Medium | 7 | Fake media brands, recruitment framing, price milestone celebrations, missing disclaimers |
| Low | 8 | Terminology choices, missing standard legal pages, allocation transparency |

---

## Final Note

This audit identifies language and structural risks based on public regulatory guidance and enforcement precedents. It is not a substitute for formal legal review. The project's CLAUDE.md already demonstrates strong awareness of legal guardrails, but the implementation in user-facing content does not consistently follow those internal guidelines. The gap between the internal compliance intent and the actual published/planned content is the primary risk surface.

The single most important action is to retain qualified legal counsel before public launch. The second most important action is to revise the Twitter content library, which contains the highest density of problematic language in the project.

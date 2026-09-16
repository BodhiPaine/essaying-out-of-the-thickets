Based on a full walk of the live site on 7 September 2026: home, About, chapters 00–08,
Driftwood (31 notes), Appendices, Scrapbook, and sampled notes.

Ordered so that cheap, site-wide fixes come before per-chapter writing work.
# 0. Decide first (five minutes, changes everything downstream)
- [x] **Journals.** `scrapbook/journals/` is publicly published. Confirm this is deliberate.
- [ ] **Garden or book?** 06 and 07 are reference architecture (nested headings, sutta indices); 00 and 01 are essays. Decide whether the site declares itself a garden (stubs are fine, statuses everywhere, no apology) or separates finished essay from working notes. You already have Driftwood as the bones of the second option.
- [ ] **Status vocabulary.** Fix on 3–4 growth terms and 3–4 epistemic terms. Currently in  use: `seed`, `seedling`, `🌱 seedling`, `🫘 seed`, `first draft` / `exploratory`,
      `confident`, `✅ confident`, `🟠 inconsequential`, plus full paragraphs in the status field.
- [ ] Write a short **legend page** defining those terms, and link every status to it.
# 1. Site-wide mechanics
### Broken links

- [ ] **Fix inline-hashtag URLs.** `#faith` in body text renders as
      `bodhipaine.github.io/tags/faith` — missing the `/essaying-out-of-the-thickets/`
      base path. Confirmed 404. Affects hundreds of links across 00, 01, 04, 05, 06, 07.
      Look at `baseUrl` in `quartz.config.ts` and the tag-rendering path.
      (Tags written as wikilinks, e.g. on About, resolve correctly.)
- [ ] **Run a link checker** over the built site and work the report. Every item below is
      one I happened to catch by hand; a checker will find the rest.
- [ ] **Phantom root-level pages.** Confirmed 404 on `metaphysical-materialism`.
      Others seen in the wild — triage each as *write the note* or *repoint the link*:
      `the-five-hindrances`, `the-defilements`, `fear-of-credulity`, `kalama-sutta`,
      `waking-up,-harris`, `panoramic-perspective`, `the-unbearable-lightness`,
      `late-stage-industrial-capitalism`, `etymology-of-'human'`, `dogmatism`,
      `waxing-syllables`, `sense-faculty`, `worldview`, `realism`, `morality`,
      `ignorance`, `transpersonal-psychology`, `the-hard-problem-of-consciousness`,
      `way-i-stuttered-and-puttered-about`, `six-senses`, `sutta`, `clinging`,
      `dispensation`, `social-justice`, `healthy-sense-of-self`, `wholesome-conduct`,
      `certain-wholesome-pleasures`, `including-awakening`, `saddhamma,-true-dhamma`,
      `the-buddha's-five-duties`, `understand-the-true-nature-of-reality`,
      `suffering-and-the-end-of-suffering`, `teachings-about-the-potential-for-awakening`,
      `which-modalities-do-i-need-to-complement-the-practice`,
      `what-the-buddha-actually-taught,-and-did-not-teach`
- [ ] **Heading-links written as page-links.** Many of the above are cases of
      `[[The Defilements]]` where you meant
      `[[07. What the Buddha Taught, and Didn't Teach#The Defilements]]`.
      These fail silently — Obsidian shows them as valid.
- [ ] `human conditon` (07) — typo inside a wikilink, so it breaks the link too.
- [ ] External link `suttacentral.now/an5.131/en/sujato` (06) → should be `.net`.
- [ ] Home page links to `about#about-digital-gardening` and
      `about#about-dont-believe-what-i-think` — neither heading exists on About.
- [ ] About links to `don't-believe-what-i-think/an-avuncular-reading-list`; the page
      actually lives under `appendices/`.

### Build and config
- [ ] **Stale About page.** Header shows "Quartz 5" not the site title; page reports
      "0 items under this folder" while `about/an-exercise-in-saddhā` exists.
      Looks like a leftover artifact in the published branch — try a clean rebuild
      and a fresh deploy.
- [ ] **Filename fragility.** Apostrophes, commas and emoji in paths
      (`don't-believe-what-i-think`, `pascal's-wager`, `🎯-origin-of-experience`,
      `'a-safe-bet'`, `07. …,-and-didn't-teach`) encode inconsistently.
      Add a `slug:` frontmatter field to keep pretty titles on ASCII paths.
- [ ] **Folder pages have no descriptions.** Driftwood, Appendices and Scrapbook show
      "No description provided"; Essaying and Don't Believe What I Think show nothing.
      An `index.md` in each folder with a paragraph of orientation would do it.
- [ ] **No landing page for the essay.** The Content Tree only exists at the foot of 00.
      A reader arriving on chapter 05 has breadcrumbs and nothing else.

### Status tables
- [ ] **Stop using markdown tables for statuses.** A `|` inside a wikilink alias is read as
      a cell boundary. Confirmed broken renders:
      `[[07…#Skilful View | skilful view]]` in 05 *Rebirth*, and
      `[[MN 60 Apaṇṇaka Sutta, 'A Safe Bet' | MN 60]]` in 07 *Rebirth*.
- [ ] Same cause: commentary paragraphs written under a two-column header get absorbed as
      a third table row and render inside a cell — see 01 *One-Method Approaches*,
      01 *Self-awakening is Selfish*, 06 *Many Methods*, 06 *Developing the Mind*.
- [ ] Replace with a callout (`> [!note] 🌱 seedling · exploratory`) or with frontmatter
      fields. Either survives pipes; the callout needs no code.
- [ ] Move the reasoning out of the status cell and into the body beneath it.
# 2. Status coverage
Present: page-level on **01** and **07**; section-level at 01 *One-Method Approaches*,
01 *Self-awakening is Selfish*, 05 *Rebirth*, 06 *Many Methods*, 06 *Developing the Mind*,
07 *Wise Attention*, 07 *Rebirth*.

- [ ] Add page-level status to **00, 02, 03, 04, 08**
- [ ] Add to **About** and the **home page**
- [ ] Add to all **31 Driftwood notes** (these are the ones most likely to be read cold)
- [ ] Add to **Appendices** and **References** pages
- [ ] Decide whether section-level statuses are the exception (flagging genuine uncertainty)
      or the rule (every H2). Right now it reads as ad hoc.

---

# 3. Per chapter
# 00. Introduction — 12 min, drafted
- [ ] Add status
- [ ] "popularised by ." — sentence stops mid-clause (home page has the same gap)
- [ ] "part of a trilogy by " — missing author
- [ ] Orphaned fragment beginning "[…] than continuing to unconsciously, flailingly" — an
      alternate draft of the sentence above it; cut one
- [ ] Typos: *prosecuters*, *gaul* (gall), *a fishing being ashamed* (fish)
- [ ] Decide whether "a space that is currently private, but which is intended to eventually
      go public" still holds — it's public now, and the line reads oddly

### 01. The Nature of Doubt — 20 min, substantial
- [ ] `%%and%%` — Obsidian comment leaking into rendered output
- [ ] *Doubt About Rebirth* is `[text]` only
- [ ] *The Bodhisattva Ideal*, *Is Awakening Possible?*, *Limitations of the Dhamma* — thin
- [ ] "Soma makes the consoling observation…" — cited by surname only, no reference
- [ ] Patrick Harpur introduced with 🎯 and no source
- [ ] *Fear of Credulity* section ends mid-sentence on a comma
- [ ] "swim in the Earth" appears twice, once incomplete
- [ ] *The Ripple Effect* duplicates 06 *The Ripple Effect*
- [ ] Secular-Buddhism / *Buddhism Doesn't Require Beliefs* passage duplicates 07 *Skilful View*
- [ ] Note-to-self "stay with it, Bodhi" — keep or cut, deliberately

### 02. A Brief History of Faith — EMPTY
- [ ] Write it, or fold it into 03, or cut the number. An empty numbered chapter mid-sequence
      reads as a broken promise rather than a seedling.

### 03. Saddhā — EMPTY
- [ ] **Highest priority.** The title chapter of an essay about *saddhā*. Much of the raw
      material already exists scattered through 00, 04 and 06 — this may be more a job of
      gathering than of writing.

### 04. The Five Faculties — 5 min prose, then scaffolding
- [ ] Add status
- [ ] *Faith*, *Persistence*, *Mindfulness*, *Concentration*, *Wisdom* are empty headings
- [ ] Raw notes dump after *Wisdom* — includes a stray ``` code fence rendering as a code block
- [ ] `#sdfootnote1sym` / `#sdfootnote1anc` anchors — leftovers from a word-processor paste;
      footnotes 1 and 2 have no visible text
- [ ] "as Soma Thera says , 'faith in the fruit of action'" — dangling comma, missing citation
- [ ] Link to `confident-the-buddha's-directions-are-reliable` is a phantom page

### 05. Tripping Over Worldviews — 10 min, substantial
- [ ] Add page-level status
- [ ] `[LM]` placeholder — "the moral argument … called [LM]"
- [ ] `\[citation]` placeholder under *Psychological and Literal Interpretations*
- [ ] "debated by Bhikkhu Bodhi and" — trails off
- [ ] Unticked task box leaking: `- [ ] what are the other forms of right view?`
- [ ] *Is Awakening Possible?* appears twice, verbatim — once in the opening, once as a section
- [ ] *The Literal Interpretation* — subtitle only
- [ ] Broken wikilink in the *Rebirth* status table (see §1)
- [ ] *Rebirth* and *panoramic perspective* passages duplicate 07

### 06. Cultivating Saddhā — 28 min, largest by scaffolding
- [ ] Add page-level status
- [ ] Unticked task boxes visible to readers: `needs more introduction`,
      `find something more inspiring about Vijjā-caraṇa-sampanno`, `👆🏼find sutta` (×2),
      `read more about each of these people, as well as Rumi`, and one under *Sanghānusati*
- [ ] Empty headings: *Buddho*, *Bhagavā*, *Dhammānusati* subsections,
      *Individually Discerned by the Wise*, *directly visible*, *misc*,
      *The Buddha's five duties*, *recollection of past lives*,
      *the passing away and rebirth of beings*, *nibbana*
- [ ] "The nQualities of the Dhamma" — placeholder heading text
- [ ] Note-to-self in the body: "I am putting these headings here mostly so I have a quick
      reference in the content tree"
- [ ] The callout beginning "This / After doing lots of research…" is a note to self in a
      reader-facing callout; decide
- [ ] Same passage appears twice: "it may be that I'll need to drag information over here…"
- [ ] *Transcendent Happiness* duplicates the closing paragraph of *Developing the Mind*
- [ ] *The Ripple Effect* duplicates 01
- [ ] Typo: "he simile of the cook" (missing T)
- [ ] "[or the other way round?]" — editorial aside in the body
- [ ] Broken external link `suttacentral.now` (see §1)
- [ ] "Anīgha", "Thero", "Khantipālo", "Bodhi, p. 16", "Punnadhammo" — surnames without
      full references

### 07. What the Buddha Taught, and Didn't Teach — 36 min, the spine
- [ ] Empty headings: *Anicca*, *Dukkha*, and *Kamma* (which ends "Also in MN 60, .")
- [ ] `[citations]`, `[Pali]`, `[separation from loved ones, etc.]` placeholders
- [ ] Unticked task boxes: `find where it says in the suttas…`,
      `What are the truths of Buddhism…`
- [ ] Broken wikilink in the *Rebirth* status table (see §1)
- [ ] Unclosed `*` before "becoming an arahant doesn't operate on the level of the personality"
      — italics run on
- [ ] Heading "MN 19 # Dvedhāvitakka Sutta" — stray hash inside the heading text
- [ ] Typos: *human conditon* (breaks a link), *Big Ban*, *infinite changes* (chances),
      *nontheless*, *once-size-fits-all*
- [ ] "Skillful Consumerism" as item 9 in a list introduced as eight factors — the joke lands
      later, but a reader hits the error first; consider signposting sooner
- [ ] *Psychotherapy* section duplicates the *Sanghānusati* passage in 06 almost word for word
- [ ] *Anattā* section contains a hand-written note the text itself flags as misplaced
      ("I'm not entirely clear on how this hand-written note about holism gets into anatta")

### 08. The Path, Enabled — EMPTY
- [ ] The essay currently has no conclusion. Even a paragraph stating where the argument
      landed would close the loop 00 opens.

---

## 4. Cross-cutting writing work

- [ ] **De-duplicate.** At least six passages appear in two or three chapters. Pick the
      canonical home for each, then use a block embed (`![[note#heading]]`) so there's one
      source of truth rather than three drifting copies.
- [ ] **Resolve the 01 / 05 / 07 overlap.** All three carry the rebirth-and-Pascal's-Wager
      argument, the inherited-materialism argument, and the secular-Buddhism argument.
      Decide which chapter owns each, and let the others link.
- [ ] **Settle citation practice.** Currently a mix: full SEP citation with URL (Roush, 01),
      surname-plus-page (Rahula (8), Gethin (115), Harris (20), Khantipālo (72)), bare
      surname (Soma, Thero, Anīgha, Punnadhammo), and `[citations]`. Given the Pandoc/APA
      plan, a single bibliography note plus consistent author-date would carry it.
- [ ] **Decide about 🎯 and 🏹.** They clearly mean something to you; nothing on the site
      tells a reader what. Either gloss them on the legend page or drop them.
- [ ] **Driftwood titles.** Several read as sentence fragments captured mid-thought —
      "our practice and in our lives", "how does Buddhism transform our thinking",
      "where in history the West started to go so horridly astray". Rename or absorb.
- [ ] **Near-duplicate notes:** `psychological technical` vs `psychological technology`;
      `ripple effect` (Driftwood) vs the two in-chapter *Ripple Effect* sections.
- [ ] **A stray tag literally named `tag`** on the "where in history…" note.
- [ ] **Two placeholder essay folders:** `A Map is Made for Walking` (empty) and
      `Out of the Mainstream` (one note, "Finally!?"). Give them a status or hide them.
- [ ] **Overlapping appendix folders:** *Readings*, *Sutta Readings* and *Suttas* — the
      distinction isn't visible from outside.

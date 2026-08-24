*original produced by Claude Code*
# The core problem
A link makes a promise to the reader at the moment you write it. If the target note changes shape later, that promise can silently break — the reader (including future-you) follows a link expecting one thing and finds another, with no record that anything shifted.

Treat every link as making one of two contracts. Decide which one you're making *before* you write it.
# Contract A — Anchor link
What it says to the reader: "The point stands on its own. Click if you want the receipts, not required."

- The linking sentence must carry the full meaning itself.

- The target note is evidence/elaboration, not the argument.

- Because the meaning lives in *your* prose, this survives the target

note being rewritten, restructured, or deleted.

  

Example: *"...which echoes the idea that renunciation is itself a form

of grasping ([[note]])."* — the sentence works even with the link

removed.
# Contract B — Aside link (the footnote move)
**What it says to the reader:** "This is a deliberate digression. I'm

keeping it out of the main current on purpose — skip it or enjoy it."

  

- Unlike Contract A, the meaning is *not* self-contained — you're

intentionally offloading it, the way a maximalist footnote holds

material that would bog down the paragraph if left inline.

- This is a legitimate, even essential, move — it lets a piece stay

lean while still keeping the digressive richness available.

- Risk: if it looks like Contract A (a plain inline link with no

signal), the reader can't tell "optional tangent" from "cited

support," and you can't tell later either.

  

**Convention: signal which contract you're making.** Options:

- Verb choice — "see [[note]]" / "cf. [[note]]" reads as Contract A;

"as an aside, [[note]]" or "→ *[[note]]*" reads as Contract B.

- Italicize or bracket aside-links so they're visually distinct at a

glance, the way footnote markers are visually distinct from body text.

- Pick one convention and hold it across the whole garden — consistency

is what makes the signal legible.
# Practices that protect both kinds of link
1. **Anchor to the block, not the whole note**, when precision matters

(see the companion doc on text-fragment URLs for going finer than

Obsidian's block references). A link to an entire note gives every

future edit anywhere in it "permission" to invalidate your link

without you noticing. A link to one block makes an edit to *that*

block much more visible when you're working nearby.

2. **Before a substantial edit to a note, check its backlinks pane.**

This is the practical, low-tech version of "does this note owe

anyone else meaning right now?" It won't tell you *what* meaning was

implied, but it tells you *where* to go re-read the linking sentence

before you commit the edit.

3. **Keep the meaning-bearing sentence in the source note whenever

possible** (Contract A default). Reserve Contract B for material you

are genuinely happy to see decoupled from the main argument.

4. **Don't try to build tooling for this.** Ted Nelson's Xanadu tried to

solve "links that remember what they meant" with transclusion and

versioning at the infrastructure level — it's a genuinely hard

problem. For a personal digital garden, two habits (write

self-contained sentences, check backlinks before editing) get you

90% of the value for near-zero complexity. Occam's razor wins here.
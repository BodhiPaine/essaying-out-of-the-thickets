# Centring Text in Obsidian, via a CSS Snippet

This is the "native" method discussed earlier: rather than dropping raw
HTML into your notes, you teach Obsidian's own callout syntax a new
trick. The result is a `> [!center]` block that centres anything
inside it — text, images, headings — while what you type stays plain,
portable Markdown.

No plugin is required. CSS snippets are a built-in Obsidian feature.

## Prerequisites

- Obsidian desktop (CSS snippets can also be *used* on mobile once
  created, but they're easiest to create on desktop, where the
  snippets folder is simple to reach).
- Five minutes.

## Step 1 — Open the CSS snippets folder

1. Open **Settings** (the gear icon, bottom-left).
2. Go to **Appearance**, in the left-hand list.
3. Scroll down to the **CSS snippets** section.
4. Click the little folder icon next to it. This opens your vault's
   `.obsidian/snippets` folder in your system file browser. If the
   folder doesn't exist yet, Obsidian creates it for you at this
   point.

## Step 2 — Create the snippet file

1. Inside that `snippets` folder, create a new plain-text file named
   `centring.css` (the name doesn't matter to Obsidian, but it must
   end in `.css`).
2. Paste in the following:

```css
/* Centring: use > [!center] ... in any note */
.callout[data-callout="center"] {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
}
.callout[data-callout="center"] > .callout-title {
  display: none;
}
.callout[data-callout="center"] > .callout-content {
  text-align: center;
  padding: 0;
  margin: 0;
}
```

3. Save the file.

## Step 3 — Enable the snippet in Obsidian

1. Back in **Settings → Appearance → CSS snippets**, click the
   refresh icon (circular arrow) if `centring` doesn't already appear
   in the list — Obsidian only scans the folder when asked to.
2. You'll see `centring` listed with a toggle next to it. Switch it
   on.

That's it — no restart needed. Obsidian applies CSS snippets live.

## Step 4 — Use it in a note

In any note, write:

```markdown
> [!center]
> This text will be centred.
```

Switch to Reading view (or just look at Live Preview) to see it take
effect. It works on more than one line, headings, and images too:

```markdown
> [!center]
> ## A Centred Heading
> ![[some-image.png]]
> And some centred text underneath.
```

## Verification

- With the snippet toggled **on**, the `> [!center]` block above
  should render as plain centred text or image, with no visible
  callout box, border, or title around it.
- Toggle the snippet **off** in Settings and reload the note (or
  switch views) — the same block should now render as an ordinary
  Obsidian callout, with a border and a "Center" title, confirming the
  snippet (and not something else) is what was doing the work.
- Toggle it back **on** when you're done checking.

## Optional: add right-alignment too

If you'd like a matching `> [!right]` block, append this to the same
`centring.css` file (no separate snippet needed):

```css
.callout[data-callout="right"] {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
}
.callout[data-callout="right"] > .callout-title {
  display: none;
}
.callout[data-callout="right"] > .callout-content {
  text-align: right;
  padding: 0;
  margin: 0;
}
```

Used the same way: `> [!right]` followed by your right-aligned content
on the following lines, each prefixed with `>`.

## Troubleshooting

- **Nothing changes**: confirm the toggle in Settings → Appearance →
  CSS snippets is actually on (blue/enabled), and that the callout
  type in your note is spelled exactly `center` (case-sensitive,
  lower-case) to match `data-callout="center"` in the CSS.
- **Snippet doesn't appear in the list at all**: you likely saved the
  file somewhere other than the `snippets` folder Obsidian opened in
  Step 1, or the file extension isn't `.css`. Click the refresh icon
  again after fixing the location.
- **You still see a bordered callout box**: double check you copied
  all three rules (the outer `.callout[...]`, the `.callout-title`,
  and the `.callout-content` selectors) — each one strips away a
  different piece of the default callout styling.

## To remove it later

Go to Settings → Appearance → CSS snippets, toggle `centring` off (or
delete `centring.css` from the snippets folder entirely). Any
`> [!center]` blocks already in your notes will simply fall back to
rendering as normal callouts — nothing is lost, since the Markdown
itself never changed.

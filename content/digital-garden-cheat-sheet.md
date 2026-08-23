# Digital Garden — Personal Cheat Sheet

## The simple workflow (works on ANY machine — Mac or Windows)

You do **not** need Node, npm, Quartz, or Terminal for this. GitHub Actions
builds and publishes the site automatically every time you push. This path
only needs two apps: **Obsidian** and **GitHub Desktop**.

**First time on a new machine:**
1. Install Obsidian (obsidian.md) and GitHub Desktop (desktop.github.com)
2. In GitHub Desktop: File → Clone Repository → choose `arms-raised`
   (or your real project's repo name) → pick a local folder
3. In Obsidian: File → Open Vault → Open folder as vault → select the
   `content` subfolder *inside* the cloned repo (not the whole repo)

**Every writing session after that:**
1. Open Obsidian, write/edit notes as normal
2. Open GitHub Desktop → you'll see your changes listed
3. Type a short commit message → click "Commit to v5"
4. Click "Push origin"
5. Done — GitHub automatically rebuilds and republishes the live site
   within a minute or two. No need to check unless something looks wrong.

## Checking the live site
Your site: `https://bodhipaine.github.io/arms-raised/`
(update the repo name here once you move to the real project)

If a page 404s after pushing, wait a minute for GitHub Actions to finish,
then try again in a private/incognito browser window (rules out caching).

## The fuller workflow (optional — only on the main Mac with everything installed)
Only needed if you want to preview changes *before* pushing them live.

- `cd ~/Documents/quartz` — go to the project folder
- `npx quartz build --serve` — preview locally at `http://localhost:8080`
  (leave this running in its own Terminal tab/window while you preview)
- `git status` — see what's changed, with no risk of altering anything
- Push via GitHub Desktop as usual when ready

## If something looks broken and you can't ask for help
- Check the **Actions** tab on your repo (github.com/BodhiPaine/[repo]/actions)
  — a green tick means the last push built and published fine
  — a red X means something broke; click in to read the error step
  — most errors so far have been fixable by re-reading the error message
    carefully rather than guessing
- Nothing you do in Obsidian or GitHub Desktop can permanently break the
  live site — worst case, you push a fix later and it rebuilds again
- The site's actual working state is always whatever was last successfully
  pushed — a broken edit sitting unsaved on your machine can't hurt anything
  until you push it

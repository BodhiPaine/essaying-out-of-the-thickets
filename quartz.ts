import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1
    return a.slugSegment.localeCompare(b.slugSegment, undefined, { numeric: true })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

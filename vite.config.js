import Unocss from 'unocss/vite'
import markdownIt from 'markdown-it'
import markdownItPrism from 'markdown-it-prism'
import { plugin as vitePluginMarkdown, Mode } from 'vite-plugin-markdown'

export default {
  plugins: [
    vitePluginMarkdown({
      mode: Mode.HTML,
      markdownIt: markdownIt({ html: true }).use(markdownItPrism)
    }),
    Unocss(),
  ],
}
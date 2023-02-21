// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import SveltePreprocess from 'svelte-preprocess'

const config = {
  preprocess: SveltePreprocess({
    scss:{
      prependData: '@use "src/styles/variables.scss";'
    }
  })
}
export default config
// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// }

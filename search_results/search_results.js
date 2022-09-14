
import SearchResults from '../src/lib/SearchResults.svelte'
import '../src/app.css'
const app = new SearchResults({
  target: document.getElementById('app')
})

export default app
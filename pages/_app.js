import App from 'next/app'

import { setup } from 'twind'
import twindConfig from '../twind.config'
/* import '../css/index.css' */

// If this run on the server _document.js has already done the setup
if (typeof window !== 'undefined') {
  setup(twindConfig)
}

export default App

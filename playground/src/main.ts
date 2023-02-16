// To test publish package
//import { BrowserBarcodeScanner } from 'browser-barcodescanner'

///* To test modified package,
import { BrowserBarcodeScanner } from '../../src/index.ts'
//*/

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/" target="_blank">
      <img src="/logo.png" class="logo" alt="Vite logo" />
    </a>
    <h1>browser-BarcodeScanner</h1>
    <div class="card">
      <button id="scan" type="button">Scan</button>
      <input type="file" id="file" accept="image/*" />
    </div>
  </div>
`

const scanButton = document.querySelector<HTMLButtonElement>('#scan')!
const fileInput = document.querySelector<HTMLInputElement>('#file')!

scanButton.addEventListener('click', () => {
  const file = fileInput.files?.[0]
  if (!file) return

  BrowserBarcodeScanner(['ean_13'], file, result => {
    // Only mobiles support BarcodeDetector API, so to visualize the result, we have to use alert()
    alert(result.res)
  })
})

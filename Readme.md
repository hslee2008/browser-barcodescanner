<div align="center">
  <h1>browser-BarcodeScanner</h1>
</div>

<div align="center">
<img alt="logo" src="https://raw.githubusercontent.com/HyunseungLee-Travis/browser-barcodescanner/main/logo.png" width="200px" />
</div>

<div align="center">
  <strong>Barcode Scanner for the Browser</strong>
</div>

<br />
<br />

# Installation

```bash
npm install browser-barcodescanner
yarn add browser-barcodescanner
```

# Usage

```js
import { BrowserBarcodeScanner } from 'browser-barcodescanner'

const scanButton = document.querySelector('#scan')
const fileInput = document.querySelector('#file')

scanButton.addEventListener('click', () => {
  const file = fileInput.files?.[0]
  if (!file) return

  BrowserBarcodeScanner(['ean_13'], file, result => {
    // Do something with result.res
  })
})
```

```js
import { BrowserBarcodeScanner } from 'browser-barcodescanner'

const scanButton = document.querySelector('#scan')
const video = document.querySelector('#video')

scanButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    video.srcObject = stream
  })

  BrowserBarcodeScanner(['ean_13'], video, result => {
    // Do something with result.res
  })
})
```

# API

## BrowserBarcodeScanner

```ts
async function BrowserBarcodeScanner(
  formats: string[] = [],
  file: File,
  callback: () => void
): {
  res: string
}
```

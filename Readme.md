<div align="center">
  <h1>browser-BarcodeScanner</h1>
</div>

<div align="center">
<img alt="logo" src="https://raw.githubusercontent.com/hslee2008/browser-barcodescanner/main/logo.png" width="200px" />
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
    // Do something with result.res (The barcode value)
    // Do Something with result.corner (The corner points of the barcode)
    // Do Something with result.box (The bounding box of the barcode)
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
    // Do something with result.res (The barcode value)
    // Do Something with result.corner (The corner points of the barcode)
    // Do Something with result.box (The bounding box of the barcode)
  })
})
```

See https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector/detect for more information about the result.

# API

## BrowserBarcodeScanner

```ts
declare global {
  interface Window {
    BarcodeDetector: any
  }
}
export declare function BrowserBarcodeScanner(
  formats: string[],
  object: File | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement | null,
  callback: (result: { res: string }) => void
): Promise<void>
```

# Contributing

Contributing is always welcome!

I cannot maintain this project alone, so please feel free to open issues and pull requests.

## Testing

If you are going to contribute, follow these steps

```bash
git clone https://github.com/hslee2008/browser-barcodescanner.git
npm install
cd playground
yarn dev
```

In another terminal

```bash
lt --port 5173
```

Then, open the url in your mobile phone as the api is only supported on mobile devices.

declare global {
  interface Window {
    BarcodeDetector: any
  }
}

function BarcodeScanner(callback, formats, object) {
  const barcodeDetector = new window.BarcodeDetector({
    formats
  })

  barcodeDetector.detect(object).then(barcodes => {
    callback({
      res: barcodes[0].rawValue
    })
  })
}

export async function BrowserBarcodeScanner(
  formats: string[],
  object: File | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement | null,
  callback: (result: { res: string }) => void
) {
  // Check if the browser supports the BarcodeDetector API
  if (!('BarcodeDetector' in window))
    throw new Error('BarcodeDetector not supported')

  // Check if the format is supported
  const supportedFormats = await window.BarcodeDetector.getSupportedFormats()
  const unsupportedFormats = formats.filter(
    format => !supportedFormats.includes(format)
  )

  if (unsupportedFormats.length > 0)
    throw new Error(
      `The following formats are not supported: ${unsupportedFormats.join(
        ', '
      )}`
    )

  if (!object) throw new Error('Element or File to scan not provided')

  if (object instanceof File) {
    /* If the object is a file, we need to convert it to a data URL */
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const tempImage = new Image()
      tempImage.src = reader.result as string
      tempImage.onload = () => BarcodeScanner(callback, formats, tempImage)
    })
    reader.readAsDataURL(object)
  } else if (
    object instanceof HTMLVideoElement ||
    object instanceof HTMLImageElement ||
    object instanceof HTMLCanvasElement
  ) {
    /* If the object is a video, image or canvas, we can use it directly */
    BarcodeScanner(callback, formats, object)
  }
}

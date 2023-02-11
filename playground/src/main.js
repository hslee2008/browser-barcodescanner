"use strict";
exports.__esModule = true;
// To test publish package
var browser_barcodescanner_1 = require("browser-barcodescanner");
/* To test modified package,
import { BrowserBarcodeScanner } from '../../src/index.ts'
*/
require("./style.css");
document.querySelector('#app').innerHTML = "\n  <div>\n    <a href=\"/\" target=\"_blank\">\n      <img src=\"/logo.png\" class=\"logo\" alt=\"Vite logo\" />\n    </a>\n    <h1>browser-BarcodeScanner</h1>\n    <div class=\"card\">\n      <button id=\"scan\" type=\"button\">Scan</button>\n      <input type=\"file\" id=\"file\" accept=\"image/*\" />\n    </div>\n  </div>\n";
var scanButton = document.querySelector('#scan');
var fileInput = document.querySelector('#file');
scanButton.addEventListener('click', function () {
    var _a;
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file)
        return;
    var result = (0, browser_barcodescanner_1.BrowserBarcodeScanner)(['ean_13'], file, function (result) {
        // Only mobiles support BarcodeDetector API, so to visualize the result, we have to use alert()
        alert(result.res);
    });
});

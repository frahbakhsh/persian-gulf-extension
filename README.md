# 🌊 Persian Gulf Replacer 🌊

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> 🔄 A browser extension that automatically replaces the incorrect term "Arabic Gulf" with the historically accurate "Persian Gulf" on all web pages. Works in both English and Persian languages!

<p align="center">
  <img src="https://github.com/frahbakhsh/persian-gulf-extension/raw/main/assets/persian-gulf.jpg" alt="Persian Gulf" width="600">
</p>

## ✨ Overview

The Persian Gulf Replacer is a lightweight browser extension that:

- 🔤 Automatically corrects "Arabic Gulf" to "Persian Gulf" in English
- 🇮🇷 Automatically corrects "خلیج عربی" to "خلیج فارس" in Persian
- 🌐 Works seamlessly on all websites
- ⚡ Makes corrections in real-time as pages load

## 📥 Installation

### 🛒 From Browser Extension Store
*(Coming soon)* 

### 🛠️ Manual Installation

1. **Clone the repository**: 📋
   ```bash
   git clone https://github.com/frahbakhsh/persian-gulf-extension.git
   ```

2. **For Chrome/Chromium browsers**: �Chrome
   - Open Chrome/Edge/Brave browser
   - Go to `chrome://extensions/`
   - Enable "Developer mode" at the top-right corner ✅
   - Click "Load unpacked" 📂
   - Select the cloned repository folder

3. **For Firefox**: 🦊
   - Open Firefox
   - Go to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on..." 📂
   - Navigate to the cloned repository and select any file in the directory

## ⚙️ How It Works

The extension uses content scripts that run when web pages load. These scripts recursively scan the DOM for text nodes containing the incorrect terms and replace them with the correct ones.

The main functionality is implemented through:
- 📄 `content.js`: Contains the text replacement logic
- 🔄 `background.js`: Handles extension initialization
- ⚙️ `manifest.json`: Configures the extension and its permissions

## 📁 Project Structure

```
persian-gulf-extension/
├── manifest.json         # Extension configuration ⚙️
├── content.js            # Text replacement functionality 🔄
├── background.js         # Background service worker 🔄
├── assets/               # Images and icons 🖼️
│   └── persian-gulf.jpg  # Persian Gulf image 🌊
├── README.md             # This documentation 📝
└── LICENSE               # License information ⚖️
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 🙌

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 📬

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏛️ Historical Context

The body of water between Iran and the Arabian Peninsula has been known as the "Persian Gulf" for thousands of years. This name has historical precedence and is recognized by the United Nations and international organizations. This extension helps to preserve this historically accurate terminology.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/frahbakhsh/persian-gulf-extension/issues).

---

Created with ❤️ by [frahbakhsh](https://github.com/frahbakhsh)

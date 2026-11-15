# Security

## What protects your data
- **Your data stays on your device.** The app has no account, no server and no analytics. Entries are stored in the app's private storage (Android app) or the browser's IndexedDB (web).
- **No third-party code runs at start-up.** The receipt reader (Tesseract) is downloaded only when you scan a receipt, from a pinned version. Google Fonts are used only by the older colour themes.
- **Strict Content-Security-Policy** (in `index.html` and `netlify.toml`): no inline scripts, no `eval`, no framing, no form posts, only the hosts listed there.
- **Imported files are validated**: size limit, entry limit, amounts and dates checked, text is always HTML-escaped when shown.
- **Android build**: backups off, cleartext traffic off, WebView debugging off, release-signed.

## The signing key
- The key is created by the *Create signing key* workflow **inside GitHub** and kept only as encrypted repository secrets (`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`).
- It is never committed, never in app code, never printed in logs and never attached as a download.
- `.gitignore` blocks key files and the *Check* workflow fails if one (or a private key / password string) ever appears in the repo.
- If the key is lost or replaced, the installed app can't be updated in place: export a JSON backup, uninstall, install the new APK and import the backup.

## Honest limits
- The **app lock** (PIN, pattern, biometric) stops someone casually opening the app. It does **not encrypt** the stored data. Protect the phone with its own screen lock and device encryption (on by default on modern Android).
- Anyone with your unlocked phone, or a rooted phone, can reach app data.
- Voice entry uses the phone's speech service, which may send audio to Google.

## Reporting a problem
Open a private security advisory under the repo's **Security** tab.

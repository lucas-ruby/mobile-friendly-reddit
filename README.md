# Mobile Friendly Reddit  

## About

This add-on disables anti-features from Reddit's mobile site. This includes:  

* Disabling the prompt asking to "Open in App" or "Continue in Browser" that happens upon loading the page, along with the overlay and scroll lock  
* Disables multiple annoying "Get the App" banners  
* Automatically loads more comments from a post upon first load, by default Reddit will only load the first comment and a few replies on mobile  
* More features to be added soon  

## Developing / Debugging

You need web-ext or something to install it on Firefox. It's only really useful on the mobile site, so either you have to spoof user agent or load on Firefox for Android.  

Options are:  

* You can add it as a temporary add-on in about:debugging  
* You can use web-ext run to load the extension temporarily, and to persist profiles. Creating a profile named `mobile-friendly-reddit` will let you do this with the default configuration for web-ext in this project's package.json. To load on Firefox for Android, you need to have adb and debugging mode enabled  
* For Firefox Developer Edition, Beta, ESR and Android versions, you can set `xpinstall.signatures.required` to `false` and load the packaged (zipped) to install the extension in your browser  

## Commands

* run: `web-ext run`  

* lint: `web-ext lint`  

* build: `web-ext build`
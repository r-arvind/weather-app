# Weather

A progressive Weather app for your phones! Don't know what a Progressive app is? Well, here you go :

## What is a Progressive Web App ?

Progressive web apps use modern web APIs along with traditional progressive enhancement strategy to create cross-platform web applications. In simple terms, it's a web app which has capabilites equivalent to that of native Apps. In even more simple terms, you can press "Add to Home Screen" button in your browser. Then, the website will work like a normal app on your phone. It has features like push notifications and background sync which normal web apps don't have.


## There are tons of weather apps out there. So why should I use this?

Good Question. I don't know why either. It'll probably save some space in your phone or save some time if you have a poor internet.

## Disclaimer and Sacrifices

* I am using the [Dark Sky API](https://darksky.net/poweredby/) for this Weather App. It allows only 1000 API calls per day (obviously the free version). Try not to reload the page again & again and please don't spam the server for requests! <br />
* Kindly refrain from using my weather API to build any of your other weather apps.
* This is still in development phase and not ready for use yet. Do not trust the data from this app yet. Use it at your own risk!
* Also, I have no clue about the compatibility of this app. I tested it on chrome in Android. Not sure about IOS. <b>Do tell me if you test it in any other interface. You can create an issue for it</b>

## Usage

Well, that is pretty simple. 
* Go to this [link](https://gifted-kirch-c81c0a.netlify.com)
* You will see an "Add to Home Screen" option pop up in your browser as soon as you open it. If you don't, open the settings and select the add to home screen button.
* And done! Your brand new weather app is ready. You will be able to see the app icon in your home screen

## Features

* Shitty UI
* Hard coded weather data
* Most of the code is copied from one of those tutorials out there

## Yet to come Features

* Awesome UI
* Migrate to some framework like React, Vue or something.
* Fresh Data from the backend ( the server side stuff is almost ready)
* Awesome icons, background images and animations
* Better caching mechanism and performance improvements
* Push notifications (probably)

## Contributing

You are absolutely welcome to contribute to this repo. Once go throught the stuff written below.

### The Front-End

The website and everything is pretty much plain HTML,CSS and vanilla JS. You might wanna check out service workers and other stuff about progressive web apps if you want to contribute to the app. <br/>
If you are going to work on improving the UI then just open the css file and get rollin.<br />
I have hosted this app on Netlify just for the heck of it. You can use gh-pages if you want to as they are just static websites.

### The Back-End

The backend runs on Express.js. I have created another branch in this repo for the backend.
One thing to be noted is that it doesnt have the API key. If you wanna test it, you'll have to sign up and use your own API key.



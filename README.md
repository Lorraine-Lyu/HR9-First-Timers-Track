# HackRice 9 | FOCUS on Chrome

## Clarification
This project is currently under development. The connection between backgound and each chrome tab might be temporarily disconnected, which might make our prototype not responsive on existing chrome tab. 

To test this extension, we recommend opening new tabs after initiating the timing process. 

Regarding to the helpfulness of search engine, we particularly include "chrome://newtab/" into our whiteList. 


## Introduction

Focus google extension helps to transform distractive google tabs into tools of focusing. This interface allows user to specify focusing time and any website they want to work with. 

When users are ready to work, they can start a countdown for working time and all the distracting websites that are not on the white list will be blocked, unless users choose to proceed during this time. 

During anytime in countdown, user is allowed to remove or add new tab to the whiteList through the interface. 

This simply tactics effectively helps users to minize procrastinations. 


## Frontend 

As first timers, we prefer using simple sytac and framework to implement our design.
We did not call other libraries besides bootstrap. But the prototype we design requires intensive intermodular communications and asychronous programing. If you are interested in our project, welcome to share your insights on both technical and any other aspects we us! 




## Loading Your Extension 
Once you have created your folder with the manifest.json file, you can load your chrome extension. To do so,
* Open a Google Chrome Browser.
* Navigate to chrome://extensions/
* In the upper right hand corner, enable the button called “Developer Mode”.
* Click the “Load Unpacked” button.
* A file dialog will popup asking you to locate your chrome extension folder. Once you have located the folder, select the folder, and then click “Select”.
* You should now see your extension!

As you are coding, to update the extension, all you need to do is save the file, and then click the refresh button in chrome://extensions. 

## Next Steps

Chrome extensions allow for a variety of customization. A few popular examples include: 
* [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en): A personalized, inspirational, to-do dashboard that appears in every new tab. 
* [Dark Mode for Chrome](https://chrome.google.com/webstore/detail/dark-mode-for-chrome/geooakdjiamlhpechokegobmhdmlgidk?hl=en) 
A button to enable dark mode while browsing.

To help you get started, here are some more tutorials:
* [Read Time Price Tracking Tutorial](https://scotch.io/tutorials/build-a-chrome-extension-for-real-time-price-tracking-with-appbase)
* [Dashboard Tutorial](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-how-to-build-a-simple-chrome-extension-in-vanilla-javascript-e52b2994aeeb) 
* [Dashboard Tutorial](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-how-to-build-a-simple-chrome-extension-in-vanilla-javascript-e52b2994aeeb) 
* [jQuery Determiner Tutorial](https://www.thepolyglotdeveloper.com/2018/09/creating-basic-chrome-extension/)


## Resources 
* [Google Chrome Extension Documentation](https://developer.chrome.com/extensions/overview): This is a very comprehensive explanation of how Chrome extensions are built and the various functions extensions can have. You can look in [Google Provided Starter Examples](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/tutorials/) for the starter code used in the examples. 
* [HTML Tutorial](https://html.com/): This tutorial covers the basics of HTML. 
* [CSS Tutorial](https://html.com/css/): This tutorial covers the basics of CSS.
* [Javascript Tutorial](https://www.htmldog.com/guides/javascript/): This simple and straightforward tutorial covers the basics of Javascript. Start by reading this [article](https://www.htmldog.com/guides/javascript/beginner/makingstuffhappen/) and then continue reading [here](https://www.htmldog.com/guides/javascript/intermediate/thedom/).
* [The Modern Javascript Tutorial](https://javascript.info/): This in-depth tutorial thoroughly covers Javascript.

## FAQ

## Footnotes

<sup>1,2</sup>: https://blog.hartleybrody.com/chrome-extension/

<sup>3,6</sup>: https://thoughtbot.com/blog/how-to-make-a-chrome-extension

<sup>4,5</sup>: https://24ways.org/2018/my-first-chrome-extension/ 

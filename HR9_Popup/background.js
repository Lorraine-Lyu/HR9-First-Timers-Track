// background.js

var visited = [];
var whiteList = ["chrome://newtab/"];
var blackList = ["chrome://newtab/"];
var time = 8;
var timing = false;



chrome.tabs.query({active: true}, (lst)=> {
    var curr = lst[0].id;
    currTab = curr;
    console.log(curr);
    chrome.tabs.reload(curr)
    // for (tab of lst) {
    //   chrome.tabs.executeScript(tab.id, {file: "content.js"});
    // }
})

//port open for content.js
// var toContent = chrome.runtime.connect({name: "Background -> Content"});
// Window.contentPort = toContent;
// toContent.postMessage("Greeting From Background");
// toContent.onDisconnect.addListener(()=> {console.log("disconnected")})
// toContent.onMessage.addListener(function(msg) {
//   console.log(msg);
// });

//receiving signal from content and popup
chrome.extension.onConnect.addListener(function(port) {
  if (port.name === "Popup -> Background") {
    // console.log("Connected to popup");
    port.onMessage.addListener(function(msg) {
      // console.log('msg time: ' + msg.time)
      // console.log('time ' + parseInt(msg.time))
      if (msg.purpose === "Start Timing") {
          whiteList = msg.lst;
          console.log(whiteList);
          setTime(parseInt(msg.time)*60*1000);
        }
      });
  } else if (port.name === "Content -> Background") {
    Window.toContent = port;
    // console.log("Connected to Content")
    port.onMessage.addListener(function(msg) {
      // console.log('msg from Content: ' + msg)
      if (msg === "Terminate") {
        timing = false;
        alert("Focus Terminated");
      }
    });
  }
})

//probably will delete this handler later, for user will stay on the same page after updating
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // console.log(timing)
  if (timing) {
    if (matchUrl(tab.url)) {
      Window.toContent.postMessage("From Background");
    }
    
    visited.push(tab.url);
  }
});

chrome.tabs.onCreated.addListener((tab)=>{
  // console.log(timing)
  if (timing) {
    if (matchUrl(tab.url)) {
      // alert('you just created a new tab ' + JSON.stringify(tab.url));
    }
    Window.toContent.postMessage("From Background");
    visited.push(tab.url);
  }
})


chrome.tabs.onActivated.addListener(function() {
  if (timing) {
    chrome.tabs.query({active: true}, (lst)=> {
      var curr = lst[0].url;
      if (matchUrl(curr)) {
        // console.log("activated : "+curr); 
        // sendMsgToContent(lst[0].id);
        Window.toContent.postMessage("From Background"); 
      }
      visited.push(curr);
    })
  }
})

//===============================utils=================================

function setTime(time) {
  if (time <= 0 || time== undefined || time===NaN) {
    alert("invalid time input");
    return
  } 
  timing = true;
  setTimeout(function(){ if (timing) {timing=false, alert("Congratulation on finishing your focus!");} }, time);
}

function matchUrl(url) {
  for (str of whiteList) {
    if (url.includes(str)) {
      return false;
    }
  }
  return true;
}

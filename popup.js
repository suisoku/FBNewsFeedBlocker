/* function setup() {
    console.log("im alive ");
    // Look for a text field and slider
    var col = select('#color');
    col.input(sendMessage);
    var slider = select('#size');
    slider.input(sendMessage);
  
    // Whenever those interface elements change
    // A message is sent to the content script
    function sendMessage() {
      // Messages are just objects
      var msg = {
        from: 'popup',
        color: col.value(),
        size: slider.value()
      }
  
      // A tab has be selected for the message to be sent
      var params = {
        active: true,
        currentWindow: true
      }
      // This searches for the active tabs in the current window
      chrome.tabs.query(params, gotTabs);
  
      // Now we've got the tabs
      function gotTabs(tabs) {
        // The first tab is the one you are on
        chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
      }
    }
  } */


  console.log("popup is running");

  
  function changeBackground() {
      
      let params = {active: true, currentWindow: true};
      
      console.log("somehting is appening ?");
      chrome.tabs.query(params , gotTabs);
      

      function gotTabs(tabs) {
          let msg = { txt: 'extensionClicked' };
          // The first tab is the one you are on
          chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
        }
    }

let buttons = document.getElementsByTagName("button");
console.log(buttons);
console.log(document.getElementsByTagName("button").length);
console.log(buttons.length);
//document.getElementsByTagName("button")[0].onClick = function() {console.log("callbacking !");} ;




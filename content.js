console.log("Content is running  is running!");

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// A message is received
function receiver(message, sender, sendResponse) {

  if(message.txt == 'extensionClicked'){
      let elts = document.getElementsByTagName("p");

      for(e of elts){
          e.style['background_color'] = '#00FF00'
      }
  }

}
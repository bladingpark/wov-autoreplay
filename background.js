function click(x, y, button = 'left') {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    const target = { tabId: tabs[0].id }
    chrome.debugger.attach(target, '1.2', function () {
      chrome.debugger.sendCommand(target, 'Input.dispatchMouseEvent', { type: 'mouseMoved', x, y })
      chrome.debugger.sendCommand(target, 'Input.dispatchMouseEvent', {
        type: 'mousePressed',
        button,
        x,
        y,
        clickCount: 1,
      })
      chrome.debugger.sendCommand(target, 'Input.dispatchMouseEvent', {
        type: 'mouseReleased',
        button,
        x,
        y,
        clickCount: 1,
      })
    })
  })
}

chrome.runtime.onMessage.addListener(({ x, y }) => {
  console.log('onMessage')
  console.log(x, y)
  click(x, y)
})

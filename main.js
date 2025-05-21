console.log('Wov Autoreplay injected')

function click(element) {
  const rect = element.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  return chrome.runtime.sendMessage({ x, y })
}

setInterval(() => {
  const startGame = $('div:contains("START GAME")')
  if (startGame.length) {
    click(startGame[startGame.length - 1])
  }
  const playAgain = $('div:contains("Play again")')
  if (playAgain.length) {
    click(playAgain[playAgain.length - 1])
    const ok = $('div:contains("OK")')
    if (ok.length) {
      click(ok[ok.length - 1])
    }
  }
  const Continue = $('div:contains("Continue")')
  if (Continue.length) {
    click(Continue[Continue.length - 1])
  }
}, 1000)

import isBrowser from "./is-browser"

export const loadGame = () => isBrowser() ? JSON.parse(localStorage.getItem("game") ?? "{}") : {}
export const saveGame = (gameState) => {
  if (isBrowser()) localStorage.setItem("game", JSON.stringify(gameState))
}
export const resetGame = () => {
  if (isBrowser()) {
    localStorage.clear()
    window.location.href = "/"
  }
}
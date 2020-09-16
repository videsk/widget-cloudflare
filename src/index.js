function init() {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement() {
    element = INSTALL.createElement("body", "script")
    // Set the app attribute to your app's dash-delimited alias.
    element.src = options.url
    element.setAttribute("videsk-token", options.token)
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    },
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  } else {
    updateElement()
  }
}

init()

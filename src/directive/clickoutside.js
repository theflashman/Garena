let nodeList = {}

function creacteDocumentHandler(el, binding) {
  return function (e) {
    const target = e.target
    if (el.contains(target)) {
      return false
    }
    if (binding.arg) {
      binding.value(e)
    }
  }
}

const handler = (e) => {
  const { documentHandler } = nodeList
  if (documentHandler) {
    documentHandler(e)
  }
}

window.addEventListener('touchstart', handler)

const ClickOutSide = {
  beforeMount(el, binding) {
    nodeList = {
      documentHandler: creacteDocumentHandler(el, binding)
    }
  },
  updated(el, binding) {
    nodeList = {
      documentHandler: creacteDocumentHandler(el, binding)
    }
  },
  unmounted() {
    window.removeEventListener('touchstart', handler)
  }
}

export default ClickOutSide
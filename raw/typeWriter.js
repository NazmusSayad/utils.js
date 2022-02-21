const typeWriter = (element, txt = [], wS = 75, cS = 50, wD = 500, cD = 1000, count = false, clean = true, fn = () => {}) => {
  let txtIndex = 0
  let i = 0
  let counter = 1
  const clear = () => {
    if (element.textContent.length) {
      element.textContent = element.textContent.slice(0, -1)
      i++
      setTimeout(clear, cS)
    } else {
      i = 0
      setTimeout(write, wD)
    }
  }
  const write = () => {
    if (i < txt[txtIndex].length) {
      element.append(txt[txtIndex].charAt(i))
      i++
      setTimeout(write, wS)
    } else {
      counter++
      if (count && count < counter) {
        fn(element, { wS, cS, wD, cD })
        return
      }
      i = 0
      if (txtIndex < txt.length - 1) {
        txtIndex++
      } else {
        txtIndex = 0
      }
      setTimeout(clear, cD)
    }
  }
  if (element.textContent.length && clean) clear()
  else write()
}

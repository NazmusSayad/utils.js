// Array
const randomOfArray = (array = [false, true]) => {
  return array[Math.floor(Math.random() * array.length)]
}
// Object, Key, Descending or Ascending
const arrayOfObjectSort = (object, key, sort) => {
  if (!sort) return object.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  return object.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}
// MM/DD/YYYY
const ageCalculator = (mdyy) => {
  let now = new Date()
  let yearNow = now.getYear()
  let monthNow = now.getMonth()
  let dateNow = now.getDate()
  let dob = new Date(mdyy.substring(6, 10), mdyy.substring(0, 2) - 1, mdyy.substring(3, 5))
  let yearDob = dob.getYear()
  let monthDob = dob.getMonth()
  let dateDob = dob.getDate()
  let yearAge = yearNow - yearDob
  let monthAge
  let dateAge
  if (monthNow >= monthDob) {
    monthAge = monthNow - monthDob
  } else {
    yearAge--
    monthAge = 12 + monthNow - monthDob
  }
  if (dateNow >= dateDob) {
    dateAge = dateNow - dateDob
  } else {
    monthAge--
    dateAge = 31 + dateNow - dateDob
    if (monthAge < 0) {
      monthAge = 11
      yearAge--
    }
  }
  return { B: dob, D: dateAge, M: monthAge, Y: yearAge }
}
// Element
const nodeSelect = (element) => {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange()
    range.moveToElementText(element)
    range.select()
  } else if (window.getSelection) {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
  }
  return element.textContent.trim()
}
// Element
const nodeVisible = (element) => {
  const position = element.getBoundingClientRect()
  if (position.top >= 0 && position.bottom <= window.innerHeight) return true
  else if (position.top < window.innerHeight && position.bottom >= 0) return "true"
  else return false
}
// Selectors
const nodeListSort = (selectors) => {
  let i, switching, b, shouldSwitch
  switching = true
  while (switching) {
    switching = false
    b = document.querySelectorAll(selectors)
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false
      if (b[i].textContent.toLowerCase().trim() > b[i + 1].textContent.toLowerCase().trim()) {
        shouldSwitch = true
        break
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i])
      switching = true
    }
  }
}
// Src, After Load()
const json = (src, func) => {
  fetch(src)
    .then((res) => res.json())
    .then((data) => {
      func(data)
    })
}
// Maximum, Minimum
const randomNumber = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// Parent, InnerHTML, Class, Id
const html = (parent = "div", innerH = "", classs = "", iddd = "") => {
  const parentE = document.createElement(parent.trim())
  if (classs !== "") parentE.setAttribute("class", classs.trim())
  if (iddd !== "") parentE.setAttribute("id", iddd.trim())
  parentE.innerHTML = innerH.trim()
  return parentE
}
// IF Seconds, new Date()
const timeDate = (ifSec = true, current = new Date()) => {
  const config = {
    hour: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    weekday: "long",
  }
  if (ifSec) config.second = "2-digit"
  const timeDate = current.toLocaleString("en-US", config).split(",")
  return {
    date: current.toLocaleDateString("en-US", {
      dateStyle: "medium",
    }),
    date2: timeDate[1].trim(),
    time: timeDate[2].trim(),
    day: timeDate[0],
  }
}
// Element, Text, Write Speed, Clear Speed, Write Delay, Clear Delay, Count, Clean Before Start, After Limit()
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
// Key, Value, Day, Hour, Minute, Second
const cookie = function (key, value, day = 0, hour = 0, minute = 0, second = 0) {
  switch (arguments.length) {
    case 1:
      {
        let name = key + "="
        let ca = document.cookie.split(";")
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i]
          while (c.charAt(0) == " ") {
            c = c.substring(1)
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
          }
        }
        return ""
      }
      break
    default:
      {
        const d = new Date()
        d.setTime(d.getTime() + (day * 86400000 + hour * 3600000 + minute * 60000 + second * 1000))
        document.cookie = key + "=" + value + ";" + "expires=" + d.toUTCString() + ";path=/"
      }
      break
  }
}

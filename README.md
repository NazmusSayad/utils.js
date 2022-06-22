#

### DisableScroll
- DisableScroll.enable()
- DisableScroll.disable()

```javascript
var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},__assign.apply(this,arguments)},canUseDOM=function(){return"undefined"!=typeof window&&!!window.document&&!!window.document.createElement},DisableScroll=function(){function e(){var e=this;this.handleWheel=function(e){e.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(n){var t=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(n.target.tagName)&&(t=t.filter((function(n){return!e.options.authorizedInInputs.includes(n)}))),t.includes(n.keyCode)&&n.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},canUseDOM()&&(this.element=document.scrollingElement)}return e.prototype.disable=function(e,n){var t,o,l,s;if(canUseDOM()){this.element=e||this.element,this.options=__assign(__assign({},this.options),n);var i=this.options,d=i.disableKeys,a=i.disableScroll;i.disableWheel&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),a&&(this.lockToScrollPos=[null!==(o=null===(t=this.element)||void 0===t?void 0:t.scrollLeft)&&void 0!==o?o:0,null!==(s=null===(l=this.element)||void 0===l?void 0:l.scrollTop)&&void 0!==s?s:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),d&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.enable=function(){canUseDOM()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}();export default new DisableScroll;
```

#

### document.querySelector()

```javascript
const qs = (selector, parent = document) => {
   return parent.querySelector(selector)
}
```

#

### document.querySelectorAll()

```javascript
const qsa = (selector, parent = document) => {
   return [...parent.querySelectorAll(selector)]
}
```

#

### document.querySelectorAll() && document.querySelector()

```javascript
Document.prototype.qs = function (selector) {
   if (!arguments.length)
      throw new Error("Failed to execute 'querySelector' on 'Document': 1 argument required, but only 0 present.")

   return this.querySelector(selector)
}
Element.prototype.qs = function (selector) {
   if (!arguments.length)
      throw new Error("Failed to execute 'querySelector' on 'Document': 1 argument required, but only 0 present.")

   return this.querySelector(selector)
}

Document.prototype.qsa = function (selector) {
   if (!arguments.length)
      throw new Error("Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.")

   return [...this.querySelectorAll(selector)]
}
Element.prototype.qsa = function (selector) {
   if (!arguments.length)
      throw new Error("Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.")

   return [...this.querySelectorAll(selector)]
}

```

#

### document.createElement()

```javascript
const createElement = (type, html = "", options = {}) => {
   const element = document.createElement(type)
   element.innerHTML = html

   Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
         element.setAttribute("class", value)
         return
      }

      if (key === "dataset") {
         Object.entries(value).forEach(([dataKey, dataValue]) => {
            element.dataset[dataKey] = dataValue
         })
         return
      }

      element.setAttribute(key, value)
   })
   return element
}
```

```javascript
const createElement = (parent = "div", innerH = "", classs = "", iddd = "") => {
   const parentE = document.createElement(parent.trim())
   if (classs !== "") parentE.setAttribute("class", classs.trim())
   if (iddd !== "") parentE.setAttribute("id", iddd.trim())
   parentE.innerHTML = innerH
   return parentE
}
```

```javascript
const HTMLS = (body) => {
   const element = document.createElement('template')
   element.innerHTML = body
   return element.content
}
```

```javascript
const HTML = (body) => {
   const element = document.createElement("template")
   element.innerHTML = body
   return element.content.firstElementChild
}
```

#

### Sleep For A While

```javascript
const sleep = (duration) => {
   return new Promise((resolve) => {
      setTimeout(resolve, duration)
   })
}
```

#

### Type In Your Document

```javascript
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
```

#

### Get You Current Date

```javascript
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
```

#

### Get A Random Number

```javascript
const randomNumber = (max = 1, min = 0) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
```

#

### Get A Random Item From An Array

```javascript
const randomOfArray = (array = [false, true]) => {
   return array[Math.floor(Math.random() * array.length)]
}
```

```javascript
Array.prototype.random = function () {
   return this[[Math.floor(Math.random() * this.length)]]
}
```

#

### If If The Node Is Visible On Viewport

```javascript
const isVisible = (element) => {
   const position = element.getBoundingClientRect()
   if (position.top >= 0 && position.bottom <= innerHeight) return true
   else if (position.top < innerHeight && position.bottom >= 0) return "true"
   else return false
}
```

```javascript
const isVisible = (element) => {
   const position = element.getBoundingClientRect()

   if (position.top >= 0 && position.bottom <= innerHeight) return 3
   if (position.top < 0 && position.bottom > 0 && position.bottom < innerHeight) return 2
   if (position.top >= 0 && position.top < innerHeight && position.bottom > innerHeight) return 1
   return 0
}
```

#

### Calculate You Age

```javascript
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
```

#

### Sort It

```javascript
const sortArrayOfObejctByKey = (object, key, sort) => {
   if (!sort) return object.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
   return object.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}
```

```javascript
Array.prototype.sortByKey = function (key, sort) {
   if (!sort) return this.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
   return this.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}
```

#

### Cookie Pro

```javascript
const cookie = Object.seal({
   get: (key) => {
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
      return null
   },
   set: (key, value, day = 365, hour = 0, minute = 0, second = 0) => {
      const d = new Date()
      d.setTime(d.getTime() + (day * 86400000 + hour * 3600000 + minute * 60000 + second * 1000))
      document.cookie = key + "=" + value + ";" + "expires=" + d.toUTCString() + ";path=/"
   },
   remove: (key) => {
      document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
   },
})
```

#

### Fetch Json

```javascript
const json = (src, func) => {
   fetch(src)
      .then((res) => res.json())
      .then((data) => {
         func(data)
      })
}
```

#

### Sort A List Of Node

```javascript
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
```

#

### Select A Node In Dom

```javascript
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
```

# andomOfArray
parameter: Array
```javascript
randomOfArray = (t = [!1, !0]) => t[Math.floor(Math.random() * t.length)]
```

<br /> 

# arrayOfObjectSort
parameter: Object, Key, Descending or Ascending
```javascript
 arrayOfObjectSort = (t, e, n) =>
    n ? t.sort((t, n) => (n[e] > t[e] ? 1 : t[e] > n[e] ? -1 : 0)) : t.sort((t, n) => (t[e] > n[e] ? 1 : n[e] > t[e] ? -1 : 0))
```

<br /> 

# ageCalculator
parameter: MM/DD/YYYY
```javascript
 ageCalculator = (t) => {
    let e,
      n,
      o = new Date(),
      r = o.getYear(),
      i = o.getMonth(),
      a = o.getDate(),
      s = new Date(t.substring(6, 10), t.substring(0, 2) - 1, t.substring(3, 5)),
      c = s.getYear(),
      l = s.getMonth(),
      d = s.getDate(),
      g = r - c
    return i >= l ? (e = i - l) : (g--, (e = 12 + i - l)), a >= d ? (n = a - d) : (e--, (n = 31 + a - d), e < 0 && ((e = 11), g--)), { B: s, D: n, M: e, Y: g }
  }
```

<br /> 

# nodeSelect
parameter: Element
```javascript
 nodeSelect = (t) => {
    if (document.body.createTextRange) {
      const e = document.body.createTextRange()
      e.moveToElementText(t), e.select()
    } else if (window.getSelection) {
      const e = window.getSelection(),
        n = document.createRange()
      n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n)
    }
    return t.textContent.trim()
  }
```

<br /> 

# nodeVisible
parameter: Element
```javascript
 nodeVisible = (t) => {
    const e = t.getBoundingClientRect()
    return (e.top >= 0 && e.bottom <= window.innerHeight) || (e.top < window.innerHeight && e.bottom >= 0 && "true")
  }
```

<br /> 

# nodeListSort
parameter: Selectors
```javascript
 nodeListSort = (t) => {
    let e, n, o, r
    for (n = !0; n; ) {
      for (n = !1, o = document.querySelectorAll(t), e = 0; e < o.length - 1; e++)
        if (((r = !1), o[e].textContent.toLowerCase().trim() > o[e + 1].textContent.toLowerCase().trim())) {
          r = !0
          break
        }
      r && (o[e].parentNode.insertBefore(o[e + 1], o[e]), (n = !0))
    }
  }
```

<br /> 

# json
parameter: Src, After Load()
```javascript
 json = (t, e) => {
    fetch(t)
      .then((t) => t.json())
      .then((t) => {
        e(t)
      })
  }
```

<br /> 

# randomNumber
parameter: Maximum, Minimum
```javascript
 randomNumber = (t = 1, e = 0) => Math.floor(Math.random() * (t - e + 1) + e)
```

<br /> 

# html
parameter: Parent, InnerHTML, Class, Id
```javascript
 html = (t = "div", e = "", n = "", o = "") => {
    const r = document.createElement(t.trim())
    return "" !== n && r.setAttribute("class", n.trim()), "" !== o && r.setAttribute("id", o.trim()), (r.innerHTML = e.trim()), r
  }
```

<br /> 

# timeDate
parameter: IF Seconds, new Date()
```javascript
 timeDate = (t = !0, e = new Date()) => {
    const n = { hour: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", year: "numeric", month: "2-digit", weekday: "long" }
    t && (n.second = "2-digit")
    const o = e.toLocaleString("en-US", n).split(",")
    return { date: e.toLocaleDateString("en-US", { dateStyle: "medium" }), date2: o[1].trim(), time: o[2].trim(), day: o[0] }
  }
```

<br /> 

# typeWriter
parameter: Element, Text, Write Speed, Clear Speed, Write Delay, Clear Delay, Count, Clean Before Start, After Limit()
```javascript
 typeWriter = (t, e = [], n = 75, o = 50, r = 500, i = 1e3, a = !1, s = !0, c = () => {}) => {
    let l = 0,
      d = 0,
      g = 1
    const m = () => {
        t.textContent.length ? ((t.textContent = t.textContent.slice(0, -1)), d++, setTimeout(m, o)) : ((d = 0), setTimeout(u, r))
      },
      u = () => {
        if (d < e[l].length) t.append(e[l].charAt(d)), d++, setTimeout(u, n)
        else {
          if ((g++, a && a < g)) return void c(t, { wS: n, cS: o, wD: r, cD: i })
          ;(d = 0), l < e.length - 1 ? l++ : (l = 0), setTimeout(m, i)
        }
      }
    t.textContent.length && s ? m() : u()
  }
```

<br /> 

# cookie
parameter: Key, Value, Day, Hour, Minute, Second
```javascript
 cookie = function (t, e, n = 0, o = 0, r = 0, i = 0) {
    switch (arguments.length) {
      case 1:
        {
          let e = t + "=",
            n = document.cookie.split(";")
          for (let t = 0; t < n.length; t++) {
            let o = n[t]
            for (; " " == o.charAt(0); ) o = o.substring(1)
            if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
          }
          return ""
        }
        break
      default:
        {
          const a = new Date()
          a.setTime(a.getTime() + (864e5 * n + 36e5 * o + 6e4 * r + 1e3 * i)), (document.cookie = t + "=" + e + ";expires=" + a.toUTCString() + ";path=/")
        }
        break
    }
  }
```

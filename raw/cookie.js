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

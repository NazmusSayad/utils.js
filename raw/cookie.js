const cookie = {
  get: (key) => {
    let name = key + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  },
  set: (key, value, day = 365, hour = 0, minute = 0, second = 0) => {
    const d = new Date();
    d.setTime(
      d.getTime() +
        (day * 86400000 + hour * 3600000 + minute * 60000 + second * 1000)
    );
    document.cookie =
      key + "=" + value + ";" + "expires=" + d.toUTCString() + ";path=/";
  },
  remove: (key) => {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  },
};

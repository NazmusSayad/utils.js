const json = (src, func) => {
  fetch(src)
    .then((res) => res.json())
    .then((data) => {
      func(data)
    })
}

const nodeVisible = (element) => {
  const position = element.getBoundingClientRect()
  if (position.top >= 0 && position.bottom <= window.innerHeight) return true
  else if (position.top < window.innerHeight && position.bottom >= 0) return "true"
  else return false
}

const arrayOfObjectSort = (object, key, sort) => {
  if (!sort) return object.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  return object.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}
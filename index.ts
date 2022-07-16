interface Element {
  qs(selector: String): Element
  qsa(selector: String): Element[]
}
interface Document {
  qs(selector: String): Element
  qsa(selector: String): Element[]
}
interface Array<T> {
  random(): any
  sortByKey(key: string, sort: any): []
}
interface Object {
  forEach(callback: Function): void
}
interface Window {
  HTML(body: string): Element
}

Document.prototype.qs = function () {
  return this.querySelector.apply(this, arguments)
}

Element.prototype.qs = function () {
  return this.querySelector.apply(this, arguments)
}

Document.prototype.qsa = function () {
  return [...this.querySelectorAll.apply(this, arguments)]
}

Element.prototype.qsa = function () {
  return [...this.querySelectorAll.apply(this, arguments)]
}

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.sortByKey = function (key, sort): [] {
  if (!sort) return this.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  return this.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}

Object.prototype.forEach = function (callback) {
  Object.keys(this).forEach((key) => {
    callback(key, this[key], this)
  })
}

window.HTML = (body = "<div></div>") => {
  return new DOMParser().parseFromString(body, "text/html").body.firstElementChild
}

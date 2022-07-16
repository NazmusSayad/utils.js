interface Element {
  qs(selector: String): Element
  qsa(selector: String): Element[]
}
interface Document {
  qs(selector: String): Element
  qsa(selector: String): Element[]
}
interface Array<T> {
  randomElement(): any
  sortByKey(key: string, sort: [Boolean, number]): []
}
interface Math {
  randomNumber(min: number, max: number): number
}
interface Object {
  forEach(callback: Function): void
}
interface Window {
  HTML(body: string): Element
  fetchJSON(url: [String, URL], opt: Object): any
  fetchTEXT(url: [String, URL], opt: Object): any
  Wait(time: number): any
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

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.sortByKey = function (key, sort) {
  if (!sort) return this.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  return this.sort((b, a) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}

Object.prototype.forEach = function (callback) {
  Object.keys(this).forEach((key) => {
    callback(key, this[key], this)
  })
}

Math.randomNumber = function (min = 0, max = 1) {
  if (arguments.length === 1) (max = min), (min = 0)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.HTML = function (body = "<div></div>") {
  return new DOMParser().parseFromString(body, "text/html").body.firstElementChild
}

window.fetchJSON = async function () {
  return await (await fetch.apply(this, arguments)).json()
}

window.fetchTEXT = async function () {
  return await (await fetch.apply(this, arguments)).text()
}

window.Wait = function (duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

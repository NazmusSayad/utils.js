const html = (parent = "div", innerH = "", classs = "", iddd = "") => {
  const parentE = document.createElement(parent.trim())
  if (classs !== "") parentE.setAttribute("class", classs.trim())
  if (iddd !== "") parentE.setAttribute("id", iddd.trim())
  parentE.innerHTML = innerH.trim()
  return parentE
}

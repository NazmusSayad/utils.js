const randomOfArray = (array = [false, true]) => {
  return array[Math.floor(Math.random() * array.length)]
}
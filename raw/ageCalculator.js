const ageCalculator = (mdyy) => {
  let now = new Date()
  let yearNow = now.getYear()
  let monthNow = now.getMonth()
  let dateNow = now.getDate()
  let dob = new Date(mdyy.substring(6, 10), mdyy.substring(0, 2) - 1, mdyy.substring(3, 5))
  let yearDob = dob.getYear()
  let monthDob = dob.getMonth()
  let dateDob = dob.getDate()
  let yearAge = yearNow - yearDob
  let monthAge
  let dateAge
  if (monthNow >= monthDob) {
    monthAge = monthNow - monthDob
  } else {
    yearAge--
    monthAge = 12 + monthNow - monthDob
  }
  if (dateNow >= dateDob) {
    dateAge = dateNow - dateDob
  } else {
    monthAge--
    dateAge = 31 + dateNow - dateDob
    if (monthAge < 0) {
      monthAge = 11
      yearAge--
    }
  }
  return { B: dob, D: dateAge, M: monthAge, Y: yearAge }
}
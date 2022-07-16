const fs = require("fs")

fs.rmSync(
  "./index.js.map",
  {
    force: true,
  },
  (err) => {
    console.log(err)
  }
)

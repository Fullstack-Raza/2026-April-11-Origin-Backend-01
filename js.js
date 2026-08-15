const catMe = require("cat-me")
const express = require("express")

const App = express();

App.listen(3000,()=>{console.log("chal gia server");
})
console.log(catMe());
console.log("Raza");
console.log(23);

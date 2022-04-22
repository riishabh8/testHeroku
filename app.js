const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Rishabh");
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Rishabh's Server up and running");
});

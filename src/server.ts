import express, { response } from "express";
const app = express();


app.get("/test", (request,response) => {
  return response.send("olá mundo")
});
app.post("/test-post", (request,response) =>{
  return response.send("olá mundo post")
});

app.listen(3000, () => console.log("server is running"));
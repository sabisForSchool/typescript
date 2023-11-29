import express from 'express';
import cors from "cors"
const app = express();

const port = 3000;

app.use(
  express.json(), cors({origin: "*"})
  );

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
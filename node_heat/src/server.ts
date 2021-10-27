import { serverHttp } from "./app";

serverHttp.listen(4000, () => { 
  console.clear();
  console.log("🚧 Server is running on PORT 4000 🚧");
});
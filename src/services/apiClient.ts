import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    "key": "b28e217b4e0541ba805c76a55f236621"
  }
})
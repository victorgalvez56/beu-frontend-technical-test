import { selector } from "recoil";
import { word } from "./atoms";
import axios from "axios";

export const sendEmail = selector({
  key: "sendEmailSelector",
  get: async ({ get }) => {
    const payload = get(word);
    if (payload) {
      try {
        let urlWithString = `https://www.googleapis.com/books/v1/volumes?q=${payload}`;
        const res = await axios({
          url: urlWithString,
          method: "get",
        });
        return res.data.items;
      } catch (err) {
        return `Error: ` + err;
      }
    } else {
      return [];
    }
  },
});

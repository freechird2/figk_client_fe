import { atom } from "recoil";

export const searchResultState = atom<string>({
  key: "searchResultState",
  default: "",
});

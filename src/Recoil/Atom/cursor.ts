import { atom } from "recoil";

export type CursorStateTypes =
  | "default"
  | "action"
  | "prev"
  | "next"
  | "hide"
  | "action2";

export const CursorState = atom<CursorStateTypes>({
  key: "cursorState",
  default: "default",
});

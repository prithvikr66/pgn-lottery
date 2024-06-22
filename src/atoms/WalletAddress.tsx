import { atom } from "recoil";

export const walletAddress = atom<string | null>({
  key: "walletAddress",
  default: null,
});

import { atom } from "recoil";

export const roundNumberState = atom<number | null>({
  key: "roundNumberState",
  default: null,
});
export const ticketsSoldState = atom({
  key: "ticketsSoldState",
  default: null,
});
// export const lotteryNftTicketContract = atom({
//   key: "lotteryNftTicketContract",
//   default: null,
// });

import { atom } from "recoil";
import { Contract } from "ethers";
export const raceContract = atom<Contract | null>({
  key: "raceContract",
  default: null,
});
export const lotteryContract = atom<Contract | null>({
  key: "lotteryContract",
  default: null,
});
export const lotteryNftTicketContract = atom<Contract | null>({
  key: "lotteryNftTicketContract",
  default: null,
});

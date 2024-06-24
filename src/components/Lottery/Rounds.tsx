import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { lotteryABI } from "../../abi";
import { roundNumberState } from "../../atoms/LotteryInfo";
import { useSetRecoilState } from "recoil";

type LotteryInfo = [
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  number
];

const Rounds = () => {
  const [roundNumber, setRoundNumber] = useState<number | null>();
  const setRoundNumberState = useSetRecoilState(roundNumberState);
  const [numberOfTicketsSold, setNumberOfTicketsSold] = useState<
    number | null
  >();

  const { data: lotteryNumber } = useReadContract({
    abi: lotteryABI,
    address: "0x3FA72577519c2A8360bd478865Ed37EB5cE4a856",
    functionName: "currentLotteryID",
  }) as { data: bigint | undefined };

  const { data: tickets } = useReadContract({
    abi: lotteryABI,
    address: "0x3FA72577519c2A8360bd478865Ed37EB5cE4a856",
    functionName: "allLotteries",
    args: [roundNumber],
  }) as { data: LotteryInfo | undefined };

  

  useEffect(() => {
    if (lotteryNumber) {
      setRoundNumber(Number(lotteryNumber));
      setRoundNumberState(Number(lotteryNumber));
    }
    if (tickets) {
      setNumberOfTicketsSold(Number(tickets[3]));
    }
  }, [lotteryNumber, tickets]);

  return (
    <div className=" text-white uppercase text-[24px]">
      <div className=" flex justify-between">
        <p>Round {roundNumber} </p>
        <p>{numberOfTicketsSold}/100 Tickets</p>
      </div>
      <div className=" w-full h-[25px] bg-white rounded-[200px] mt-3 shadow-xl">
        <div
          className={`bg-[#5DF7A4] rounded-[200px]  h-[100%] `}
          style={{ width: `${numberOfTicketsSold}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Rounds;

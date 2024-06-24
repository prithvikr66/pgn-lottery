import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import pigeon from "../../assets/images/pigeon1.svg";
import ticketsImage from "../../assets/images/tickets.png";
import { walletAddress } from "../../atoms/WalletAddress.ts";
import { useReadContract } from "wagmi";
import { lotteryABI } from "../../abi.ts";
import { roundNumberState } from "../../atoms/LotteryInfo.ts";
import { ethers } from "ethers";
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

const TicketCounter = () => {
  const [numberOfTicketsSelected, setNumberOfTicketsSelected] =
    useState<number>(0);
  const [ticketPrice, setTicketPrice] = useState<number>();
  const wallet = useRecoilValue(walletAddress);
  const roundNumber = useRecoilValue(roundNumberState);
  const { data: tickets } = useReadContract({
    abi: lotteryABI,
    address: "0x3FA72577519c2A8360bd478865Ed37EB5cE4a856",
    functionName: "allLotteries",
    args: [roundNumber],
  }) as { data: LotteryInfo | undefined };

  useEffect(() => {
    if (tickets) {
      const ticketPriceInEthers = tickets[0];
      console.log(ticketPriceInEthers);
      const convertedTicketPrice = ethers.utils.formatUnits(
        ticketPriceInEthers.toString(),
        "ether"
      );
      setTicketPrice(Number(convertedTicketPrice));
      console.log(convertedTicketPrice);
    }
  }, [roundNumber, tickets]);

  return (
    <div className=" w-[100%] mt-[-20px] uppercase ">
      <div className=" flex justify-end z-10 relative top-[70px]">
        <img src={pigeon} className="w-[70px] xl:w-[80px] h-auto" />
      </div>
      <div className=" ticket-counter w-full  bg-white  ">
        <p className=" text-[24px] text-[#3D3D3D] p-5">ticket counter</p>
        <img src={ticketsImage} className=" w-[70%] h-auto mx-auto mt-[20px]" />
        <div className=" w-[80%] mx-auto flex justify-between mt-[20px]">
          <button
            onClick={() => setNumberOfTicketsSelected(1)}
            className={` text-[24px] w-[17%]  p-[7px] rounded-[4px] border-[1px] ${
              numberOfTicketsSelected === 1
                ? "bg-[#3A80FE] text-[#ffffff]"
                : "bg-[#E4EEFF] text-[#3A80FE]"
            } border-[#3A80FE] `}
          >
            1
          </button>
          <button
            onClick={() => setNumberOfTicketsSelected(2)}
            className={` text-[24px] w-[17%]  p-[7px] rounded-[4px] border-[1px] ${
              numberOfTicketsSelected === 2
                ? "bg-[#3A80FE] text-[#ffffff]"
                : "bg-[#E4EEFF] text-[#3A80FE]"
            } border-[#3A80FE] `}
          >
            2
          </button>
          <button
            onClick={() => setNumberOfTicketsSelected(3)}
            className={` text-[24px] w-[17%]  p-[7px] rounded-[4px] border-[1px] ${
              numberOfTicketsSelected === 3
                ? "bg-[#3A80FE] text-[#ffffff]"
                : "bg-[#E4EEFF] text-[#3A80FE]"
            } border-[#3A80FE] `}
          >
            3
          </button>
          <button
            onClick={() => setNumberOfTicketsSelected(4)}
            className={` text-[24px] w-[17%]  p-[7px] rounded-[4px] border-[1px] ${
              numberOfTicketsSelected === 4
                ? "bg-[#3A80FE] text-[#ffffff]"
                : "bg-[#E4EEFF] text-[#3A80FE]"
            } border-[#3A80FE] `}
          >
            4
          </button>
          <button
            onClick={() => setNumberOfTicketsSelected(5)}
            className={` text-[24px] w-[17%]  p-[7px] rounded-[4px] border-[1px] ${
              numberOfTicketsSelected === 5
                ? "bg-[#3A80FE] text-[#ffffff]"
                : "bg-[#E4EEFF] text-[#3A80FE]"
            } border-[#3A80FE] `}
          >
            5
          </button>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[20px]" />
        <div className=" w-[80%] mx-auto flex items-center justify-between mt-[10px]">
          <p className=" text-[#3D3D3D] lg:text-[20px] xl:text-[24px]">Odds</p>
          <p className=" text-[24px] text-[#3A80FE]">
          {numberOfTicketsSelected  === 0 
              ? "-"
              : `${numberOfTicketsSelected * 10}%`}
          </p>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[10px]" />
        <div className=" w-[80%]  mx-auto flex items-center justify-between mt-[10px]">
          <p className=" text-[#3D3D3D] lg:text-[20px] xl:text-[24px]">cost</p>
          <p className=" text-[24px] text-[#3A80FE]">{numberOfTicketsSelected  === 0 
              ? "-"
              : ticketPrice && numberOfTicketsSelected * ticketPrice}</p>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[10px]" />
        <div className=" w-full flex justify-center">
          {wallet ? (
            <button className=" p-[10px] rounded-t-[8px] rounded-bl-[44px] rounded-br-[8px] text-[#ffffff] bg-[#3A80FE] w-[80%] mx-auto uppercase text-[24px] border  mt-[20px] shadow-xl shadow-[#CEDFFF]">
              let's go!
            </button>
          ) : (
            <button className=" p-[10px] rounded-t-[8px] rounded-bl-[44px] rounded-br-[8px] text-[#5DF7A4] bg-[#3D3D3D] w-[80%] mx-auto uppercase text-[24px] border  mt-[20px] shadow-xl shadow-[#CEDFFF]">
              connect wallet
            </button>
          )}
        </div>
        <p className=" text-center text-[#85B6FF] text-[20px] mt-[20px] pb-[20px]">
          Balance-
        </p>
      </div>
    </div>
  );
};
export default TicketCounter;

import { useEffect } from "react";
import Activity from "../components/Lottery/Activity";
import Navbar from "../components/Lottery/Navbar";
import Rounds from "../components/Lottery/Rounds";
import Socials from "../components/Lottery/Socials";
import TicketCounter from "../components/Lottery/TicketCounter";
import Tickets from "../components/Lottery/Tickets";
import { lotteryContract } from "../atoms/Contracts";
import { ethers } from "ethers";
import { lotteryABI } from "../abi";
import { useAccount } from "wagmi";
import { useSetRecoilState } from "recoil";

const ALCHEMY_API_KEY = "LAne9dVSCnApFpVmdslRX46IC3M7okT2";
// const RACE_CONTRACT_ADDRESS = "0x02a48148200d7fd2A021eb1541b59C7Aad004607";
const LOTTERY_CONTRACT_ADDRESS = "0x3FA72577519c2A8360bd478865Ed37EB5cE4a856";
// const LOTTERY_NFT_TICKET_CONTRACT_ADDRESS = "0x02a48148200d7fd2A021eb1541b59C7Aad004607";
const alchemyProvider = new ethers.providers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
);

const Lottery = () => {
  const { address } = useAccount();
  const setLotteryContract = useSetRecoilState(lotteryContract);
  useEffect(() => {
    if (address) {
      const signer = alchemyProvider.getSigner(address);
      const contractInstance = new ethers.Contract(
        LOTTERY_CONTRACT_ADDRESS,
        lotteryABI,
        signer
      );
      setLotteryContract(contractInstance);
    }
  }, []);
  return (
    // ------>Background Image <----------------
    <div className="relative bg-cover bg-cen min-h-screen blue-sky-bg ">
      {/* ----------->NavBar<---------- */}
      <div className=" w-[85%] xl:w-[80%] mx-auto font-darumadrop">
        <Navbar />
        <div className="flex justify-between mt-10">
          <div className=" w-[30%] xl:w-[28%] 2xl:w-[24%]">
            <TicketCounter />
            <Socials />
          </div>
          <div className=" w-[68%] xl:w-[70%] 2xl:w-[73%]  flex flex-col gap-5">
            <Rounds />
            <Tickets />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;

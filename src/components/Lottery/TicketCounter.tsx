// import { useState } from "react";
import pigeon from "../../assets/images/pigeon1.svg";
import tickets from "../../assets/images/tickets.png";
const TicketCounter = () => {
  // const [ticketNumberSelected, setTicketNumberSelected] = useState(null);
  return (
    <div className=" w-[100%] mt-[-20px] uppercase ">
      <div className=" flex justify-end z-10 relative top-[70px]">
        <img src={pigeon} className="w-[70px] xl:w-[80px] h-auto" />
      </div>
      <div className=" ticket-counter w-full  bg-white  ">
        <p className=" text-[24px] text-[#3D3D3D] p-5">ticket counter</p>
        <img src={tickets} className=" w-[70%] h-auto mx-auto mt-[20px]" />
        <div className=" w-[80%] mx-auto flex justify-between mt-[20px]">
          <button
            className={` text-[24px] w-[17%] text-[#3A80FE] p-[7px] rounded-[4px] border-[1px] bg-[#E4EEFF] border-[#3A80FE] `}
          >
            1
          </button>
          <button
            className={` text-[24px] w-[17%] text-[#3A80FE] p-[7px] rounded-[4px] border-[1px] bg-[#E4EEFF] border-[#3A80FE] `}
          >
            2
          </button>
          <button
            className={` text-[24px] w-[17%] text-[#3A80FE] p-[7px] rounded-[4px] border-[1px] bg-[#E4EEFF] border-[#3A80FE] `}
          >
            3
          </button>
          <button
            className={` text-[24px] w-[17%] text-[#3A80FE] p-[7px] rounded-[4px] border-[1px] bg-[#E4EEFF] border-[#3A80FE] `}
          >
            4
          </button>
          <button
            className={` text-[24px] w-[17%] text-[#3A80FE] p-[7px] rounded-[4px] border-[1px] bg-[#E4EEFF] border-[#3A80FE] `}
          >
            5
          </button>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[20px]" />
        <div className=" w-[80%] mx-auto flex items-center justify-between mt-[10px]">
          <p className=" text-[#3D3D3D] lg:text-[20px] xl:text-[24px]">Odds</p>
          <p className=" text-[24px] text-[#3A80FE]">-</p>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[10px]" />
        <div className=" w-[80%]  mx-auto flex items-center justify-between mt-[10px]">
          <p className=" text-[#3D3D3D] lg:text-[20px] xl:text-[24px]">cost</p>
          <p className=" text-[24px] text-[#3A80FE]">-</p>
        </div>
        <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-transparent mt-[10px]" />
        <div className=" w-full flex justify-center">
          <button className=" p-[10px] rounded-t-[8px] rounded-bl-[44px] rounded-br-[8px] text-[#5DF7A4] bg-[#3D3D3D] w-[80%] mx-auto uppercase text-[24px] border  mt-[20px] shadow-xl shadow-[#CEDFFF]">
            connect wallet
          </button>
        </div>
        <p className=" text-center text-[#85B6FF] text-[20px] mt-[20px] pb-[20px]">
          Balance-
        </p>
      </div>
    </div>
  );
};
export default TicketCounter;

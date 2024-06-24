// import uncagedBirdImage from "../../assets/images/uncaged-bird.svg";
import cagedBirdImage from "../../assets/images/caged-bird.svg";
import yourTicketsCardImage from "../../assets/images/ticket-card.svg";
import { TicketIcon } from "./Icons";
const Tickets = () => {
  const items = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    <div className=" w-[100%] h-auto bg-white rounded-[8px] ">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-0 p-[10px] xl:p-[20px] 2xl:p-[30px]">
        {items.map((item) => (
          <div
            key={item}
            className=" p-[5px] 2xl:p-[10px] flex items-center justify-center "
          >
            <img src={cagedBirdImage} />
          </div>
        ))}
      </div>

      <div>
        <div className="p-[30px] relative mt-[-30px]">
          <img src={yourTicketsCardImage} />
          <div  className=" flex items-center  p-[10px] absolute inset-0 left-[30px] gap-[10px]">
            <TicketIcon/>
            <p className=" text-[#3A80FE] uppercase text-[20px]">Your Tickets:<span className="text-[#3D3D3D]">{" "}3</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

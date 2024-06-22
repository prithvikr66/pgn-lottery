import Navbar from "../components/Lottery/Navbar";
import Rounds from "../components/Lottery/Rounds";
import Socials from "../components/Lottery/Socials";
import TicketCounter from "../components/Lottery/TicketCounter";
import Tickets from "../components/Lottery/Tickets";

const Lottery = () => {
  return (
    // ------>Background Image <----------------
    <div className="relative bg-cover bg-cen min-h-screen bg-main-bg ">
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
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;

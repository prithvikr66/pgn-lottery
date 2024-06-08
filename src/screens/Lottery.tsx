import Navbar from "../components/Lottery/Navbar";
import Rounds from "../components/Lottery/Rounds";
import TicketCounter from "../components/Lottery/TicketCounter";

const Lottery = () => {
  return (
    // ------>Background Image <----------------
    <div className="relative bg-cover bg-cen min-h-screen bg-main-bg ">
      {/* ----------->NavBar<---------- */}
      <div className=" w-4/5 mx-auto font-darumadrop">
        <Navbar />
        <div className="flex gap-5 mt-10">
          <TicketCounter />
          <div className=" w-full border">
            <Rounds/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;

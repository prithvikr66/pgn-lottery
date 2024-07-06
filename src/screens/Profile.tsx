import Navbar from "../components/Lottery/Navbar";
import pigeon from "../assets/images/race blue 1.svg";
import ProfileActivity from "../components/Profile/ProfileActivity";

const Profile = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen blue-sky-bg ">
      {/* ----------->NavBar<---------- */}
      <div className=" w-[85%] xl:w-[80%] mx-auto font-darumadrop uppercase">
        <Navbar />
        <div className=" w-full flex flex-col gap-[30px] mt-[70px]">
          <div className=" bg-white rounded-[16px] w-[70%] h-[100px] xl:h-[120px] flex items-center 2xl:h-[150px] relative">
            <img
              src={pigeon}
              className=" mt-[-30px] h-[150px] xl:h-[170px] 2xl:h-[200px] "
            />
            <div className=" flex items-center justify-around  w-full">
              <div>
                <p className=" text-[20px] xl:text-[24px] 2xl:text-[26px] text-[#3A80FE]">
                  Games
                </p>
                <p className=" text-[#3D3D3D] text-[28px] 2xl:text-[30px]">
                  120
                </p>
              </div>
              <div className=" h-[80px] xl:h-[100px] w-[5px] bg-[#C2DAF2] rounded-[20px]" />
              <div>
                <p className=" text-[20px] xl:text-[24px] 2xl:text-[26px] text-[#3A80FE]">
                  won
                </p>
                <p className=" text-[#3D3D3D] text-[28px] 2xl:text-[30px]">
                  86
                </p>
              </div>
              <div className=" h-[80px] xl:h-[100px] w-[5px] bg-[#C2DAF2] rounded-[20px]" />
              <div>
                <p className=" text-[20px] xl:text-[24px] 2xl:text-[26px] text-[#3A80FE]">
                  winnings
                </p>
                <p className=" text-[#3D3D3D] text-[28px] 2xl:text-[30px]">
                  25k $Pigeon <span className=" text-[#3A80FE]">($2500)</span>
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------ */}
          <ProfileActivity />
        </div>

        {/* <div className=" ticket-counter border">

      </div> */}
      </div>
    </div>
  );
};

export default Profile;

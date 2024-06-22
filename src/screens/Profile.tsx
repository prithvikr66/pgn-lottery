import Navbar from "../components/Lottery/Navbar";
import pigeon from "../assets/images/race blue 1.svg"

const Profile = () => {
  return (
    <div className="relative bg-cover bg-cen min-h-screen bg-main-bg ">
    {/* ----------->NavBar<---------- */}
    <div className=" w-[85%] xl:w-[80%] mx-auto font-darumadrop">
      <Navbar />

      <div>
        <div className=" bg-white rounded-[16px] w-[70%] h-[100px] xl:h-[120px]  2xl:h-[150px] relative">
          <img src={pigeon} className=" absolute top-[-28px]"/>
        </div>
      </div>

      <div className=" ticket-counter border">

      </div>
     
    </div>
  </div>
  )
}

export default Profile
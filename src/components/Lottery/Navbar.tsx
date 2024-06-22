import { Link } from "react-router-dom";
import { RainbowConnect } from "../RainbowConnect";

const NavCloud = ({
  name,
  width,
  height,
}: {
  name: string;
  width: string;
  height: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.775 25.546C153.126 36.5274 127.354 46.2691 109.804 54.4885C95.8097 61.043 79.1977 64.5893 61.5284 66.4088C43.2984 68.2861 22.5896 70.6453 9.71276 64.7956C-2.90251 59.0649 0.242217 48.3105 1.18205 38.9951C1.99601 30.9273 4.93659 22.9194 14.6348 16.01C25.0286 8.60487 38.8929 1.16079 55.5038 0.293449C71.5542 -0.544627 79.4931 8.28014 92.9415 11.9212C111.845 17.0392 144.355 14.3871 148.775 25.546Z"
        fill="white"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-[20px] fill-current text-[#3A80FE] uppercase font-darumadrop"
      >
        {name}
      </text>
    </svg>
  );
};

const Navbar = () => {
  return (
    <div className="flex uppercase justify-end text-[20px] text-zinc-50 z-10  ">
      <div className=" flex w-[60%] 2xl:w-[50%] justify-between items-center mt-10">
        <Link to={"/"}>
          <div className=" 2xl:block hidden">
            <NavCloud name="lottery" width="150" height="69" />
          </div>
          <div className=" 2xl:hidden">
            <NavCloud name="lottery" width="120" height="50" />
          </div>
        </Link>
        <Link to={"/how-to-play"}>
          <NavCloud name="how to play" width="150" height="69" />
        </Link>
        <Link to={"/get-pigeon"}>
          <NavCloud name="get $pigeon" width="150" height="69" />
        </Link>
        <RainbowConnect />
      </div>
    </div>
  );
};

export default Navbar;

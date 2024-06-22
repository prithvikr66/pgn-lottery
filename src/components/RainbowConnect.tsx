import { ConnectButton } from "@rainbow-me/rainbowkit";
import { walletAddress } from "../atoms/WalletAddress";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface RainbowConnectProps {
  currentPage: any;
  setCurrentPage: any;
}
export const RainbowConnect: React.FC<RainbowConnectProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useRecoilState(walletAddress);
  const handleProfileView = () => {
    setCurrentPage("PROFILE");
    navigate("/profile");
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        useEffect(() => {
          if (account?.address) {
            setWallet(account?.address);
          }
        }, [account?.address]);
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className={` ${
                      account?.address ? "bg-[#ffffff]" : "bg-[#3D3D3D]"
                    }  text-[#5DF7A4] p-4 rounded-[20px] `}
                    onClick={() => {
                      openConnectModal();
                    }}
                  >
                    <p className=" uppercase">connect wallet</p>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className={` ${
                      account?.address ? "bg-[#ffffff]" : "bg-[#3D3D3D]"
                    }  text-[#5DF7A4] p-4 rounded-[20px] `}
                    onClick={() => {
                      openConnectModal();
                    }}
                  >
                    <p className=" uppercase">connect wallet</p>
                  </button>
                );
              }
              return (
                <button
                  className={` ${
                    currentPage === "PROFILE" ? "bg-[#3D3D3D] text-white" : " bg-[#ffffff] text-[#5DF7A4]"
                  }   p-4 rounded-[20px] `}
                  onClick={handleProfileView}
                >
                  <div className=" flex items-center justify-center gap-2">
                    <div className=" rounded-full bg-[#5DF7A4] h-[10px] w-[10px]" />
                    <p className=" uppercase text-[#3A80FE]">
                      {wallet?.slice(0, 3)}...
                      {wallet?.slice(wallet?.length - 4, wallet?.length)}
                    </p>
                  </div>
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

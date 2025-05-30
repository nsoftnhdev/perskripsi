import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken, profileData, getProfileData } =
    useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
  };

  useEffect(() => {
  if (dToken && !aToken) {
    getProfileData();
  }
}, [dToken, aToken]);

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        {aToken && (
          <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
            Admin
          </p>
        )}

        {/* Show Doctor name if only dToken exists and profileData is loaded */}
        {!aToken && dToken && profileData?.name && (
          <p className="border px-2.5 py-0.5 rounded-full bg-sky-500 border-sky-500 text-white">
            Welcome: {profileData.name}
          </p>
        )}
      </div>
      <button
        onClick={logout}
        className="bg-sky-500 text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

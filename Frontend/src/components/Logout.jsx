import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("logged out successfully");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("error :", err.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

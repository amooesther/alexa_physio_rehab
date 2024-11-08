import React, { useState, useEffect } from "react";
import { auth } from "../Contexts/firebase"; // Firebase initialization
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
    },
    gender: "female",
  });
  const [isEdit, setIsEdit] = useState(false);

  // Fetch user data when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          name: user.displayName || "",
          email: user.email || "",
          phone: "", // Optionally, fetch phone number from your database
          address: { line1: "", line2: "" }, // Optionally, fetch address from your database
          gender: "female", // Default or fetch gender from your database
        });
      }
    });

    return unsubscribe;
  }, []);

  // Handle saving user data
  const handleSave = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: userData.name,
        });
        // Optionally, update other user data like phone, address, etc. in your database
      }
      setIsEdit(false); // Exit edit mode after saving
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-20 mb-40 bg-white rounded-lg shadow-lg">
      {/* Name Input */}
      {isEdit ? (
        <input
          className="w-full bg-green-50 text-2xl font-medium text-gray-700 py-2 px-3 rounded-md mt-4 border border-gray-300"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-2xl font-medium text-gray-700 mt-4">{userData.name}</p>
      )}

      <hr className="my-4 bg-secondary h-[2px] border-none" />

      {/* Contact Info */}
      <div className="mt-3 text-sm text-neutral-700">
        <p className="text-neutral-500 font-semibold underline mb-2">CONTACT INFO</p>

        {/* Email */}
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-600 w-1/3">Email Id:</p>
          {isEdit ? (
            <input
              className="w-2/3 bg-green-50 text-gray-700 py-2 px-3 rounded-md border border-gray-300"
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <p className="w-2/3">{userData.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-600 w-1/3">Phone:</p>
          {isEdit ? (
            <input
              className="w-2/3 bg-green-50 text-gray-700 py-2 px-3 rounded-md border border-gray-300"
              type="tel"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="w-2/3">{userData.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-600 w-1/3">Address:</p>
          <div className="w-2/3">
            {isEdit ? (
              <>
                <input
                  className="w-full bg-green-50 text-gray-700 py-2 px-3 rounded-md mb-2 border border-gray-300"
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  placeholder="Line 1"
                />
                <input
                  className="w-full bg-green-50 text-gray-700 py-2 px-3 rounded-md border border-gray-300"
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  placeholder="Line 2"
                />
              </>
            ) : (
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-600 w-1/3">Gender:</p>
          {isEdit ? (
            <select
              className="w-2/3 bg-green-50 text-gray-700 py-2 px-3 rounded-md border border-gray-300"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="w-2/3">{userData.gender}</p>
          )}
        </div>

        {/* Button */}
        <div className="mt-4">
          {isEdit ? (
            <button
              className="px-6 py-2 w-full bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
              onClick={handleSave}
            >
              Save Information
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-blue-500 w-full text-white font-medium rounded-md hover:bg-blue-600 transition"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          image: "",
          phone: "",
          address: "",
        };
  });

  // Save profile details
  useEffect(() => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white shadow-xl rounded-3xl p-10">

            <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
              👤 My Profile
            </h1>

            {/* PROFILE IMAGE */}

            <div className="flex flex-col items-center">

              <img
                src={
                  profile.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-purple-600"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="mt-4"
              />

            </div>

            {/* USER DETAILS */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {/* NAME */}

              <div>

                <label className="font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="w-full border rounded-lg p-3 mt-2 bg-gray-100"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full border rounded-lg p-3 mt-2 bg-gray-100"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="font-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-3 mt-2"
                />

              </div>

              {/* ADDRESS */}

              <div>

                <label className="font-semibold">
                  Address
                </label>

                <textarea
                  placeholder="Enter your address"
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      address: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-3 mt-2"
                  rows="3"
                />

              </div>

            </div>

            {/* STATUS */}

            <div className="mt-10 bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold">
              ✅ Profile details are saved automatically
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;
// import Navbar from "../components/Navbar";
// import { useAuth } from "../context/AuthContext";

// function Profile() {
//   const { user } = useAuth();

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-4xl mx-auto py-10 px-6">
//         <div className="bg-white shadow-xl rounded-2xl p-8">

//           <h1 className="text-4xl font-bold text-purple-700 mb-8">
//             👤 My Profile
//           </h1>

//           <div className="space-y-5">

//             <div>
//               <p className="text-gray-500">Name</p>
//               <h2 className="text-2xl font-semibold">
//                 {user?.name || "Guest"}
//               </h2>
//             </div>

//             <div>
//               <p className="text-gray-500">Email</p>
//               <h2 className="text-xl">
//                 {user?.email || "Not Available"}
//               </h2>
//             </div>

//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;


import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [profile, setProfile] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("profile")) || {
        image: "",
        name: "",
        email: "",
        phone: "",
        address: "",
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile({
        ...profile,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            👤 My Profile
          </h1>

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

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div>
              <label className="font-semibold">
                Full Name
              </label>

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Phone Number
              </label>

              <input
                type="text"
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

            <div>
              <label className="font-semibold">
                Address
              </label>

              <textarea
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

          <button
            className="w-full mt-10 bg-purple-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-purple-800 transition"
          >
            ✅ Profile Saved Automatically
          </button>

        </div>
      </div>
    </>
  );
}

export default Profile;
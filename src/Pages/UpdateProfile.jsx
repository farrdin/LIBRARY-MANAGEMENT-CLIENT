import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updatePassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import ReactiveButton from "reactive-button";

const UpdateProfile = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    user,
    name,
    setName,
    photoURL,
    setPhotoURL,
    newPassword,
    setNewPassword,
  } = useContext(AuthContext);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (newPassword) {
      if (newPassword.length < 6) {
        toast.error("You must enter 6 characters or more", {
          theme: "colored",
        });
        return;
      } else if (!/[A-Z]/.test(newPassword)) {
        toast.error("You must add one uppercase character", {
          theme: "colored",
        });
        return;
      } else if (!/[a-z]/.test(newPassword)) {
        toast.error("You must add one lowercase character", {
          theme: "colored",
        });
        return;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
        toast.error("You must add one special character", {
          theme: "colored",
        });
        return;
      }
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      if (newPassword) {
        await updatePassword(user, newPassword);

        Swal.fire({
          title: "Congratulations!",
          text: "Profile updated successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Congratulations!",
          text: "Profile updated successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-base-200 my-10 rounded-2xl p-8 ">
        <Helmet>
          <title>EstateVista | UpdateProfile</title>
        </Helmet>

        <div className="w-full md:flex">
          <div className="md:w-1/2 mb-5 flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl font-bold text-[#4F5CC1] text-center">
              Update Profile
            </h1>
            <img src={photoURL} className="rounded-full w-[200px] h-[200px]" />
          </div>
          <div className="w-full max-w-sm shadow-2xl bg-base-100 rounded-2xl mx-auto md:mx-0">
            <form onSubmit={handleSaveChanges} className="card-body">
              <div className="form-control">
                <label htmlFor="name">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Update  Your Name"
                  className="input input-bordered"
                />
                <label htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  disabled
                  type="email"
                  id="email"
                  value={user.email.replace(/(?<=.{1}).*(?=@)/, "******")}
                  className="input input-bordered"
                />
                <label htmlFor="photoURL">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Update Your Photo"
                  className="input input-bordered"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  required
                />
              </div>
              <div className="form-control relative">
                <label htmlFor="newPassword">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Update Password"
                  className="input input-bordered"
                />
                <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPass(!showPass)}
                >
                  {!showPass ? (
                    <FaEye className="text-xl"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-xl"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <ReactiveButton
                  style={{
                    borderRadius: "5px",
                  }}
                  shadow
                  size="large"
                  type={"submit"}
                  idleText="Save Changes"
                />
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

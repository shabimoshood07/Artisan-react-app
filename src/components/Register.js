import React, { useState } from "react";
import states from "../Data";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
// const [address, setAddress] = useState("");
// const handleSelect = async (value) => {
//   const results = await geocodeByAddress(value);
//   const latLng = await getLatLng(results[0]);
//   setAddress(value);
// };

function Register() {
  const [checking, setChecking] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otherPhoneNumber, setOtherPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInputState, setFileInputState] = useState("");
  const [file, setFile] = useState("");

  const handleFileInputChange = (e) => {
    setFile(e.target.value);
    setSelectedFile(e.target.files[0]);
  };

  // const config = {
  //   headers: { "content-type": "multipart/form-data" },
  // };

  const handleSubmit = async (e) => {
    setChecking(true);
    console.log(
      name,
      email,
      username,
      phoneNumber,
      gender,
      otherPhoneNumber,
      selectedFile
    );
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("address", address);
      formData.append("profession", profession);
      formData.append("password", password);
      formData.append("gender", gender);
      formData.append("phoneNumber.work", phoneNumber);
      formData.append("phoneNumber.home", otherPhoneNumber);
      formData.append("profileImage", selectedFile);

      e.preventDefault();

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        formData
        // config
      );
      console.log(data);
      setChecking(false);
    } catch (err) {
      console.log(err.response.data.msg);
      setChecking(false);
    }
  };

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="reg-title">Registration</div>

        {/* FORM */}
        <form className="registration-form" encType="multipart/form-data">
          <div className="user-details">
            {/* FULL NAME */}
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter name here"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            {/* COMPANY NAME */}
            <div className="input-box">
              <span className="details">Company Name</span>
              <input
                type="text"
                placeholder="Company name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            {/* PHONE NUMBER WORK */}
            <div className="input-box">
              <span className="details">Phone Number(work)</span>
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>

            {/* PHONE NUMBER OTHER */}
            <div className="input-box">
              <span className="details">Phone Number(optional)</span>
              <input
                type="text"
                placeholder="Phone Number"
                value={otherPhoneNumber}
                onChange={(e) => setOtherPhoneNumber(e.target.value)}
              ></input>
            </div>

            {/* EMAIL*/}
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                placeholder="Enter your email "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            {/* ADDRESS*/}
            <div className="input-box">
              <span className="details">Address</span>
              <input
                type="text"
                placeholder="Enter your address "
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>

            {/* PROFESSION*/}
            <div className="input-box">
              <span className="details">Profession</span>
              <input
                type="text"
                placeholder="profession"
                required
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              ></input>
            </div>

            {/* PASSOWRD*/}
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            {/* CONFIRM PASSOWRD*/}
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>

            {/* GENDER*/}
            <div className="input-box">
              <span className="details">gender</span>
              <select
                name="gender"
                id=""
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Facebook</span>
              <input type="text" placeholder="facebook url"></input>
            </div>
            <div className="input-box">
              <span className="details">Twitter</span>
              <input type="text" placeholder="twitter url"></input>
            </div>
            <div className="input-box">
              <span className="details">Instagram</span>
              <input type="text" placeholder="instagram url"></input>
            </div>

            {/* IMAGE */}
            <div className="input-box">
              <span className="details">Profile picture</span>
              <input
                type="file"
                placeholder="select profile picture"
                value={file}
                // onChange={(e) => setFile(e.target.value)}
                onChange={handleFileInputChange}
              ></input>
            </div>
          </div>

          <button type="submit" className="button" onClick={handleSubmit}>
            {checking ? "checking...." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

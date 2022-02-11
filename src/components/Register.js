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

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleFileInputChange = (e) => {
    // const reader = new FileReader();
    // const file = e.target.files[0];
    // reader.readAsDataURL(file);
    // console.log(file);
    // console.log(reader);
    // setSelectedFile(reader.result);
    // setFileInputState(file);
    setFile(e.target.value);
    // console.log(e.target.files[0]);
    // console.log(e.target.files[0].path);
    setSelectedFile(e.target.file);
  };

  // const handleSubmit = async (e) => {
  //   let formData = new FormData(); //formdata object
  //   console.log(
  //     name,
  //     email,
  //     username,
  //     phoneNumber,
  //     gender,
  //     otherPhoneNumber,
  //     selectedFile
  //   );
  //   try {
  //     formData.append("name", { name });
  //     formData.append("email", { email });
  //     formData.append("username", { username });
  //     formData.append("address", { address });
  //     formData.append("profession", { profession });
  //     formData.append("password", { password });
  //     formData.append("gender", { gender });
  //     formData.append("phoneNumber", {
  //       work: phoneNumber,
  //       home: otherPhoneNumber,
  //     });
  //     formData.append("profileImage", { selectedFile });

  //     e.preventDefault();
  //     console.log(formData);

  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/v1/auth/signup",
  //       formData,
  //       config
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      name,
      username,
      phoneNumber,
      gender,
      otherPhoneNumber,
      selectedFile
    );
    try {
      const user = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        {
          name: name,
          username: username,
          phoneNumber: { work: phoneNumber, home: otherPhoneNumber },
          address: address,
          email: email,
          profession: profession,
          password: password,
          gender: gender,
          file: selectedFile,
        }
      );

      console.log(user);
    } catch (error) {
      console.log(error);
    }
    console.log("submit");
  };

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="reg-title">Registration</div>

        {/* FORM */}
        <form className="registration-form">
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

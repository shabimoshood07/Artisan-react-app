import React, { useState } from "react";
import Register from "../components/Register";
import RegUser from "../components/RegUser";
function Signup() {
  const [regUser, setRegUser] = useState(false);
  const [regArtisan, setRegArtisan] = useState(true);

  const setSwitchToArtisan = () => {
    setRegArtisan(true);
    setRegUser(false);
  };
  const setSwitchToUser = () => {
    setRegArtisan(false);
    setRegUser(true);
  };
  return (
    <>
      <div className="signup-option-btn-container">
        {regArtisan ? (
          <button className="signup-btn" onClick={setSwitchToUser}>
            Signup as User
          </button>
        ) : (
          <button className="signup-btn" onClick={setSwitchToArtisan}>
            Signup as Artisan
          </button>
        )}
      </div>
      <div>{regArtisan ? <Register /> : <RegUser />}</div>
    </>
  );
}

export default Signup;

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(
//     name,
//     username,
//     phoneNumber,
//     gender,
//     otherPhoneNumber,
//     selectedFile
//   );
//   try {
//     const user = await axios.post(
//       "http://localhost:5000/api/v1/auth/signup",
//       {
//         name: name,
//         username: username,
//         phoneNumber: { work: phoneNumber, home: otherPhoneNumber },
//         address: address,
//         email: email,
//         profession: profession,
//         password: password,
//         gender: gender,
//         file: selectedFile,
//       }
//     );

//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("submit");
// };

{
  /* SELECT OPTION */
}
{
  /* <div className="user-options">
            <div className="input-options">
              LOCATION
              <label>--Select your State--</label>

              <div>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({ placeholder: "Type address" })}
                      />

                      <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active
                              ? "#41b6e6"
                              : "#fff",
                          };

                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, { style })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>

              <select>
                {states.map((eachstate) => {
                  const { id, stateName, statevalue } = eachstate;
                  return (
                    <option key={id} value={statevalue}>
                      {stateName}
                    </option>
                  );
                })}
              </select>
              <label>--Profession--</label>
              <select>
                <option value="Choose Options">Choose Options</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Painter">Painter</option>
                <option value="Vulcanizer">Vulcanizer</option>
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="House keeping">House Keeping</option>
                <option value="Chef">Chef</option>
                <option value="Dry Cleaner">Dry Cleaner</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Bricklayer">Bricklayer</option>
              </select>
            </div>
          </div> */
}
{
  /* <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
            </div>
          </div> */
}

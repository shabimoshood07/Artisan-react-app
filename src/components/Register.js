import React from "react";
import states from "../Data";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function Register() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="reg-title">Registration</div>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input type="text" placeholder="Enter name here" required></input>
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                placeholder="Create new Username"
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email "
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input
                type="text"
                placeholder="Enter your address "
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Phone Number" required></input>
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter password" required></input>
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm password"
                required
              ></input>
            </div>
          </div>

          {/* SELECT OPTION */}
          <div className="user-options">
            <div className="input-options">
              {/* LOCATION */}
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
              {/* <select>
                {states.map((eachstate) => {
                  const { id, stateName, statevalue } = eachstate;
                  return (
                    <option key={id} value={statevalue}>
                      {stateName}
                    </option>
                  );
                })}
              </select> */}
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
          </div>
          <div className="gender-details">
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
          </div>
          <div className="button">
            <input type="submit" value="Register"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React from "react";

function Register() {
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
          <div className="user-options">
            <div className="input-options">
              <label>--Select your State--</label>
              <select>
                <option value="Choose here">Choose here</option>
                <option value="Abia State">Abia State</option>
                <option value="Adamawa State">Adamawa State</option>
                <option value="Akwa Ibom State">Akwa Ibom State</option>
                <option value="Anambra State">Anambra State</option>
                <option value="Bauchi State">Bauchi State</option>
                <option value="Bayelsa State">Bayelsea State</option>
                <option value="Benue State">Benue State</option>
                <option value="Borno State">Borno State</option>
                <option value="Cross River State">Cross River State</option>
                <option value="Delta State">Delta State</option>
                <option value="Ebonyi State">Ebonyi State</option>
                <option value="Edo State">Edo State</option>
                <option value="Ekiti State">Ekiti State</option>
                <option value="Enugu State">Enugu State</option>
                <option value="Gombe State">Gombe State</option>
                <option value="Imo State">Imo State</option>
                <option value="Jigawa State">Jigawa State</option>
                <option value="Kaduna State">Kaduna State</option>
                <option value="Kano State">Kano State</option>
                <option value="Katsina State">Katsina State</option>
                <option value="Kebbi State">Kebbi State</option>
                <option value="Kogi State">Kogi State</option>
                <option value="Kwara State">Kwara State</option>
                <option value="Lagos State">Lagos State</option>
                <option value="Nasarawa State">Nasarawa State</option>
                <option value="Niger State">Niger State</option>
                <option value="Ogun State">Ogun State</option>
                <option value="Ondo State">Ondo State</option>
                <option value="Osun State">Osun State</option>
                <option value="Oyo State">Oyo State</option>
                <option value="Plateau State">Plateau State</option>
                <option value="Rivers State">Rivers State</option>
                <option value="Sokoto State">Sokoto State</option>
                <option value="Taraba State">Taraba State</option>
                <option value="Yobe State">Yobe State</option>
                <option value="Zamfara State">Zamfara State</option>
                <option value="FCT Abuja">FCT Abuja</option>
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
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label for="dot-2">
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

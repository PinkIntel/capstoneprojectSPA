import html from "html-literal";

export default () => html`
  <div id="main content">
    <div class="booksession-image">
      <!-- <img src="../images/nathan-dumlao-bhPJ7-AdgFE-unsplash.jpeg" alt="image of a woman holding a baby, standing in a field of tall grass and trees, and mountains in the background"> -->
    </div>
    <div class="pageheader">
      <h2>BOOK AN APPOINTMENT</h2>
    </div>
    <div class="main">
      <h1>Ready to book your session?</h1>
      <h4>
        Fill out the booking form below, and we'll be in contact with you soon!
      </h4>
    </div>

    <div id="session-form">
      <div id="form-elements">
        <form id="form" method="POST" form action="">
          <h2>Client Information</h2>
          <div>
            <label for="name">Full Name:</label>
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>

          <div>
            <label for="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="000-000-0000"
            />
          </div>

          <div>
            <label for="name">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Street Address"
            />
          </div>

          <div>
            <label for="name">City:</label>
            <input type="text" name="city" id="city" placeholder="City" />
          </div>

          <div>
            <label for="State">State/Province:</label>
            <select name="state" id="state">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div>
            <label for="name">Postal/Zip Code:</label>
            <input type="text" name="zipcode" id="zip" placeholder="00000" />
          </div>

          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="janedoe@email.com"
            />
          </div>

          <hr />

          <h2>Session Information</h2>

          <div>
            <label for="sessiontype">Type of Session:</label>
            <select name="sessiontype" id="sessiontype">
              <option value="individual">Individual</option>
              <option value="couples">Couples</option>
              <option value="Baby/Maternity">Baby/Maternity</option>
              <option value="Senior">Senior</option>
              <option value="Wedding">Wedding</option>
              <option value="Group">Group</option>
              <option value="business">Business</option>
              <option value="email">Other/Not Listed</option>
            </select>
          </div>

          <div>
            <label for="Date">Desired Session Date:</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2021-01-01"
              min="2021-01-01"
              max="2024-12-31"
            />
          </div>

          <div>
            <label for="Session Time">Start Time:</label>
            <input type="time" id="time" name="starttime" />
          </div>

          <div>
            <label for="Session Time">End Time:</label>
            <input type="time" id="time" name="endtime" />
          </div>

          <div>
            <label for="numberofpeople">Number of People:</label>
            <input type="text" name="people" id="numberofpeople" size="10" />
          </div>

          <div>
            <label for="Theme">Theme:</label>
            <input
              type="text"
              name="theme"
              id="theme"
              placeholder="X-Mas, Romantic, Hawaiian, Moody, etc."
              size="40"
            />
          </div>
          <div>
            <label for="package">Desired Package:</label>
            <select name="package" id="package">
              <option value="basic">Basic Package</option>
              <option value="standard">Standard Package</option>
              <option value="Premium">Premium Package</option>
              <option value="Platinum">Platinum Package</option>
              <option value="Wedding">Wedding Package</option>
              <option value="Custom">Custom Package</option>
            </select>
          </div>
          <div>
            <label for="addon">Add Ons:</label>
            <select name="addons" id="addons">
              <option value="None">None</option>
              <option value="hair and makeup">Hair and Makeup</option>
              <option value="couples">Videography</option>
              <option value="blemishremoval">Blemish Removal</option>
            </select>
          </div>

          <div>
            <label for="msg">Additional Details/Special Wishes:</label>
            <br />

            <textarea name="details" id="msg" cols="50" rows="10"></textarea>
          </div>
          <input type="hidden" name="customer" id="customer" value="Michael" />
          <input type="submit" name="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  </div>

  <hr />
`;

// <!-- <form action="https://formspree.io/f/xzbobrng" method="POST"> -->

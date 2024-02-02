import { useState, useEffect } from "react";
import axios from "axios";
import DisplaySellers from "./DisplaySellers";

function Sellers(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sellers, setSellers] = useState([]);
  //this is the form that allows you to create a buyer
  
  function getSellers () {
    axios.get("http://localhost:8082/sellers/get")
      .then((response) => {setSellers(response.data)})
  }
  useEffect(getSellers, [])



  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:8082/sellers/create", {
              firstName,
              lastName,
              address,
              postcode,
              phoneNumber
            })
            .then((response) => {
              setFirstName("");
              setLastName("");
              setAddress("");
              setPostcode("");
              setPhoneNumber("");
              getSellers();
              
            })
            .catch((err) => console.error(err));
        }}
      >
        {" "}
        <h1>Sellers &nbsp;</h1>
        <label htmlFor="fn">First Name &nbsp;</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="fn"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ln">Last Name &nbsp;</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="ln"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ad">Address &nbsp; &nbsp; &nbsp;</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="ad"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="pc">Postcode &nbsp;&nbsp;&nbsp;</label>
        <input
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          id="pc"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="pn">Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="pn"
          type="tel"
          className="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
        <br />
      </form>
      <br />
      <br />
      <div>
        <DisplaySellers sellers={sellers}/>
      </div>
    </div>
  );
}

export default Sellers;

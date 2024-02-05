import { useState, useEffect } from "react";
import axios from "axios";
import DisplayBuyers from "./DisplayBuyers";

function Buyers(props) {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buyers, setBuyers] = useState([]);

//this is the form that allows you to create a buyer

function getBuyers () {
    axios.get("http://localhost:8082/Buyers/get")
      .then((response) => {setBuyers(response.data)})
  }
  useEffect(getBuyers, [])


  function CheckBuyer() {



    axios.get("http://localhost:8082/Buyers/get").then(response => {
        console.log(response)
        for (const buyers of response.data) {
            if (buyers.firstName.toLowerCase() === firstName.toLowerCase() && buyers.lastName.toLowerCase() === lastName.toLowerCase()) {
                     alert("Buyer already exists")
                     return;
            }
        }
    
        axios.post("http://localhost:8082/Buyers/create",
            { firstName,
              lastName,
              address,
              postcode,
              phoneNumber
            })
            .then(response => {
                console.log(response);
                setFirstName("");
                setLastName("");
                setAddress("");
                setPostcode("");
                setPhoneNumber("");
                getBuyers();
            }).catch(err => console.error(err))


    })

}


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CheckBuyer();
        }}>
        
        {/* this is the input form on the buyers page  */}
        {" "}
        <h1>Buyers &nbsp;</h1>
        <label htmlFor="fn">First Name &nbsp;</label>
        <input
          value={firstName}
          br
          onChange={(e) => setFirstName(e.target.value)}
          id="fn"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="ln">Last Name &nbsp;</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="ln"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="ad">Address &nbsp; &nbsp; &nbsp;</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="ad"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="pc">Postcode &nbsp;&nbsp;&nbsp;</label>
        <input
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          id="pc"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="pn">Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="pn"
          type="tel"
          class="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
        <br />
      </form>
      <br />
      <br />
      <DisplayBuyers buyers={buyers}  getBuyers={getBuyers}/> 
      {/* this is the render of the buyers page at the bottom */}
    </div>
  );
}

export default Buyers;

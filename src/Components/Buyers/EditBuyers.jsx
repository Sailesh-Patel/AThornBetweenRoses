import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBuyers() {
    const navigate = useNavigate();
    const params = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
   
    useEffect(() => {
        axios.get("http://localhost:8082/Buyers/get")
        .then((res) => {
            console.log(res);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setAddress(res.data.address);
            setPostcode(res.data.postcode);
            setPhoneNumber(res.data.phoneNumber);
        }).catch(err => console.error(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
        .put("http://localhost:8082/Buyers/edit/" + params.id, {
            firstName,
            lastName,
            address,
            postcode,
            phoneNumber
    })
    .then(() => {
      navigate("/Buyers");
    })
    .catch((error) => console.error(error));
};

    return ( 
        <div>
      <form onSubmit={handleSubmit}>
          
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
        {/* this is the render of the buyers page at the bottom */}
      </div>


     );
}

export default EditBuyers;
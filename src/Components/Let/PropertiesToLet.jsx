import { useState, useEffect } from "react";
import axios from "axios";
import DisplayLets from "./DisplayLets";

function PropertiesToLet() {
  const [type, setType] = useState("");
  const [rent, setRent] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garden, setGarden] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [lets, setLets] = useState([]);

  function getLets() {
    axios.get("http://localhost:8082/PLet/get").then((response) => {
      setLets(response.data);
    });
  }
  useEffect(getLets, []);

  return (
    <div className="row">
      <div className="col">
        <form
          className="drop-menu"
          onSubmit={(e) => {
            e.preventDefault();
            // runsa post request to the json server
            axios
              .post("http://localhost:8082/PLet/create", {
                type,
                rent: parseInt(rent),
                bedrooms: parseInt(bedrooms),
                bathrooms: parseInt(bathrooms),
                garden,
                address,
                postcode,
              })

              .then((response) => {
                setType("");
                setRent("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");
                setAddress("");
                setPostcode("");
                getLets();
              })
              .catch((err) => console.error(err));
          }}
        >
          <h1>Properties To Let </h1>
          <label htmlFor="ty">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            id="ty"
            type="text"
            className="form-control"
          >
            <option value="Select Type" selectDefault>
              Select Type
            </option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Detached">Detached</option>
            <option value="Terrace">Terrace</option>
            <option value="Flat">Flat</option>
          </select>

          <label htmlFor="pr">Rent £</label>
          <input
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            id="pr"
            type="£"
            className="form-control"
          ></input>
          <label htmlFor="bd">Bedroom</label>
          <input
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            id="bd"
            type="number"
            min={0}
            className="form-control"
          ></input>
          <label htmlFor="bt">Bathroom</label>
          <input
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            id="bt"
            type="number"
            min={0}
            className="form-control"
          ></input>

          <label htmlFor="gn">Garden</label>
          <select
            value={garden}
            onChange={(e) => setGarden(e.target.value)}
            id="gn"
            type="text"
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label htmlFor="ad">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="ad"
            type="text"
            className="form-control"
          ></input>
          <label htmlFor="pc">Postcode</label>
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            id="pc"
            type="text"
            className="form-control"
          ></input>
          <br />
          <div>
            <button type="submit" className="btn btn-success btn-md">
              {" "}
              Add Property{" "}
            </button>
          </div>
        </form>
        <br />
        <br />
      </div>

      {/* this is the property display */}
      <DisplayLets lets={lets} />

      <br />
    </div>
  );
}

export default PropertiesToLet;

import { useState, useEffect } from "react";
import axios from "axios";
import DisplaySales from "./DisplaySales";

function PropertiesForSale() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garden, setGarden] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [sales, setSales] = useState([]);

  function getSales() {
    axios.get("http://localhost:8082/PSale/get").then((response) => {
      setSales(response.data);
    });
  }
  useEffect(getSales, []);

  return (
    <div className="row">
      <div className="col">
        <form
          className="drop-menu"
          accordion
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8082/PSale/create", {
                type,
                price: parseInt(price),
                bedrooms: parseInt(bedrooms),
                bathrooms: parseInt(bathrooms),
                garden,
                address,
                postcode,
              })
              .then((response) => {
                setType("");
                setPrice("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");
                setAddress("");
                setPostcode("");
                getSales();
              })
              .catch((err) => console.error(err));
          }}
        >
          <h1>Properties For Sale</h1>
          {/* <select value={Type} onChange={(e) => setType(e.target.value)} id="ty" type="text"><option value="semi">Semi</option><option value="semi">detached</option><option value="semi">terrace</option></select> */}
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
          <label htmlFor="pr">Price £</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="pr"
            type="£"
            className="form-control"
          ></input>{" "}
          <label htmlFor="bd">Bedroom</label>
          <input
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            id="bd"
            type="number"
            min={0}
            className="form-control"
          ></input>{" "}
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
          ></input>{" "}
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

      <DisplaySales sales={sales} />

      <br />
    </div>
  );
}

export default PropertiesForSale;

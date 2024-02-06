import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPropertyToLet() {
  const navigate = useNavigate();
  const params = useParams();
  const [type, setType] = useState("");
  const [rent, setRent] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garden, setGarden] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8082/PLet/get/" + params.id)
      .then((res) => {
        console.log(res);
        setType(res.data.type);
        setRent(res.data.rent);
        setBedrooms(res.data.bedrooms);
        setBathrooms(res.data.bathrooms);
        setGarden(res.data.garden);
        setAddress(res.data.address);
        setPostcode(res.data.postcode);
        setPropertyStatus(res.data.propertyStatus);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8082/PLet/edit/" + params.id, {
        type,
        rent,
        bedrooms,
        bathrooms,
        garden,
        address,
        postcode,
        propertyStatus
      })
      .then(() => {
        navigate("/PropertiesToLet");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Edit Property </h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="pstatus">Property Status</label>
          <select
            value={propertyStatus}
            onChange={(e) => setPropertyStatus(e.target.value)}
            id="pstatus"
            type="text"
            className="form-control"
          >
            <option value="To Let">To Let</option>
            <option value="Under Offer">Under Offer</option>
            <option value="Withdrawn">Withdrawn</option>
          </select>
        <br />
        <div>
          <button type="submit" className="btn btn-success btn-md">
            {" "}
            Update{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditPropertyToLet;

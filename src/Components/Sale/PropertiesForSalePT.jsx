import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import RS from "./RS.png";
import confetti from "canvas-confetti";

//this is the render of the card for the properties 

function PropertiesForSalePT(props) {
  const navigate = useNavigate();
  const handleConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 320,
    });
  };

  const handleBookings = () =>{
    navigate("/PropertiesForSale/BookingSale/" + props.id)

} 

  function buttonDisplay() {
    
    if(props.propertyStatus !== "For Sale") {
        return (
          <>
            <button style={{marginLeft: "10px"}} className='btn btn-success' disabled="disabled">Book a viewing</button>
          </>
        )
      } else {
        return (
            <>
            <button style={{marginLeft: "10px"}} className='btn btn-success ' onClick={handleBookings}>Book a viewing</button>
            </>
        )
      }
    }





  return (
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title"></h4>{" "}
          <label htmlFor="pr">
            <h5>Premium Listing &nbsp;</h5>
          </label>
          <input id="pl" type="checkbox"></input>
          <br></br>
          <br></br>
          <img
            src={RS}
            alt="RS"
            width="100%"
            height="15%"
            className="d-inline-block align-text-middle"
          />
          <br />
          <br />
          <p>{"Price: £" + props.price} </p>
          <p> {"Type: " + props.type}</p>
          <p> {"Bedrooms: " + props.bedrooms}</p>
          <p> {"Bathrooms: " + props.bathrooms}</p>
          <p> {"Garden: " + props.garden}</p>
          <p> {"Address: " + props.address}</p>
          <p> {"Postcode: " + props.postcode}</p>
          <p> {"Property Status: " + props.propertyStatus}</p>
          {/* <select>
            <option>For Sale</option>
            <option>Under Offer</option>
            <option>Withdrawn</option>
          </select> */}
          &nbsp;
          {buttonDisplay()}
          {/* <button style={{marginTop: "10px"}}
            onClick={() =>
              navigate("/PropertiesForSale/BookingSale/" + props.id)
            }
            type="submit"
            className="btn btn-success btn-md"
          >
            {" "}
            Book a viewing{" "}
          </button> */}
          <button onClick={() =>
              navigate("/PropertiesForSale/Edit/" + props.id)
            }style={{ marginRight: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Edit Property{" "}
            </button>  
        </div>
      </div>
      <button className="btn btn-danger btn-md" onClick={handleConfetti}>
        SOLD
      </button>
    </Card>
  );
}

PropertiesForSalePT.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  garden: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  propertyStatus: PropTypes.string.isRequired
};
export default PropertiesForSalePT;

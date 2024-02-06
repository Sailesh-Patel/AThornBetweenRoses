import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// this is a render on the buyers page and how this is rendered

function BuyersPT(props) {
  const navigate = useNavigate();
  
  function deleteBuyer (){
    axios.delete("http://localhost:8082/Buyers/delete/" + props.id)
    .then(response => {props.getBuyers()})
    .catch(err => console.error(err))
    }


  return (
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title">
            {" "}
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              alt="avatar"
              className="card-person"
            />
            {props.firstName} {props.lastName}
          </h4>
          <p>{props.address}</p>
          <p>{props.postcode}</p>
          <p>{props.phoneNumber}</p>
          <button onClick={() =>
              navigate("/Buyers/Edit/" + props.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Edit Buyer{" "}
            </button>
          <button style={{marginTop: "10px"}} className="btn btn-danger" onClick={deleteBuyer}>Delete Buyer</button>
        </div>
      </div>
    </Card>
  );
}
BuyersPT.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
};

export default BuyersPT;

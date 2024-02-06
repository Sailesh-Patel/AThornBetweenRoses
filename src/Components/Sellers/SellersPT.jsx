import PropTypes from 'prop-types'
import Sellers from './Sellers';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SellersPT(props) {
  const navigate = useNavigate();

  function deleteSeller (){
    axios.delete("http://localhost:8082/Sellers/delete/" + props.id)
    .then(response => {props.getSellers()})
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
              navigate("/Sellers/Edit/" + props.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Edit Seller{" "}
            </button>
          <button style={{marginTop: "10px"}} className="btn btn-danger" onClick={deleteSeller}>Delete Seller</button>
        </div>
      </div>
    </Card>
  );
       
}
SellersPT.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,

}


export default SellersPT;
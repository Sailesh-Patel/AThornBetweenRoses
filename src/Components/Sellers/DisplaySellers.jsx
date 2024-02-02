import { useEffect, useState } from "react";
import SellersPT from "./SellersPT";
import axios from "axios";

function DisplaySellers(props) {
  // const [sellers, setSellers] = useState([]);
  // useEffect(function () {
  //   axios
  //     .get("http://localhost:8082/sellers/get")
  //     .then((response) => {
  //       console.log("Response:", response);
  //       setSellers(response.data);
  //       console.log("Sellers:", sellers);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const sellerArray = [];
  for (const seller of props.sellers) {
    sellerArray.push(
      <SellersPT
        key={seller.firstName + " " + seller.postcode}
        id={seller.id}
        firstName={seller.firstName}
        lastName={seller.lastName}
        address={seller.address}
        postcode={seller.postcode}
        phoneNumber={seller.phoneNumber}
        getSellers={props.getSellers}
      />
    );
  }

  return (
    <div>
      <h2> A list of sellers </h2>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">{sellerArray}</div>
    </div>
    </div>
  );
}

export default DisplaySellers;

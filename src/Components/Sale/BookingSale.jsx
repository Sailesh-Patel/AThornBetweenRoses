import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { row, col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";


function BookingSale() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [booking, setBookings] = useState([]);
  const [property, setProperty] = useState();


  function getBSales(){
    axios.get("http://localhost:8082/PSale/get/" + params.id)
      .then((response) => {
        console.log("Response:", response);
        setProperty(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err))}
      useEffect(getBSales, [])
  console.log(property)



  function CheckBooking() {
    axios.get("http://localhost:8082/BSale/get").then(response => {
        console.log(response)
        for (const booking of response.data) {
            if (booking.date === date && booking.timeSlot === timeSlot) {
                     alert("Booking not available")
                     return;
            }
        }
    
        axios.post("http://localhost:8082/BSale/create",
            { 
              name,
              email,
              phoneNumber,
              date,
              timeSlot,
              propertiesForSale: { id: params.id }
            })
            .then(response => {
                console.log(response);
                setName("");
                setEmail("");
                setPhoneNumber("");
                setDate("");
                setTimeSlot("");
                getBSales();
            }).catch(err => console.error(err))


    })

}


  return (
    <div className="booking-container">
      <div className="booking-form">

        <h1>Bookings for Sale</h1>
        <div class="row" style={{maxWidth:"1000px"}}>
          <div class="col">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submission successful")
                CheckBooking();
              }}>
            
              <label htmlFor="fn">Full Name &nbsp;</label>
              <input
                value={name}
                br
                onChange={(e) => setName(e.target.value)}
                id="fn"
                type="text"
                className="form-control"
              ></input>
              <label htmlFor="ln">Email &nbsp;</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="ln"
                type="email"
                className="form-control"
              ></input>
              <label htmlFor="ad">Phone Number &nbsp; &nbsp; &nbsp;</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="ad"
                type="tel"
                className="form-control"
              ></input>
              <label htmlFor="pc">Date &nbsp;&nbsp;&nbsp;</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="pc"
                type="date"
                className="form-control"
              ></input>
              <label htmlFor="pn">Time Slot</label>


              <select onChange={(e) => setTimeSlot(e.target.value)} value={timeSlot} className="form-control" required>
                <option value="">Select Time</option>
                <option value="8AM">8:00-9:00</option>
                <option value="9AM">9:00-10:00</option>
                <option value="10AM">10:00-11:00</option>
                <option value="11AM">11:00-12:00</option>
                <option value="12PM">12:00-13:00</option>
                <option value="1PM">13:00-14:00</option>
                <option value="2PM">14:00-15:00</option>
                <option value="3PM">15:00-16:00</option>
                <option value="4PM">16:00-17:00</option>
            </select>


              <br />
              <button type="submit" className="btn btn-success btn-md">
                Submit
              </button>
            </form>
            <br />
          </div>
          <div class="col">
            {property ? (

                <Card style={{marginTop:"0px"}}>
                  <div className="flex">
                    <div className="card-body card-text">
                      <div className="card-title">
                        <img src="/static/media/RS.653e1e0e2ee563edf8fa.png" alt="RS" width="100%" height="15%" className="d-inline-block align-text-middle" />
                        <Card.Title>{property.type}</Card.Title>
                        <Card.Text>
                          Price: {property.price}<br />
                          Bedrooms: {property.bedrooms}<br />
                          Bathrooms: {property.bathrooms}<br />
                          Garden: {property.garden}<br />
                          Address: {property.address}<br />
                          Postcode: {property.postcode}<br />
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </Card>
            ) : null}
          </div>
        </div>
        <h3>Current Bookings</h3>
        {
          (
            <Card >
              <table>
                <thead>
                  <tr>
                    <th>
                      Full Name
                    </th>

                    <th>
                      Email
                    </th>

                    <th>
                      Phone Number
                    </th>

                    <th>
                      Date
                    </th>

                    <th>
                      Time Slot
                    </th>

                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {property?.bookingForSales.map(book => (<tr key={book.id}>
                    <td> {book.name}</td>

                    <td> {book.email}</td>

                    <td> {book.phoneNumber}</td>

                    <td> {book.date}</td>

                    <td> {book.timeSlot}</td>

                    <button onClick={() =>
              navigate("/BookingSale/Edit/" + book.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Edit Booking{" "}
            </button>

                    <td><button className="btn btn-danger" onClick={() => {
                        axios.delete("http://localhost:8082/BSale/delete/" + book.id)
                            .then(res => { getBSales() })
                            .catch(err => console.error(err));
                  }}>Remove</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )

        }

      </div>
    </div>

  );
}
export default BookingSale;
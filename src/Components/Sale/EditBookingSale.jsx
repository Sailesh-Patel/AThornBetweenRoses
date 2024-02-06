import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBookingSale() {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
   
    useEffect(() => {
        axios.get("http://localhost:8082/BSale/get/" + params.id)
        .then((res) => {
            console.log(res);
            setName(res.data.name);
            setEmail(res.data.email);
            setPhoneNumber(res.data.phoneNumber);
            setDate(res.data.date);
            setTimeSlot(res.data.timeSlot);
        }).catch(err => console.error(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
        .put("http://localhost:8082/BSale/edit/" + params.id, {
            name,
            email,
            phoneNumber,
            date,
            timeSlot
    })
    .then(() => {
      navigate("/PropertiesForSale/BookingSale/" + params.id);
    })
    .catch((error) => console.error(error));
};


    return ( 
        <div className="booking-container">
        <div className="booking-form">
        <h1>Bookings for Sale</h1>
        <form
          onSubmit={handleSubmit}>
          {/* this is the booking imput form to submit a booking  */}
  
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
        <br />
        <br />
      </div>

     );
}

export default EditBookingSale;
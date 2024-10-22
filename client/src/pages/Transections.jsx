import { userData } from "./Login";
import axios from "axios";
import { useState } from "react";

export const Transections = () => {
  const [accNo, setAccNo] = useState();
  const [userName, setUserName] = useState();
  const [available, setAvailable] = useState();
  const [sender, setSender] = useState();
  const [sendAmount, setAmount] = useState();

  const handleCheck = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/checkUser", { accNo, userName })
      .then((data) => {
        console.log(data.data);
        setAvailable(data.data);
        if (available > 0) {
          axios
            .patch("http://localhost:5000/reciveMoney", {
              accNo,
              userName,
              sender,
              sendAmount,
            })
            .then((data) => console.log(data.data))
            .catch((err) => console.log(err.message));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Transections">
      <h1>Transections</h1>
      <div className="container">
        <div className="row g-3 pb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Reciver Name"
              aria-label="RName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Reciver Account No"
              aria-label="accNo"
              onChange={(e) => setAccNo(e.target.value)}
            />
          </div>
        </div>
        <div className="row g-3 pb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Sender Account No"
              aria-label="RName"
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              aria-label="accNo"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleCheck} className="btn btn-outline-primary">
          Check
        </button>
      </div>
      {available > 0
        ? console.log("user exsist")
        : console.log("user not found")}
    </div>
  );
};

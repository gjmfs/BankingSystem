import { Link } from "react-router-dom";
import "./Home.css";
import { userData } from "./Login";

export const Home = () => {
  console.log(userData);
  return (
    <div className="Home">
      <h1 className="p-3">Welcome {userData.userName}</h1>
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <div className="card">
              <Link to={"/accDetails"}>Account Details</Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to={"/transections"}>Transections</Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to={"billPayments"}>Bill Payments</Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to={"/history"}>History</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

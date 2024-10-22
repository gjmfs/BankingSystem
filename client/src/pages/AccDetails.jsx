import { userData } from "./Login";

export const AccDetails = () => {
  const acc = userData;
  return (
    <div className="AccDetails">
      <h1>Account Details</h1>
      {
        <div className="col">
          <div className="container">
            <h2>{acc.userName}</h2>
            <p>
              Account Number: {acc.accNo} <br />
              Account Type: {acc.accType} <br />
              Balance: ${acc.amount}
            </p>
          </div>
        </div>
      }
    </div>
  );
};

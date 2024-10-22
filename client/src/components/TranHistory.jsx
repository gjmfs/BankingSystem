import { transections } from "../user";

export const TranHistory = () => {
  const tranHistory = transections.map((transection, index) => (
    <div className="col" key={index}>
      <div className="container">
        <div className="row">
          <h3>{transection.name}</h3>
          <div className="col">
            <p>{transection.accNum}</p>
          </div>
          <div className="col">
            <p>{transection.amount}</p>
          </div>
          <div className="col">
            <p>{transection.date}</p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="Transections">
      <h1 className="text-center">Transections</h1>
      <h2>Hitory</h2>
      {tranHistory}
    </div>
  );
};

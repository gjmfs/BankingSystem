import "./Balance.css";

export const Balance = () => {
  const amount = 12.99;
  return (
    <div className="Balance text-center">
      <h2 className="pt-4">balance</h2>
      <h3>${amount}</h3>
    </div>
  );
};

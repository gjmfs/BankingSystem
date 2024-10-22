const UserSchema = require("../models/UserSchema");

//creating user account
const userCreate = async (req, res) => {
  const { accNo } = await req.body;
  const accountNumber = accNo;
  console.log(accNo);
  const searchAcc = await UserSchema.findOne({ accNo: accountNumber });

  if (searchAcc) {
    res.json("user Exisist");
  } else {
    UserSchema.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  }
};

//read user detail
const findUser = (req, res) => {
  const { accNo } = req.body;
  console.log(accNo);
  UserSchema.findOne({ accNo: accNo }).then((data) => {
    res.json(data);
  });
};

//login check
const Login = async (req, res) => {
  const { password, userName } = req.body;
  console.log(req.body);
  UserSchema.findOne({ password: password, userName: userName })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

//check user for transection
const CheckUser = async (req, res) => {
  const { accNo, userName } = req.body;
  const check = await UserSchema.findOne({ accNo: accNo });
  if (check) {
    res.json(1);
  } else {
    res.json(0);
  }
};

//transfer money
const Transfer = async (req, res) => {
  //sender
  const { accNo, userName, sender, sendAmount } = req.body;
  console.log(typeof sendAmount);
  const transferAmount = await parseInt(sendAmount);
  console.log(typeof transferAmount);
  const send = await UserSchema.findOne({ accNo: sender });
  const senderAmount = await parseInt(send.amount);
  const senderBalance = await (senderAmount - parseInt(sendAmount));
  //reciver
  const reciver = await UserSchema.findOne({ accNo: accNo });
  console.log(reciver);
  const reciverAmount = await parseInt(reciver.amount);
  const reciverBalance = await (reciverAmount + parseInt(sendAmount));

  await UserSchema.updateOne(
    { accNo: sender },
    {
      $set: { amount: senderBalance },
    }
  ).then(
    await UserSchema.updateOne(
      {
        accNo: accNo,
      },
      {
        $set: { amount: reciverBalance },
      }
    )
  );
};

module.exports = {
  userCreate,
  findUser,
  Login,
  CheckUser,
  Transfer,
};

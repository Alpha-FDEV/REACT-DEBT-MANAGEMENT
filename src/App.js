// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import DebtSummury from "./totals";
import DebtorsInfo from "./debtorDetails";
import Form from "./form";
import { useState } from "react";

export default function App() {
  return <Dashboard />;
}

function Dashboard() {
  const [debtorsArray, setDebtorsArray] = useState([
    {
      name: "ALPHA MURETI",
      id: "42616650",
      phoneNumber: "0740206686",
      amount: 3000,
      interest: 30,
      Date: "09/09/24",
      description: "Bought goods on credit",
      paid: 2000,
    },
  ]);
  const [creditorsArr, setCreditorsArr] = useState([
    {
      name: "FLIVIAN MWIRIGI",
      id: "42616520",
      phoneNumber: "0718017191",
      amount: 6000,
      interest: 20,
      Date: "10/08/24",
      description: "loan ",
      paid: 3000,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState();

  const [name, SetName] = useState("");
  const [id, SetId] = useState("");
  const [phone, SetPhone] = useState("");
  const [amount, SetAmount] = useState();
  const [date, setDate] = useState("");
  const [interest, SetInterest] = useState();
  const [description, setDescription] = useState("");

  const [updatePhone, SetupdatePhone] = useState();
  const [updateAmount, SetUpdateAmount] = useState();
  const [updateId, setupdateId] = useState();
  const [updateName, setupdateName] = useState();

  const [updateInterest, SetUpdateInterest] = useState();
  const [updateDescription, SetUpdateDescription] = useState();
  const [updatePaid, SetUpdatePaid] = useState("0");
  const [sortBy, setSortBY] = useState("debtors");

  // sorting based on creditors or debtors
  let sortedArr;
  if (sortBy === "debtors") {
    sortedArr = debtorsArray;
  }
  if (sortBy === "creditors") {
    sortedArr = creditorsArr;
  }

  function handleToggleForm() {
    setIsOpen(!isOpen);
  }
  // function adding debtors or creditors
  function handleAddDebtor(e) {
    e.preventDefault();
    const newItem = {
      name: name.toUpperCase(),
      id: id,
      phoneNumber: phone,
      amount: +amount,
      interest: interest,
      Date: date,
      description: description,
      paid: 0,
    };

    if (sortBy === "debtors") {
      setDebtorsArray((debtors) => [newItem, ...debtors]);
    }
    if (sortBy === "creditors") {
      setCreditorsArr((creditors) => [newItem, ...creditors]);
    }

    console.log(debtorsArray);

    setDate("");
    setDescription("");
    SetName("");
    SetInterest("");
    SetAmount("");
    SetId("");
    SetPhone("");
    handleToggleForm();
  }
  function handleEditing(itemid, debtname, phoneNum, amount, int, des, paid) {
    setUpdateOpen(!updateOpen);
    SetupdatePhone(phoneNum);
    SetUpdateDescription(des);
    SetUpdateInterest(int);
    SetUpdateAmount(amount);
    setupdateId(itemid);
    setupdateName(debtname);
    SetUpdatePaid(paid);
  }
  //updating creditpr or debtor details
  function handleUpdateDetails(updatedItemid, e) {
    e.preventDefault();

    if (sortedArr === debtorsArray) {
      setDebtorsArray((debtors) =>
        debtors.map((debtor) =>
          debtor.id === updatedItemid
            ? {
                name: updateName,
                id: updateId,
                phoneNumber: updatePhone,
                amount: +updateAmount,
                interest: +updateInterest,
                Date: date,
                description: updateDescription,
                paid: +updatePaid,
              }
            : debtor
        )
      );
    }

    if (sortedArr === creditorsArr) {
      setCreditorsArr((creditors) =>
        creditors.map((creditor) =>
          creditor.id === updatedItemid
            ? {
                name: updateName,
                id: updateId,
                phoneNumber: updatePhone,
                amount: +updateAmount,
                interest: +updateInterest,
                Date: date,
                description: updateDescription,
                paid: +updatePaid,
              }
            : creditor
        )
      );
    }

    handleEditing();
  }

  // debt calculation ui

  const creditOwed = creditorsArr
    .map((debtor) => Number(debtor.amount))
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);

  const totalCreditInterest = creditorsArr
    .map((debtor) => (debtor.interest / 100) * debtor.amount)
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);

  const totalCreditPaid = creditorsArr
    .map((debtor) => debtor.paid)
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);

  const totalCredit = (+totalCreditInterest + +creditOwed).toFixed(2);
  const creditBalance = (totalCredit - totalCreditPaid).toFixed(2);

  // credit calculation ui
  const debtOwed = debtorsArray
    .map((debtor) => Number(debtor.amount))
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);
  const totalInterest = debtorsArray
    .map((debtor) => (debtor.interest / 100) * debtor.amount)
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);

  const totalPaid = debtorsArray
    .map((debtor) => debtor.paid)
    .reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)
    .toFixed(2);

  const totalDebt = (+totalInterest + +debtOwed).toFixed(2);
  const balance = (totalDebt - totalPaid).toFixed(2);

  return (
    <div className="flex flex-col relative border-4 border-purpleLight rounded-md">
      <div className="flex flex-col rounded-2xl ">
        <div className="flex flex-row ">
          <div>
            <Sidebar />
          </div>

          <div className="border-4 border-r-0 border-l-0 border-t-0 border-purpleLight rounded-md px-5 py-3 flex flex-col gap-5 w-full">
            <div className="flex flex-col">
              <p className="font-extrabold text-xl text-deepBlue underline mb-4 ursor-pointer hover:no-underline">
                MY DEBTORS <span className="ml-4">({debtorsArray.length})</span>
              </p>

              {debtorsArray.length === 0 ? (
                <div className="text-2xl font-semibold text-center">
                  You currently have no debtors🙂
                </div>
              ) : (
                <div className="flex flex-row gap-10 ">
                  <DebtSummury
                    bg="bg-purpleLight"
                    text={"INITIAL DEBT"}
                    amount={debtOwed}
                  />
                  <DebtSummury
                    bg="bg-deepBlue/30"
                    text={"INTEREST CHARGED"}
                    amount={totalInterest}
                  />
                  <DebtSummury
                    bg="bg-greenLight"
                    text={"TOTAL DEBT"}
                    amount={totalDebt}
                  />
                  <DebtSummury
                    bg="bg-deepGreen"
                    text={"TOTAL PAID"}
                    amount={totalPaid}
                  />
                  <DebtSummury
                    bg="bg-deepRed"
                    text={"BALANCE"}
                    amount={balance}
                  />
                </div>
              )}
            </div>

            <div>
              <p className="font-extrabold text-xl text-deepBlue underline mb-4 cursor-pointer hover:no-underline">
                MY CREDITORS{" "}
                <span className="ml-4">({creditorsArr.length})</span>
              </p>

              <div className="flex flex-row gap-8 ">
                <DebtSummury
                  bg="bg-deepRed"
                  text={"INITIAL CREDIT"}
                  amount={creditOwed}
                />
                <DebtSummury
                  bg="bg-deepGreen"
                  text={"INTEREST CHARGED"}
                  amount={totalCreditInterest}
                />
                <DebtSummury
                  bg="bg-greenLight"
                  text={"TOTAL CREDIT"}
                  amount={totalCredit}
                />
                <DebtSummury
                  bg="bg-deepBlue"
                  text={"TOTAL PAID"}
                  amount={totalCreditPaid}
                />
                <DebtSummury
                  bg="bg-purpleLight"
                  text={"BALANCE"}
                  amount={creditBalance}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4">
          <DebtorsInfo
            debtorsArr={debtorsArray}
            setDebtorsArray={setDebtorsArray}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleToggleForm={handleToggleForm}
            handleEditing={handleEditing}
            sortBy={sortBy}
            setSortBY={setSortBY}
            creditorsArr={creditorsArr}
            setCreditorsArr={setCreditorsArr}
            sortedArr={sortedArr}
          />
        </div>
      </div>
      <Form
        debtorsArr={debtorsArray}
        setDebtorsArray={setDebtorsArray}
        debtorsArray={debtorsArray}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleToggleForm={handleToggleForm}
        updateOpen={updateOpen}
        setUpdateOpen={setUpdateOpen}
        handleAddDebtor={handleAddDebtor}
        handleEditing={handleEditing}
        SetName={SetName}
        name={name}
        id={id}
        SetId={SetId}
        phone={phone}
        SetPhone={SetPhone}
        amount={amount}
        SetAmount={SetAmount}
        date={date}
        setDate={setDate}
        interest={interest}
        SetInterest={SetInterest}
        description={description}
        setDescription={setDescription}
        updateDescription={updateDescription}
        SetUpdateDescription={SetUpdateDescription}
        updateInterest={updateInterest}
        SetUpdateInterest={SetUpdateInterest}
        updateAmount={updateAmount}
        SetUpdateAmount={SetUpdateAmount}
        updatePhone={updatePhone}
        SetupdatePhone={SetupdatePhone}
        setupdateName={setupdateName}
        setupdateId={setupdateId}
        updateName={updateName}
        updateId={updateId}
        SetUpdatePaid={SetUpdatePaid}
        updatePaid={updatePaid}
        handleUpdateDetails={handleUpdateDetails}
        sortBy={sortBy}
      />
    </div>
  );
}

// aLPHAMUETI1234;

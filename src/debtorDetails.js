import { useState } from "react";

export default function DebtorsInfo({
  debtorsArr,
  isOpen,
  handleToggleForm,
  setIsOpen,
  setDebtorsArray,
  handleEditing,
  sortBy,
  setSortBY,
  creditorsArr,
  setCreditorsArr,
  sortedArr,
}) {
  return (
    <DebtorTable
      debtorsArr={debtorsArr}
      setDebtorsArray={setDebtorsArray}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleToggleForm={handleToggleForm}
      handleEditing={handleEditing}
      setSortBY={setSortBY}
      sortBy={sortBy}
      creditorsArr={creditorsArr}
      setCreditorsArr={setCreditorsArr}
      sortedArr={sortedArr}
    />
  );
}
function DebtorTable({
  debtorsArr,
  creditorsArr,
  setCreditorsArr,

  setDebtorsArray,
  setIsOpen,
  isOpen,
  handleToggleForm,
  handleEditing,
  sortBy,
  setSortBY,
  sortedArr,
}) {
  function handleDeleteItem(itemId) {
    const updatedArray = sortedArr.filter((item) => item.id !== itemId);

    sortedArr === debtorsArr
      ? setDebtorsArray(updatedArray)
      : setCreditorsArr(updatedArray);
  }

  return (
    <div className="mt-4 h-72 overflow-y-scroll">
      <div className="flex justify-center items-center ">
        <h1 className="font-extrabold text-xl text-deepBlue text-center mb-3 capitalize">
          {sortBy.toUpperCase()} INFOMATION
        </h1>
        <div className="flex  items-center ml-60 mb-2">
          <label for="accountType" className=" text-end text-xl font-bold">
            Sort:
          </label>
          <select
            id="accountType"
            className=" text-xl border-2 border-deepBlue rounded-lg p-1"
            value={sortBy}
            onChange={(e) => setSortBY(e.target.value)}
          >
            <option value="debtors">Debtors</option>
            <option value="creditors">Creditors</option>
          </select>

          <button
            className="px-4 py-2 font-semibold text-xl bg-deepBlue text-whiteColor ml-4 "
            onClick={handleToggleForm}
          >
            Add
          </button>
        </div>
      </div>

      <table class="w-full  overflow-scroll text-xl border-collapse border border-gray-300">
        <thead>
          <tr>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Phone</th>
            <th class="border px-4 py-2">Amount</th>
            <th class="border px-4 py-2">Interest</th>
            <th class="border px-4 py-2">Description</th>

            <th class="border px-4 py-2">Paid</th>
            <th class="border px-4 py-2">Balance</th>

            <th class="border px-4 py-2">Edit/Delete</th>
          </tr>
        </thead>

        {sortedArr.map((debtor) => (
          <DebtorInformation
            debtorName={debtor.name}
            id={debtor.id}
            phone={debtor.phoneNumber}
            description={debtor.description}
            amount={debtor.amount}
            interest={debtor.interest}
            paid={debtor.paid}
            key={debtor.id}
            handleDeleteItem={handleDeleteItem}
            handleEditing={handleEditing}
          />
        ))}
      </table>
    </div>
  );
}
function DebtorInformation({
  debtorName,
  id,
  phone,
  description,
  interest,
  amount,
  paid,
  handleDeleteItem,
  handleEditing,
}) {
  return (
    <>
      <tbody className="">
        <tr>
          <td class="border px-4 py-1 ">{debtorName}</td>
          <td class="border px-4 py-1">{id}</td>
          <td class="border px-4 py-1">{phone}</td>
          <td class="border px-4 py-1 ">{amount.toFixed(2)}</td>
          <td class="border px-4 py-1">
            {((interest / 100) * amount).toFixed(2)}
          </td>
          <td class="border px-4 py-1 ">{description}</td>

          <td class="border px-4 py-1 ">{paid.toFixed(2)}</td>
          <td class="border px-4 py-1 ">
            {(amount - paid + (interest / 100) * amount).toFixed(2)}
          </td>
          <td class="border px-4 py-1 flex flex-row gap-4">
            <button
              className="text-xl font-bold bg-deepBlue p-1 rounded-md"
              title="Edit"
              onClick={() =>
                handleEditing(
                  id,
                  debtorName,
                  phone,
                  amount,
                  interest,
                  description,
                  paid
                )
              }
            >
              {" "}
              📝
            </button>
            <button
              className="text-xl font-bold bg-deepBlue p-1 rounded-md"
              title="Delete"
              onClick={() => handleDeleteItem(id)}
            >
              {" "}
              🚮
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

import { useState } from "react";
export default function Form({
  debtorsArr,
  debtorsArray,
  setDebtorsArray,
  isOpen,
  setIsopen,
  handleToggleForm,
  setUpdateOpen,
  updateOpen,
  handleEditing,
  updateDetails,
  setUpdateDetails,
  name,
  SetName,
  id,
  SetId,
  phone,
  SetPhone,
  amount,
  SetAmount,
  date,
  setDate,
  interest,
  SetInterest,
  setDescription,

  description,
  updateDescription,
  SetUpdateDescription,
  updateInterest,
  SetUpdateInterest,
  updateAmount,
  SetUpdateAmount,
  updatePhone,
  SetupdatePhone,
  setupdateName,
  setupdateId,
  updateName,
  updateId,
  SetUpdatePaid,
  updatePaid,
  handleAddDebtor,
  handleUpdateDetails,
  sortBy,
}) {
  return (
    <>
      <DetailsForm
        debtorsArr={debtorsArr}
        debtorsArray={debtorsArr}
        setDebtorsArray={setDebtorsArray}
        isOpen={isOpen}
        setIsopen={setIsopen}
        handleToggleForm={handleToggleForm}
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
        handleAddDebtor={handleAddDebtor}
        sortBy={sortBy}
      />
      <UpdateDetailsForm
        setUpdateOpen={setUpdateOpen}
        updateOpen={updateOpen}
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
        setUpdateDetails={setUpdateDetails}
        updateDetails={updateDetails}
        updateDescription={updateDescription}
        SetUpdateDescription={setDescription}
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
    </>
  );
}

function DetailsForm({
  debtorsArray,
  setDebtorsArray,
  isOpen,
  setIsopen,
  handleToggleForm,
  handleAddDebtor,
  description,
  interest,
  date,
  amount,
  phone,
  id,
  name,
  setDescription,
  SetInterest,
  setDate,
  SetAmount,
  SetPhone,
  SetId,
  SetName,
  sortBy,
}) {
  console.log(interest, amount);
  return (
    <>
      <div
        className={`w-full h-full z-10 backdrop-brightness-50 backdrop-blur-sm absolute   ${
          !isOpen ? "hidden" : ""
        }`}
        onClick={handleToggleForm}
      ></div>
      <div
        className={`w-full h-full transition-transform  absolute ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <form
          onSubmit={(e) => handleAddDebtor(e)}
          className="w-1/2 z-50 border-2 border-deepBlue py-3 bg-whiteColor   absolute translate-x-1/2 translate-y-1/4"
        >
          <h1 className="font-bold text-deepBlue text-2xl text-center">
            Enter {sortBy} details
          </h1>
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-2xl font-bold">
                Name
              </label>
              <input
                required
                type="text"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="id" className=" text-end text-xl font-bold">
                Id
              </label>
              <input
                required
                id="id"
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={id}
                onChange={(e) => SetId(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Phone
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={phone}
                onChange={(e) => SetPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Amount
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={amount}
                onChange={(e) => SetAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Interest <span className="text-xl">(%)</span>
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={interest}
                onChange={(e) => SetInterest(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Date
              </label>
              <input
                required
                type="date"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label for="" className=" text-end text-xl font-bold" required>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" active:bg-whiteColor w-4/5 mx-4 transition- border-2 active:border-deepBlue border-deepBlue rounded-md py-3 px-1"
              cols="30"
              rows="3"
            >
              {" "}
            </textarea>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 ">
            <input
              type="submit"
              className="bg-deepBlue px-6 py-2 text-whiteColor text-xl text-center"
            />
          </div>
        </form>
      </div>
    </>
  );
}
function UpdateDetailsForm({
  updateOpen,
  setUpdateOpen,
  handleEditing,
  description,
  interest,
  date,
  amount,
  phone,
  id,
  name,
  setDescription,
  SetInterest,
  setDate,
  SetAmount,
  SetPhone,
  SetId,
  SetName,
  setUpdateDetails,
  updateDetails,
  updateDescription,
  SetUpdateDescription,
  updateInterest,
  SetUpdateInterest,
  updateAmount,
  SetUpdateAmount,
  updatePhone,
  SetupdatePhone,
  setupdateName,
  setupdateId,
  updateName,
  updateId,
  SetUpdatePaid,
  updatePaid,
  updateBal,
  setUpdateBal,
  sortBy,

  handleUpdateDetails,
}) {
  return (
    <>
      <div
        className={`w-full h-full z-10 backdrop-brightness-50 backdrop-blur-sm absolute   ${
          !updateOpen ? "hidden" : ""
        }`}
        onClick={handleEditing}
      ></div>
      <div
        className={`w-full h-full transition-transform  absolute ${
          !updateOpen ? "hidden" : ""
        }`}
      >
        <form
          onSubmit={(e) => handleUpdateDetails(updateId, e)}
          className="w-1/2 z-50 border-2 border-deepBlue py-3 bg-whiteColor   absolute translate-x-1/2 translate-y-1/4"
        >
          <h1 className="font-bold text-deepBlue text-2xl text-center">
            Update {sortBy} details
          </h1>
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-2xl font-bold">
                Name
              </label>
              <input
                required
                readOnly
                type="text"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={updateName}
                onChange={(e) => setupdateName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="id" className=" text-end text-xl font-bold">
                Id
              </label>
              <input
                required
                readOnly
                id="id"
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={updateId}
                onChange={(e) => setupdateId(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Phone
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md px-1 w-56"
                value={updatePhone}
                onChange={(e) => SetupdatePhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Amount
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={updateAmount}
                onChange={(e) => SetUpdateAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Interest <span className="text-xl">(%)</span>
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={updateInterest}
                onChange={(e) => SetUpdateInterest(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Paid <span className="text-xl">(Ksh)</span>
              </label>
              <input
                required
                type="number"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={updatePaid}
                onChange={(e) => SetUpdatePaid(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label for="" className=" text-end text-xl font-bold">
                Date
              </label>
              <input
                required
                type="date"
                className=" active:bg-whiteColor transition- border-2 active:border-deepBlue border-deepBlue rounded-md w-56 px-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label for="" className=" text-end text-xl font-bold" required>
              Description
            </label>
            <textarea
              value={updateDescription}
              onChange={(e) => SetUpdateDescription(e.target.value)}
              className=" active:bg-whiteColor w-4/5 mx-4 transition- border-2 active:border-deepBlue border-deepBlue rounded-md py-3 px-1"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 ">
            <input
              type="submit"
              className="bg-deepBlue px-6 py-2 text-whiteColor text-xl text-center"
            />
          </div>
        </form>
      </div>
    </>
  );
}

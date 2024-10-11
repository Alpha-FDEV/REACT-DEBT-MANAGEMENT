export default function DebtSummury({ bg, text, amount }) {
  return <DebtDetails bg={bg} text={text} amount={amount} />;
}
function DebtDetails({ bg, text, amount }) {
  console.log(bg);
  return (
    <div className={`rounded-xl px-4 py-1 ${bg}`}>
      <div className="">
        <h4 className="font-bold text-xl ">{text}</h4>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <span className="font-thin text-xl "> ksh.</span>
        <p className="font-semibold text-lg text-whiteColor">
          <p>{amount}</p>
        </p>
      </div>
    </div>
  );
}

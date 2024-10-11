export default function Sidebar() {
  return (
    <div className="flex flex-col bg-pinkDark ">
      <Heading />
      <SidebarLinks />
    </div>
  );
}
function Heading() {
  return (
    <h2 className="text-2xl py-5  font-bold text-blackdeep ml-6 mr-6">
      DEBT MANAGEMENT
    </h2>
  );
}
function SidebarLinks() {
  return (
    <div className=" flex flex-col ">
      <p className="links">Debtors</p>
      <p className="links">Creditors</p>
      <p className="links">Balances</p>
    </div>
  );
}

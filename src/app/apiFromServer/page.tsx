import { notFound } from "next/navigation";
import BeerDropdown from "../components/BeerDropdown";
import AddBeer from "../components/AddBeer";

const ApiFromServer = async () => {
  const beersReq = await fetch("http://localhost:3000/api/beers");
  if (!beersReq.ok) return notFound();
  const beersObj = await beersReq.json();

  return (
    <>
      
      <div className="flex justify-center item-center mt-10">
      <div className="ms-10 me-20">
        API Route From <span className="font-bold underline">Server</span>
      </div>
        <div className="ms-10 me-20">
          <div className="flex items-center gap-3">
            <label htmlFor="culture">BEERS</label>
            <BeerDropdown data={beersObj} />
          </div>
        </div>
        <div>
          <AddBeer />
        </div>
      </div>
    </>
  );
};
export default ApiFromServer;


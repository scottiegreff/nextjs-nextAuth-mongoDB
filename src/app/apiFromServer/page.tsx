import { notFound } from "next/navigation";
// const getResp = await fetch("http://localhost:3000/api/whoAmI", {
//   method: "GET",
//   headers: headers(),
// }).then((res) => res.json());

async function getArtists() {
  const res = await fetch("http://localhost:3000/api/selects/artists");
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
async function getCultures() {
  const res = await fetch("http://localhost:3000/api/selects/cultures");
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const ApiFromServer = async () => {
  const artistNames = await getArtists();
  const cultureNames = await getCultures();
  // console.log("THIS IS FROM THE COMPONENT: ", artistNames);
  return (
    <>
      <div className="mt-10 ms-10">
        {/* <div>
        API Route From <span className="font-bold underline">Server</span>
      </div> */}
        {/* <div>Name: {getResp?.name}</div> */}
        <div className="flex items-center gap-3">
          <label htmlFor="artist">Artists</label>
          <select name="artist" className="p-2 border rounded-lg">
            {artistNames &&
              artistNames?.map((data: { _id: string; name: string }) => (
                <option key={data._id}>{data?.name}</option>
              ))}
          </select>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="culture">Culture</label>
          <select name="culture" className="p-2 border rounded-lg">
            {cultureNames &&
              cultureNames?.map((data: { _id: string; name: string }) => (
                <option key={data._id}>{data?.name}</option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default ApiFromServer;

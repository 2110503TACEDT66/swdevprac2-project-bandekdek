import getShops from "@/libs/getShops";
import ShopCatalog from "@/components/ShopCatalog";

export default async function shops() {
  const shops = await getShops()

  return (
    <main className="text-center p-5">
      <h1 className="text-5xl font-bold text-white mt-[75px]">Top Shops</h1>
      <div className="bg-white h-[5px] mt-[20px] mb-[20px] w-[50%] m-auto"></div>
      <ShopCatalog shopData={shops}></ShopCatalog>
    </main>
  );
}
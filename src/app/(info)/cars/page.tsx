import Loading from "@/app/loading";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";

export default function Cars() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <main className="text-center">
        <CarCatalog />
      </main>
    </Suspense>
  );
}

import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"


export default function cars() {
    return (
      <main className="text-center p-5 mt-[60px] h-[100vh] bg-black bg-opacity-15">
        <h1 className="text-4xl font-medium text-white">Our Top Cars</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
             <CarCatalog/>     
        </Suspense>
        <hr className="mt-auto"/>
      </main>
    )
}
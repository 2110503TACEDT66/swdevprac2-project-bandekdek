import CarCatalog from "@/components/CarCatalog"


export default function Cars() {
    return (
      <main className="text-center p-5 mt-[60px] h-[100vh] bg-black bg-opacity-15">
        <h1 className="text-5xl font-bold text-white">Our Top Cars</h1>
             <CarCatalog/>     
        <hr className="mt-auto"/>
      </main>
    )
}
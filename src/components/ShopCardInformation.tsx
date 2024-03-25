export default function ShopCardInformation({text}:{text:string|number}) {
    return (
        <div className="w-full h-[15%] pl-[10px] text-lg text-left">
            {text}
        </div>
    )
}
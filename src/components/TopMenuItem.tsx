
import Link from 'next/link';

export default function TopMenuItem({item, pageRef, title}: {item:any, pageRef:string, title:string}) {
    return (
        <Link className="w-[90px] sm:w-[140px] h-fit  my-auto text-center font-sans 
        hover:bg-white/[0.5] font-bold text-white text-2xl" href={pageRef} title={title}>
            {item}
        </Link>
    );
}
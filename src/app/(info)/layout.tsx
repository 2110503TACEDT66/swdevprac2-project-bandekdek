

export default function InfoLayout({ children,}: {children: React.ReactNode}) {
    return (
        <div className="h-[200vh] bg-gradient-to-tl from-red-700 from-20% via-amber-600 to-purple-700 to-90%">
            {children}
        </div>
    )
}
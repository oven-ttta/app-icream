import Image from 'next/image'
import Link from 'next/link'

function page() {
    return (
        <div className='relative flex flex-col items-center justify-end h-screen w-full max-w-[430px] mx-auto overflow-hidden pb-24 shadow-2xl'>
            <Image
                src="/bg-getstart.png"
                alt="Ice cream background"
                fill
                className="object-cover -z-10"
                priority
            />

            <h1 className='font-holtwood text-xl md:text-xl text-white tracking-wider mb-6 text-center drop-shadow-lg'>
                ADD SWEET , ADD SUGAR
            </h1>

            <div className='font-grape text-xl md:text-xl text-gray-200 text-center max-w-lg mb-12 tracking-wide drop-shadow-md'>
                <p>When someone asks if I want ice cream</p>
                <p>Me: Yes-day, monday, tuesday, wednesday…</p>
            </div>

            <Link href="/pages/home" className=' cursor-pointer bg-[#87373b] text-white text-2xl px-12 py-3 rounded-xl font-holtwood hover:bg-[#a0454a] transition-colors shadow-xl'>
                GET START
            </Link>
        </div>
    )
}

export default page
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

function Navigation() {
    const [showSideBar, setShowSideBar] = useState(false)

    //used for active links
    const router = useRouter()

    //nav state
    const [navColor, setNavColor] = useState(false)
    const changeColor = () => {
        if(typeof window !== "undefined"){
        if(window.scrollY >= 50){
            setNavColor(true)
        }else {
            setNavColor(false)
        }
        }
    }

    if(typeof window !== "undefined"){
        window.addEventListener('scroll', changeColor)
    }


    return (
        <div className={`${navColor ? "bg-black" : "bg-transparent"} text-white w-full fixed top-0 z-10 opacity-100 px-9 md:px-12 py-5 rounded-sm drop-shadow-md`}>
            {/* Large Screens */}
            <nav className='flex justify-between items-center'>
                <Link href="/" passHref>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <Image src="/android-chrome-512x512.png" alt="Psalmurai logo" width={23} height={23} />
                        <h3 className='ml-2 font-mono text-2xl'>Psalmurai</h3>
                    </div>
                </Link>

                <ul className='hidden lg:flex justify-between items-center w-2/3 text-xl'>
                    <Link href="/" passHref>
                        <li className={`${router.pathname === "/" ? "text-white" : "text-gray-500 cursor-pointer"}`}>Home</li>
                    </Link>
                    <Link href="/releases" passHref>
                        <li className={`${router.pathname === "/releases" ? "text-white" : "text-gray-500 cursor-pointer"}`}>Releases</li>
                    </Link>
                    <Link href="/videos" passHref>
                        <li className={`${router.pathname === "/videos" ? "text-white" : "text-gray-500 cursor-pointer"}`}>Videos</li>
                    </Link>
                    <Link href="/biography" passHref>
                        <li className={`${router.pathname === "/biography" ? "text-white" : "text-gray-500 cursor-pointer"}`}>Biography</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className={`${router.pathname === "/contact" ? "text-white" : "text-gray-500 cursor-pointer"}`}>Contact</li>
                    </Link>
                </ul>

                <button className='lg:hidden' onClick={() => setShowSideBar(!showSideBar)}>       
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </nav>

            {/* Small screen Navigation */}
            <div className={`lg:hidden top-0 right-0 w-[380px] bg-[#a58f11] text-black p-10 fixed h-[100vh] z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='flex flex-col mt-16 text-lg text-center'>
                        <Link href="/" passHref>
                            <li className={`${router.pathname === "/" ? "text-white font-bold" : "text-black"} py-3`}>Home</li>
                        </Link>
                        <Link href="/releases" passHref>
                            <li className={`${router.pathname === "/releases" ? "text-white font-bold" : "text-black"} py-3`}>Releases</li>
                        </Link>
                        <Link href="/videos" passHref>
                            <li className={`${router.pathname === "/videos" ? "text-white font-bold" : "text-black"} py-3`}>Videos</li>
                        </Link>
                        <Link href="/biography" passHref>
                            <li className={`${router.pathname === "/biography" ? "text-white font-bold" : "text-black"} py-3`}>Biography</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className={`${router.pathname === "/contact" ? "text-white font-bold" : "text-black"} py-3`}>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
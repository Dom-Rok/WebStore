"use client"
import Image from "next/image";
import logo from "@/public/logo.svg";
import cartIcon from "@/public/cart-icon.svg";
import userIcon from "@/public/user-icon.svg";
import searchIcon from "@/public/search-icon.svg"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import {signOut, useSession} from "next-auth/react";

export default function Navbar(){
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session } = useSession()
    //console.log(session);
    return (
        <>
            {/* Desktop*/}
            <nav className="container flex flex-col min-h-[70px] items-center justify-between px-5 mx-auto pt-2.5 2xl:px-0 md:flex hidden md:my-5">
                <div className="w-full flex items-center justify-between basis-1/4">
                    <div className="flex md:w-[200px] w-[150px] justify-center md:justify-start content-center pt-2 md:pt-0 ">
                        <Link href={"/"}> <Image src={logo} alt={"logo"} className="flex"/> </Link>
                    </div>
                    <div className="max-h-[40px] flex border-1 bg-black justify-center ">
                        <input placeholder={"Vyhľadať..."} className="flex h-[32px] bg-white p-5"/>
                        <Image src={searchIcon} alt={"search"} width={30} height={30} className="!invert"/>
                    </div>
                    <div className="flex basis-1/4 max-w-[200px] justify-evenly">
                        <Image src={cartIcon} alt={"košík"} width={32} height={32}/>
                        {session ? (
                                <button onClick={() => signOut()}>Odhlásiť</button>

                        ) : (
                            <Link href={"/login"}> <Image src={userIcon} alt={"user"} width={32} height={32}/></Link>
                        )}

                    </div>
                </div>
                <div className="w-full flex mt-7 font-bold  text-xl ">
                    <Link href={"/products"} className={`mr-4  ${ pathname=== '/products' ? 'active' : ''}`} >Produkty</Link>
                    <Link href={"/"} className={`mr-4  ${ pathname=== '/about' ? 'active' : ''}`}>O nás</Link>
                </div>
            </nav>

            {/* Mobile */}
            <nav className=" container flex md:hidden flex-col min-h-[60px] items-center justify-between px-4 mx-auto">
                <div className="w-full flex items-center justify-between py-3">
                    <button
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    <div className="flex w-[120px] justify-center content-center">
                        <Link href={"/"}> <Image src={logo} alt={"logo"} className="flex"/> </Link>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <Image src={cartIcon} alt={"košík"} width={24} height={24}/>
                        {session ? (
                            <button onClick={() => signOut()}>Odhlásiť</button>
                            ):(<>

                                <Link href={"/login"}> <Image src={userIcon} alt={"user"} width={24} height={24}/></Link>
                            </>

                        )}
                         </div>
                </div>

                {/* Mobile search bar - always visible */}
                <div className="w-full px-2 pb-3">
                    <div className="flex border border-gray-300 rounded bg-white items-center px-2">
                        <input placeholder={"Vyhľadať..."} className="flex-1 h-[32px] bg-white p-2 focus:outline-none"/>
                        <Image src={searchIcon} alt={"search"} width={20} height={20} className="!invert"/>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <div
                    className={`w-full transition-all duration-300 overflow-hidden ${
                        mobileMenuOpen ? 'max-h-40 py-2' : 'max-h-0'
                    }`}
                >
                    <div className="flex flex-col font-bold text-lg px-4 space-y-3">
                        <Link
                            href={"/products"}
                            className={`py-1 ${pathname === '/products' ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Produkty
                        </Link>
                        <Link
                            href={"/"}
                            className={`py-1 ${pathname === '/about' ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            O nás
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
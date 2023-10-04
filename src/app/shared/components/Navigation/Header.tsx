"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

// icons
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    const pathname = usePathname()

    const isHomePage = pathname === '/';
    
    return ( 
        <div className={`navbar absolute text-base-100 z-10 ${isHomePage ? 'hover:bg-black' : 'bg-black'}`}>
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                <li className="hover:bg-gray-800">
                    <Link href="/collections/men" className="hover:text-white">Men</Link>
                </li>
                <li className="hover:bg-gray-800">
                    <Link href="/collections/women" className="hover:text-white">Women</Link>
                </li>
                <li className="hover:bg-gray-800">
                    <Link href="/collections/kids" className="hover:text-white">Kids</Link>
                </li>
                <li className="hover:bg-gray-800">
                    <Link href="/collections/outlet" className="hover:text-white">Outlet</Link>
                </li>
            </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-2xl">Shoe Store</Link>
        </div>
        <div className="navbar-center hidden lg:flex py-4">
            <ul className="menu-horizontal text-lg">
                <li className="hover-underline px-6">
                    <Link href="/collections/men" className="hover:text-white">Men</Link>
                </li>
                <li className="hover-underline px-6">
                    <Link href="/collections/women" className="hover:text-white">Women</Link>
                </li>
                <li className="hover-underline px-6">
                    <Link href="/collections/kids" className="hover:text-white">Kids</Link>
                </li>
                <li className="hover-underline px-6">
                    <Link href="/collections/outlet" className="hover:text-white">Outlet</Link>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            <AiOutlineUser className="icons" />
            <AiOutlineSearch className="icons" />
            <AiOutlineShoppingCart className="icons" />
        </div>
        </div>
    );
}
 
export default Header;
"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

// icons
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    const pathname = usePathname()

    const isHomePage = pathname === '/';

    const isActive = (link: string) => pathname === link;
    
    return (
        <div className={`navbar w-screen absolute text-base-100 z-10 hover:shadow-md ${isHomePage ? 'hover:bg-black' : 'bg-black shadow-md'}`}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                <li className={`hover:bg-gray-800 ${isActive('/collections/men') ? 'border-b-2 border-white' : ''}`}>
                  <Link href="/collections/men" className={`hover:text-white ${isActive('/collections/men') ? 'text-white' : ''}`}>
                    Men
                  </Link>
                </li>
                <li className={`hover:bg-gray-800 ${isActive('/collections/women') ? 'border-b-2 border-white' : ''}`}>
                  <Link href="/collections/women" className={`hover:text-white ${isActive('/collections/women') ? 'text-white' : ''}`}>
                    Women
                  </Link>
                </li>
                <li className={`hover:bg-gray-800 ${isActive('/collections/kids') ? 'border-b-2 border-white' : ''}`}>
                  <Link href="/collections/kids" className={`hover:text-white ${isActive('/collections/kids') ? 'text-white' : ''}`}>
                    Kids
                  </Link>
                </li>
                <li className={`hover:bg-gray-800 ${isActive('/collections/outlet') ? 'border-b-2 border-white' : ''}`}>
                  <Link href="/collections/outlet" className={`hover:text-white ${isActive('/collections/outlet') ? 'text-white' : ''}`}>
                    Outlet
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-2xl">Shoe Store</Link>
          </div>
          <div className="navbar-center hidden lg:flex py-4">
            <ul className="menu-horizontal text-lg">
              <li className={`px-6 ${isActive('/collections/men') ? 'active-link' : 'hover-underline'}`}>
                <Link href="/collections/men" className={`hover:text-white ${isActive('/collections/men') ? 'text-white' : ''}`}>
                  Men
                </Link>
              </li>
              <li className={`px-6 ${isActive('/collections/women') ? 'active-link' : 'hover-underline'}`}>
                <Link href="/collections/women" className={`hover:text-white ${isActive('/collections/women') ? 'text-white' : ''}`}>
                  Women
                </Link>
              </li>
              <li className={`px-6 ${isActive('/collections/kids') ? 'active-link' : 'hover-underline'}`}>
                <Link href="/collections/kids" className={`hover:text-white ${isActive('/collections/kids') ? 'text-white' : ''}`}>
                  Kids
                </Link>
              </li>
              <li className={`px-6 ${isActive('/collections/outlet') ? 'active-link' : 'hover-underline'}`}>
                <Link href="/collections/outlet" className={`hover:text-white ${isActive('/collections/outlet') ? 'text-white' : ''}`}>
                  Outlet
                </Link>
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
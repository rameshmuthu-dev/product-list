
import React, { useStat } from 'react';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { X, Menu } from 'lucide-react';


function Navbar({ search, setSearch, cartItems = [], setisCartOpen, onToggleSidebar, isSidebarOpen, setisSidebarOpen }) {
    // Function to total items in cart
    const totalItems = cartItems.length;
    // state to control the visibility of the main filter sidebar for mobile




    return (
        <nav>
            <div className=' fixed w-full top-0 z-30 bg-emerald-800 p-4  shadow-md'>
                <div className='flex items-center justify-between max-w-7xl mx-auto gap-4'>

                    {/* Hamburger menu button for mobile (visible only on small screens) */}
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 text-white md:hidden"
                        
                    >
                        
                        {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>


                    <h1 className=' text-white  text-2xl font-medium'>Mobile Mania</h1>
                    <div className='relative w-full max-w-[500px] '>

                        <input className='bg-[#f2f3f5] border-none outline-none pr-4 px-6 py-3 rounded-[30px] w-full  hover:border-gray-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 transition-all duration-100 shadow-sm'
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder=' Search for Smartphones, brands, etc.....,' />
                        <FaSearch className='absolute top-4 right-4 text-gray-500 text-base' size={20} />
                    </div>

                    <div className='relative '>
                        <button onClick={() => setisCartOpen((prev) => !prev)} className='text-white text-3xl '><FaCartPlus /></button>
                        {totalItems > 0 && (
                            <span className='absolute top-0 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 text-center'>{totalItems}</span>
                        )}
                    </div>




                </div>
            </div>
        </nav>
    );
};

export default Navbar

import React from 'react'
import { products } from './Productdata';


import { X } from 'lucide-react';


const ramOptions = [...new Set(products.map((p) => p.ram))].sort((a, b) => a - b);
const storageOptions = [...new Set(products.map((p) => p.storage))].sort((a, b) => a - b);

const minPrice = Math.min(...products.map((p) => p.price));
const maxPrice = Math.max(...products.map((p) => p.price));






function Sidebar({ brands, priceRange, setPriceRange, selectedBrands, setselectedBrands, selectedRam, setselectedRam, selectedStorage, setselectedStorage }) {
    

    return (
        <div className={' hidden md:block z-20  w-64 h-screen bg-emerald-200 p-4  sticky top-16 overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out'} >
           


            {/* <div className='md:hidden flex justify-end mb-4'>
                <button onClick={toggleMenu} className='text-emerald-800 text-2xl'><X /></button>
            </div> */}
            <h2 className='text-xl font-semibold mb-6 mt-6 text-emerald-800'>Filters</h2>
            {/* Brand Filter */}
            <div className='mb-6'>
                <h3 className=' text-emerald-700 font-medium mb-3'>BRANDS</h3>
                {brands.map((brand) => (
                    <label key={brand} className='flex items-center mb-2 cursor-pointer text-emerald-900'>
                        <input type="checkbox"
                            className='mr-2 accent-emerald-800 focus:outline-none'

                            value={selectedBrands.includes(brand)}

                            onChange={() => setselectedBrands(selectedBrands.includes(brand)
                                ? selectedBrands.filter((b) => b !== brand)
                                : [...selectedBrands, brand])}
                        /> {brand.charAt(0).toUpperCase() + brand.slice(1)}
                    </label>
                ))}
            </div>
            {/* RAM Options */}
            <div className='mb-6'>
                <h3 className=' text-emerald-800 font-medium mb-3'>RAM</h3>

                <select
                    value={selectedRam}
                    onChange={(e) => setselectedRam(e.target.value ? parseInt(e.target.value) : null)}
                    className='w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 p-1'>
                    <option value="">All</option>
                    {ramOptions.map((ram) => (
                        <option key={ram} value={ram}>{ram} GB</option>
                    ))}

                </select>

            </div>
            {/* Price Range */}
            <div className="mb-6">
                <h3 className='font-medium  text-emerald-800 mb-3 '>PRICE RANGE</h3>

                <input type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}


                    onChange={(e) => setPriceRange([minPrice, (e.target.value)])}

                    className='w-full accent-emerald-700' />
                <div className='flex justify-between text-sm mt-2'>
                    <span>₹ {priceRange[0]}</span>
                    <span>₹ {priceRange[1]}</span>
                </div>

            </div>


            {/* Storage */}
            <div className='mb-6'>
                <h3 className='text-emerald-800 font-medium mb-3'>STORAGE</h3>
                <select



                    value={selectedStorage}

                    onChange={(e) => setselectedStorage(e.target.value ? parseInt(e.target.value) : null)}

                    className='w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 p-1'>
                    <option value="">All</option>
                    {storageOptions.map((storage) => (
                        <option key={storage} value={storage}>{storage} GB</option>

                    ))}
                </select>



            </div>




        </div>
    )
}

export default Sidebar

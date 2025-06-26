import React from 'react'

function ProductCard({products, addToCart}) {
    return (
        <div className=' bg-white/30 backdrop-blur-md backdrop-saturate-150 shadow p-4 hover:shadow-xl transition-all duration-200 rounded-lg'>
        <img src={products.image} alt={products.name} className='w-full h-48 object-contain mb-4' />
            <h3 className='text-lg font-semibold text-emerald-500'>{products.name}</h3>
            <div className='flex justify-between'>
                <p className='text-gray-500 mb-1 '>{products.brand .charAt(0).toUpperCase() + products.brand.slice(1)} </p>
             <p className='text-gray-500 mb-1'> {products.color}</p>
            </div>
            <p className='text-gray-500 mb-1'>{products.ram} GB | {products.storage} GB</p>
            <p className='text-gray-500 mb-3'> {products.display}" Display </p>
            <div className='flex items-centr justify-between'>
                <div >
                    <p className='text-xl text-emerald-800 '>₹ {products.price}</p>
                    <p className='text-sm text-gray-500 line-through'>₹ {products.mrp}</p>
                    
                </div>
                <button onClick={()=> addToCart(products)} className='bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition' >Add to Cart</button>
            </div>

            {/* //https://m.media-amazon.com/images/I/31lh4tE5t7L._SX300_SY300_QL70_FMwebp_.jpg */}
        </div>
    );
};

export default ProductCard

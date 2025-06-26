import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";



function CartSidebar({ cartItems, isCartOpen, setisCartOpen, updateCartQuantity, removeFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div>
      <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-30 transform transition-transform         duration-300 translate-x-0 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className='p-4 h-full flex flex-col'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold text-emerald-700 '>Your Cart</h2>
            <button className='text-gray-600 hover:text-gray-800 text-4xl bg-emerald-400' onClick={() => setisCartOpen(false)}><FaRegWindowClose /></button>
          </div>
          {cartItems.length === 0 ? <div className='mt-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6B1bAACx28UdAF55QALEblH_bAlbrhbEqQ&s" alt="Empty Cart" />
            <p className='text-gray-600 text-center mt-10 '>Your Cart is empty</p>
            {/* continue to shopping button */}
            <button onClick={() => setisCartOpen(false)} className='mt-6 px-4 py-2 w-full bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition'>Continue to Shopping</button>


          </div> : <div className='mb-4'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex mb-4 '>
                <img src={item.image} className='w-16 h-16 object-contain mr-4' />
                <div className='flex-1' >
                  <h3 className='text-sm font-semibold mb-4 gap-5'>{item.name} ({item.color})</h3>
                  <p className='text-xs text-gray-500'> ₹ {item.price} X {item.quantity} </p>


                  <div className='flex justify-between items-center'>
                    <div className='flex items-center mt-2'>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className='px-2 py-1 bg-gray-200 rounded'>-</button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className='px-2 py-1 bg-gray-200 rounded'>+</button>

                    </div>
                    <button className='text-red-500 hover:text-red-700 text-3xl' onClick={() => removeFromCart(item.id)}><FaRegWindowClose /></button>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <p className='text-lg font-semibold'>Total: ₹ {totalPrice.toFixed(2)} </p>
              <button className='w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition mt-4' disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>
          </div>}

        </div>

      </div>
    </div>
  )
}

export default CartSidebar

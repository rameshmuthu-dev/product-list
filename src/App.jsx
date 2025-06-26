
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { products } from './components/Productdata'
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import MobileFilterOverlay from './components/MobileFilterOverlay';
import { Menu } from 'lucide-react';

function App() {


  // Extract  search to filter products
  const [search, setSearch] = useState('');

  // Initialize price range in products

  const [priceRange, setPriceRange] = useState([Math.min(...products.map((p) => p.price)), Math.max(...products.map((p) => p.price))]);

  // Extract unique brands names and sort 
  const [selectedBrands, setselectedBrands] = useState([]);
  // Extract unique RAM options 
  const [selectedRam, setselectedRam] = useState('');


  // Extract unique storage options
  const [selectedStorage, setselectedStorage] = useState('');


  const brands = [...new Set(products.map((p) => p.brand))].sort();

  // add a function in cart sidebar to add products to cart
  const [cartItems, setCartItems] = useState([]);

  // cart sidebar open and close  function
  const [isCartOpen, setisCartOpen] = useState(false);

  // filter sidebar open and close function
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  // Function to toggle mobile sidebar visibility
  const toggleMobileSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };




  // Function to add products to cart
  const addToCart = (products) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === products.id);
      if (existingItem) {
        //Need to Update Quantity only
        return prev.map((item) => (item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...products, quantity: 1 }]
    })
  };

  // Function to remove products from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to update quantity of products form cart
  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      //Remove Item
      removeFromCart(id);


    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  };






  // /*--------------------------Filterd Products-------------------------------------*
  const filteredProducts = products.filter((products => {

    const { name, brand, ram, storage, price, color } = products;

    // Normalize the search term 
    const normalizedSearch = search.toLowerCase().replace(/\s/g, '');

    //Prepare RAM and Storage strings for comparison
    const ramString = `${ram}GB`.toLowerCase().replace(/\s/g, '');
    const storageString = `${storage}GB`.toLowerCase().replace(/\s/g, '');


    const matchesSearch =
      name.toLowerCase().includes(normalizedSearch) ||
      brand.toLowerCase().includes(normalizedSearch) ||
      color.toLowerCase().includes(normalizedSearch) ||
      ramString.includes(normalizedSearch) ||
      storageString.includes(normalizedSearch);


    // check product matches selected brands
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);

    // check product price is within the selected range
    const matchesPrice = price >= priceRange[0] &&
      price <= priceRange[1];

    // check product matches selected RAM
    const matchesRam = !selectedRam || ram === selectedRam;

    // check product matches selected storage
    const matchesStorage = !selectedStorage || storage === selectedStorage;

    return matchesSearch && matchesBrand && matchesPrice && matchesRam && matchesStorage;

  }))

  // ---------------------------------------------------------------------------------------



  return (
    <div className='relative'>



      <Navbar search={search} setSearch={setSearch} cartItems={cartItems} setisCartOpen={setisCartOpen} onToggleSidebar={toggleMobileSidebar}isSidebarOpen={isSidebarOpen} />
      <div className='flex mt-16 '>


        {/* sidebar content for laptop and bg-screen mobile devices hidden */}
        <div className='hidden md:block'>

          <Sidebar brands={brands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            setselectedBrands={setselectedBrands}
            selectedRam={selectedRam}
            setselectedRam={setselectedRam}
            selectedStorage={selectedStorage}
            setselectedStorage={setselectedStorage}
            isSidebarOpen={isSidebarOpen}
            setisSidebarOpen={setisSidebarOpen}


          />

        </div> 
        {/* Mobile Filter Overlay (for mobile screens) */}
        <MobileFilterOverlay
          isOpen={isSidebarOpen}
          onClose={toggleMobileSidebar}
          brands={brands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBrands={selectedBrands}
          setselectedBrands={setselectedBrands}
          selectedRam={selectedRam}
          setselectedRam={setselectedRam}
          selectedStorage={selectedStorage}
          setselectedStorage={setselectedStorage}
        />




        <div className='   flex-1 bg-emerald-50 min-h-screen'>


          <div className=' max-w-7xl p-4 mx-auto'>

            <h1 className='text-2xl font-semibold  text-emerald-600 mb-8 mt-4'>Products({filteredProducts.length})</h1>


            {filteredProducts.length == 0 ? (<p className='text-center text-gray-600'>Products Not Available</p>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg '>
                {filteredProducts.map((products) => (
                  <ProductCard key={products.id} products={products} addToCart={addToCart} />
                ))}



              </div>)}


          </div>

        </div>
      </div>
      <CartSidebar cartItems={cartItems} isCartOpen={isCartOpen} setisCartOpen={setisCartOpen} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
    </div>



  )
}

export default App

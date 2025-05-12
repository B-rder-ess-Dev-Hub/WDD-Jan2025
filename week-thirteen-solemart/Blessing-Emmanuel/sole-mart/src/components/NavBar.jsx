const NavBar = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <>
        <nav className="py-8 flex justify-between items-center m-">
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
                )}
            </ul>
            <div className="flex items-center gap-2">
                <input type="text" placeholder="What are you looking for?"/>
                <img src="Vector 1.png" alt="" />
            </div>
            <div className="flex items-center pr-30 gap-9">
            <img src="Vector 2.png" alt="" />
            <img src="Cart 1.png" alt="" />
            </div>
        </nav> 
        <main>
            <section className="bg-gray-300 flex items-center justify-between font-bold py-4 m-15 rounded-3xl text-3xl">
            <div>
                <h1 className="m-10 text-blue-500">Grab Upto 5% Off On <br /> Selected Shoe</h1>
                <button className="m-10 bg-gray-700 text-white rounded-3xl p-1">Buy Now</button >
            </div>
            <div>
                <img src="image 1.png" alt="" />
            </div>
            </section>
            <br />
            <div className="flex items-center gap-5 text-center justify-center "> 
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Shoe type</button>
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Price</button>
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Size selection</button>
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Color</button>
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Material</button>
                <button className="bg-gray-200 rounded-3xl p-2 text-gray-800">Brand</button>
            </div>
            <div>
                
            </div>
        </main>
        </>

    )
}

export default NavBar

const NavBar = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <nav className="py-6 flex justify-between items-center">
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
                )}
            </ul>

            <div className="flex gap-5">

                <div className='bg-gray-300 relative w-full max-w-sm'>
                    <span className="absolute inset-y-0 right-0 pl-4 flex items-center">
                        <img src="/Google-Search.png" alt="search icon"/>
                    </span>
                    <input type="text" placeholder="What are you looking for?" className="pr-10 pl-4 pt-1 boreder rounded w-full"/>
                    
            
                </div>

                <img src="/Love-icon.png" alt="Love icon"/>
                <img src="/Cart.png" alt="Cart icon"/>
                
                
            </div>
        </nav>

       
    )
}

export default NavBar
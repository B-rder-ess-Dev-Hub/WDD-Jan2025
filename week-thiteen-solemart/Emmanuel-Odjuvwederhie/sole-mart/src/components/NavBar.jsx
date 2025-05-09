const NavBar = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <nav className="py-8 flex justify-between items-center">
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
                )}
            </ul>
            <div></div>
        </nav>
    )
}

export default NavBar
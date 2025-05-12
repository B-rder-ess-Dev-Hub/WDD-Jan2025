import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";


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

            <div className="flex gap-6 items-center"> 
                <div className="relative w-full max-w-md mx-auto">
                    
                    <input 
                    type="text" placeholder="What are you looking for? " 
                    className="rounded-[4px] py-[7px] px-[12px] pr-[32px] text-xs leading-[18px] font-normal text-black/50 bg-[#F5F5F5]"/>
                    <CiSearch className="absolute right-[20px] top-1/2 transform -translate-y-1/2 w-[20px] h-[20px]" />
                </div>
                <GrFavorite className="w-[32px] h-[32px]" />
                <IoCartOutline className="w-[32px] h-[32px]" />
            </div>
        </nav>
    )


}

export default NavBar
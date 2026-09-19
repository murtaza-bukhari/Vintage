import { Link } from "react-router";

import logo from '../../assets/logo.png'

const ShopHeader = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d7a953]/20 bg-[#1b0e07]/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
                <Link to='/' className="flex items-center gap-3">
                    <img src={logo} alt="Vintage logo" className="h-10 w-10 object-contain" />

                    <span className="flex flex-col">
                        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#d7a953]">
                            The Shop
                        </span>
                        <span className="font-serif text-2xl tracking-wide text-[#f5eee3] md:text-3xl">
                            Vintage
                        </span>
                    </span>
                </Link>

                <Link to="/shop/cart" className="text-[#f5eee3]">Cart</Link>
            </div>
        </header>
    );
};

export default ShopHeader;
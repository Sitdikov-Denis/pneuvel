"use client"
import Link from "next/link";
import { useState } from "react";
import Menu from "./MenuBurger";

const Header2 = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
        <div className="flex items-center justify-between bg-[#131212] text-white w-full fixed max-w-[1280px] z-10">
            <img className="mt-4 max-w-[150px] self-center" src="images/logo.png" alt="Pneuvel" />
            <div className="flex flex-wrap">
                <Link className="block px-5 py-0 bg-transparent border border-white h-max content-center rounded-[13px] leading-[26px] cursor-pointer font-ProximaNova font-semibold text-[13px] text-white mr-[15px] no-underline transition-all duration-300 ease-in-out min-h-[26px] mt-4 hover:brightness-50" href={`tel:${+749555555555}`} target="blank">
                    ПОЗВОНИТЬ
                </Link>
                <p className="mr-5 mt-4">8-800-200-00-00</p>
                <Link onClick={()=> setMenuActive(!menuActive)} className="transition-all duration-300 ease-in-out transform hover:brightness-50" href={"#"}>
                    <img src="/images/menu.svg" className="" />
                </Link>
            </div>
        </div>
        <Menu />
        </>
    )
}

export default Header2
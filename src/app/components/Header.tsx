import Link from "next/link";
import Navigation from "./Navigation";
import Icons from "./Icons";

const Header = (props: {
    className?: string
}) => {
    return (
        <header className="flex font-bold text-[14px] justify-between flex-wrap text-white">
            <img className="mt-4 max-w-[150px] mr-12 self-center" src="images/logo.png" alt="Pneuvel" />
            <div className="flex items-center whitespace-nowrap flex-wrap">
                <div className="flex flex-wrap">

                <Link className="block px-5 py-0 bg-transparent border border-white h-max content-center rounded-[13px] leading-[26px] cursor-pointer font-ProximaNova font-semibold text-[13px] text-white mr-[15px] no-underline transition-transform duration-500 ease-in-out min-h-[26px] mt-4 hover:brightness-50" href={`tel:${+749555555555}`} target="blank">
                    ПОЗВОНИТЬ
                </Link>
                <p className="mr-5 mt-4">8-800-200-00-00</p>
                </div>
               <Icons/>
            </div>
            <Navigation className="fixed"/>
        </header>
    )
}

export default Header
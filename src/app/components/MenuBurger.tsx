import NavigationItem from "./NavigationItem";

const Menu = (props: { className?: string, active?: boolean }) => {
    return (
        <div className="translate-x--full fixed max-w-[1280px] w-full h-[100vh] text-white backdrop-blur-sm top-[80px]">
            <div>
            <ul className="max-w-[1280px] w-full list-none flex flex-col ml-5">
                <NavigationItem link="/AboutUs">О КОМПАНИИ</NavigationItem>
                <NavigationItem>УСЛУГИ</NavigationItem>
                <NavigationItem>ГОТОВЫЕ РЕШЕНИЯ</NavigationItem>
                <NavigationItem>ИНТЕРНЕТ-МАГАЗИН</NavigationItem>
                <NavigationItem>ДОСТАВКА И ОПЛАТА</NavigationItem>
                <NavigationItem>КОНТАКТЫ</NavigationItem>
            </ul>
            </div>
        </div>
    )
}

export default Menu;
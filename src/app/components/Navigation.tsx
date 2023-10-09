import NavigationItem from "./NavigationItem";

const Navigation = (props: {className?: string}) => {
    return (
        <ul className="w-full grid list-none justify-between sm:grid-cols-1 md:grid-cols-3max lg:grid-cols-6max">
            <NavigationItem>О КОМПАНИИ</NavigationItem>
            <NavigationItem>УСЛУГИ</NavigationItem>
            <NavigationItem>ГОТОВЫЕ РЕШЕНИЯ</NavigationItem>
            <NavigationItem>ИНТЕРНЕТ-МАГАЗИН</NavigationItem>
            <NavigationItem>ДОСТАВКА И ОПЛАТА</NavigationItem>
            <NavigationItem>КОНТАКТЫ</NavigationItem>
        </ul>
    )
}

export default Navigation;
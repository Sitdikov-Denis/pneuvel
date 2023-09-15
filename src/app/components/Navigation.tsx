import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <ul className="w-full grid list-none justify-between sm:grid-cols-1 md:grid-cols-3max lg:grid-cols-6max">
            <NavigationItem children="О КОМПАНИИ"/>
            <NavigationItem children="УСЛУГИ" />
            <NavigationItem children="КАТАЛОГ ГОТОВЫХ РЕШЕНИЙ" />
            <NavigationItem children="ИНТЕРНЕТ-МАГАЗИН" />
            <NavigationItem children="ДОСТАВКА И ОПЛАТА" />
            <NavigationItem children="КОНТАКТЫ" />
        </ul>
    )
}

export default Navigation;
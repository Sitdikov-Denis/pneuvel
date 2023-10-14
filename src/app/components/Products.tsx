import Product from "./Product"

const Products = () => {
    return (
        <div className="flex flex-col mt-5 justify-center">
            <p className="text-white text-center">НАШИ КЛЮЧЕВЫЕ ПРОДУКТЫ И РЕШЕНИЯ</p>
            <div className="grid grid-cols-2 gap-6 mt-[30px]">
                <Product src={"images/BPV47.png"} alt={"BPV47"} text={"Шкаф с блоком подготовки и распределения воздуха. Позволяет компактно, в одном месте подготовить воздух для произвосдвенных целей."}/>
                <Product src={"images/Belfin67.png"} alt={"Belfin67"} text={"Шкаф с пневматикой и электрической частью. Силовая электрическая часть отвечает за управление двигателями, а пневматика - за упраление пневматическим оборудованием. Мозгами системы служит логический контроллер."}/>
                <Product src={"images/RV70.png"} alt={"BPV47"} text={"Панель распределения подачей очищненного воздуха. Все краны находятся в доступности, выходны из них аккуратно сосредоточены в одном месте. Панель позволяет вручную подключать или отключать потребители."}/>
                <Product src={"images/PNEUMATIC45.png"} alt={"Belfin67"} text={"Шкаф с множеством пневматических элементов, которые помещены компакто в одном корпусе. За счет того, что все элементы помещены в корпус, продлевается срок службы системы."}/>
            </div>
        </div>
    )
}

export default Products
const Product = () => {
    return (
        <div className="flex flex-col w-[300px] border rounded-[50px]">
            <img src="images/Product.png" alt="Product" width={300} height={300}/>
            <div className="bg-white">
            <p className="text-black p-2">Шкаф с блоком подготовки и распределения воздуха. Позволяет компактно, в одном месте подготовить воздух для произвосдвенных целей.</p>
            </div>
        </div>
    )
}

export default Product
const howWeWorkArray = [{
    src: "images/8.png",
    id: 1,
    alt: "15",
    text: "Только качественные комплектующие"
},
{
    src: "images/9.png",
    id: 2,
    alt: "16",
    text: "Оперативность и ответственность"
},
{
    src: "images/10.png",
    id: 3,
    alt: "17",
    text: "Работаем по договору"
},
{
    src: "images/11.png",
    id: 4,
    alt: "18",
    text: "Проектируем новые и восстанавливаем готовые системы"
},
{
    src: "images/12.png",
    id: 5,
    alt: "19",
    text: "Строгий контроль качества сборки шкафов"
},
{
    src: "images/13.png",
    id: 6,
    alt: "13",
    text: "Проектируем, собираем, программируем"
},
]

const Advantages = (props: {
    className?: string
}) => {
    return (
        <div className="flex flex-col mt-20">
            <p className="text-white text-center">НАШИ ПРЕИМУЩЕСТВА</p>
            <div className="flex flex-wrap mb-[30px] mt-[30px]">
                {howWeWorkArray.map((item, index) => (
                    <div key={index} className="flex text-[14px]">
                        <div className="flex flex-col mb-2">
                        <div className="flex h-[80px] align-center justify-center">
                            <img src={item.src} alt={item.alt} width={60} height={60} className="mr-[10px] flex self-center" />
                            
                        </div>
                        <p className="text-white w-[100px] mt-[10px]">{item.text}</p>
                        </div>
                        {index !== howWeWorkArray.length - 1 && (
                            <img src="/images/27.png" alt="arrow" width={50} height={25} className="mr-[10px] flex h-[22px] mt-8" />
                        )}
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Advantages
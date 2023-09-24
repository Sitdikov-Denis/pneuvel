import Image from "next/image"

const howWeWorkArray = [{
    src: "/images/icons/15.png",
    id: 1,
    alt: "15",
    text: "Отправление заявки на разработку"
},
{
    src: "/images/icons/16.png",
    id: 2,
    alt: "16",
    text: "Составление и согласование ТЗ по вашим данным"
},
{
    src: "/images/icons/17.png",
    id: 3,
    alt: "17",
    text: "Предоставление чертежа на согласование"
},
{
    src: "/images/icons/18.png",
    id: 4,
    alt: "18",
    text: "Предоставление КП"
},
{
    src: "/images/icons/19.png",
    id: 5,
    alt: "19",
    text: "Частичная или полная оплата счёта (ориентируемся на договор)"
},
{
    src: "/images/icons/20.png",
    id: 6,
    alt: "20",
    text: "Производство шкафа и его отгрузка"
},
]

const HowWeWork = () => {
    return (
<div className="flex flex-wrap mb-[30px] mt-[30px]">
      {howWeWorkArray.map((item, index) => (
        <div key={index} className="flex mr-[25px] mb-[107px]">
          <div className="flex flex-col h-[80px]">
            <Image src={item.src} alt={item.alt} width={60} height={60} className="flex self-center" />
            <p className="text-white w-[107px] mt-[10px]">{item.text}</p>
          </div>
          {index !== howWeWorkArray.length - 1 && (
            <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[25px] self-center" />
          )}
        </div>
      ))}
    </div>
    )
}

export default HowWeWork
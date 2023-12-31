const howWeWorkArray = [{
  src: "images/15.png",
  id: 1,
  alt: "15",
  text: "Отправление заявки на разработку"
},
{
  src: "images/16.png",
  id: 2,
  alt: "16",
  text: "Составление и согласование ТЗ по вашим данным"
},
{
  src: "images/17.png",
  id: 3,
  alt: "17",
  text: "Предоставление чертежа на согласование"
},
{
  src: "images/18.png",
  id: 4,
  alt: "18",
  text: "Предоставление КП"
},
{
  src: "images/19.png",
  id: 5,
  alt: "19",
  text: "Частичная или полная оплата счёта (ориентируемся на договор)"
},
{
  src: "images/20.png",
  id: 6,
  alt: "20",
  text: "Производство шкафа и его отгрузка"
},
]

const HowWeWork = (props: {
  className?: string
}) => {
  return (
      <div className="flex flex-col mt-20">
          <p className="text-white text-center">КАК МЫ РАБОТАЕМ</p>
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

export default HowWeWork
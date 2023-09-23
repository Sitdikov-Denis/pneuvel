import Image from "next/image"

const HowWeWork = () => {
    return (
        <div className="flex flex-wrap mb-[30px] mt-[30px]">
            <div className="flex mr-[30px] mb-[107px]">
                <div className="flex flex-col h-[80px]">
                    <Image src="/images/icons/15.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Отправление заявки на разработку</p>
                </div>
                <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[30px] self-center" />
            </div>

            <div className="flex mr-[30px] mb-[107px] ">
                <div className="flex flex-col h-[80px]">
                <Image src="/images/icons/16.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Составление и согласование ТЗ по вашим данным</p>
                </div>
                <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[30px] self-center" />
            </div>

            <div className="flex mr-[30px] mb-[107px]">
                <div className="flex flex-col h-[80px]">
                <Image src="/images/icons/17.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Предоставление чертежа на согласование</p>
                </div>
                <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[30px] self-center" />
            </div>

            <div className="flex mr-[30px] mb-[107px]">
                <div className="flex flex-col h-[80px]">
                <Image src="/images/icons/18.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Предоставление КП</p>
                </div>
                <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[30px] self-center" />
            </div>

            <div className="flex mr-[30px] mb-[107px]">
                <div className="flex flex-col h-[80px]">
                <Image src="/images/icons/19.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Частичная или полная оплата счёта (ориентируемся на договор)</p>
                </div>
                <Image src="/images/icons/27.png" alt="arrow" width={50} height={25} className="ml-[30px] self-center" />
            </div>

            <div className="flex mb-[107px] ">
                <div className="flex flex-col h-[80px]">
                <Image src="/images/icons/20.png" alt="15" width={60} height={60} className="flex self-center" />
                    <p className="text-white w-[107px] mt-[10px]">Производство шкафа и его отгрузка</p>
                </div>
                
            </div>
        </div>
    )
}

export default HowWeWork
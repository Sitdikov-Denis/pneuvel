const Product = (props: {
    src: string,
    alt: string,
    text: string
}) => {
    return (
        <div className="flex flex-col border rounded-[10px] w-[400px] h-auto bg-white">
            <img className="w-[400px] rounded-[10px]" src={props.src} alt={props.alt}/>
            <div className="bg-white rounded-[10px]">
            <p className="text-black p-2 ">{props.text}</p>
            </div>
        </div>
    )
}

export default Product
const Icon = (props: {
    src: string,
    alt: string
}) => {
    return (
        <img src={props.src} alt={props.alt} className="w-5 h-5 mr-2 transition-transform duration-500 ease-in-out transform hover:brightness-50"/>
    )
}
export default Icon
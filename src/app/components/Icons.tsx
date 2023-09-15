import Link from "next/link";
import Icon from "./Icon";

const Icons = () => {
    return (
        <div className="flex mt-4 ">
        <Link href={`tel:${+749555555555}`} target="blank">
            
            <Icon src="images/2.png" alt="phone"/>
        </Link>
        <Link href={`tg://resolve?domain=@begleiten`} target="blank">
            
            <Icon src="images/3.png" alt="telegram"/>
        </Link>
        <Link href={`https://wa.me/79260584903`} target="blank">
            
            <Icon src="images/4.png" alt="whatsapp"/>
        </Link>
        <Link href={`mailto:gagne79@yandex.ru`} target="blank">
            
            <Icon src="images/mail.png" alt="letter"/>
        </Link>
    </div>
    )
}

export default Icons;
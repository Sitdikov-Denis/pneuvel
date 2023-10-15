import Link from "next/link"

const NavigationItem = (props: {
    children: string;
    link?: string
}) => {
    return (
        <Link href={props.link || "#"}><li className="inline-block mt-4 text-left whitespace-nowrap items-end transition duration-600 ease-in-out hover:brightness-50">{props.children}</li></Link>
    )
}

export default NavigationItem
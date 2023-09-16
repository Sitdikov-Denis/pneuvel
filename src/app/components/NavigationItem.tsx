import Link from "next/link"

const NavigationItem = (props: {
    children: string}) => {
    return (
        <Link href="#"><li className="inline-block mt-4 text-left whitespace-nowrap items-end transition duration-600 ease-in-out hover:brightness-50">{props.children}</li></Link>
    )
}

export default NavigationItem
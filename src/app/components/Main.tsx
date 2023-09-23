import Header from "./Header"
import HowWeWork from "./HowWeWork";

const Main = () => {
    return (
        <div className="max-w-[1280px] flex min-h-screen flex-col items-center px-10">
            <Header />
            <HowWeWork/>
        </div>
    )
};

export default Main;
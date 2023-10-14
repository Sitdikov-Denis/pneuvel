import Advantages from "./Advantages";
import Header from "./Header"
import HowWeWork from "./HowWeWork";
import Products from "./Products";

const App = () => {
    return (
        <div className="max-w-[1280px] flex min-h-screen flex-col items-center px-20">
            <Header className="bg-black"/>
            <Advantages className="bg-black"/>
            <Products/>
            <HowWeWork className="bg-black"/>
        </div>
    )
};

export default App;
import Advantages from "./Advantages";
import Footer from "./Footer";
import Header from "./Header"
import HowWeWork from "./HowWeWork";
import Products from "./Products";

const App = () => {
    return (
        <div className="max-w-[1280px] flex min-h-screen flex-col items-center mobile:px-4 sm:px-20">
            <Header className="bg-black"/>
            <Advantages className="bg-black"/>
            <Products/>
            <HowWeWork className="bg-black"/>
            <Footer/>
        </div>
    )
};

export default App;
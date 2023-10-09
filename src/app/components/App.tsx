import Header from "./Header"
import HowWeWork from "./HowWeWork";
// import Product from "./Product";
import Products from "./Products";

const App = () => {
    return (
        <div className="max-w-[1280px] flex min-h-screen flex-col items-center px-20">
            <Header className="bg-black"/>
            <HowWeWork className="bg-black"/>
            <Products/>
        </div>
    )
};

export default App;
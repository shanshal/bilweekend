import backgroundImage from "./assets/bg1.jpg";
import './App.css';
import { Header } from "./Components/Header.jsx";
import { MyForm } from "./Components/MyForm.jsx";

function App() {
    return (
        <div className="relative bg-black overflow-x-hidden">
            {/* Background image */}
            <img src={backgroundImage} className=" opacity-65 absolute object-cover inset-0 z-0 w-full h-full" alt="Background" />

            {/* Content */}
            <div className="flex flex-col justify-center items-center relative z-10">
                <Header/>
                <MyForm />
            </div>
        </div>
    );
}

export default App;

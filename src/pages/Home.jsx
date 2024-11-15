import { Outlet } from "react-router-dom";
import Bg from "../components/bg";
import Categories from "../components/Categories";
import FindUsOn from "../components/FindUsOn";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Qzone from "../components/Qzone";
import SocialLogin from "../components/SocialLogin";

const Home = () => {


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="mt-2 grid md:grid-cols-12 gap-2">

                {/* left side */}
                <aside className=" border-2 md:col-span-3 border-orange-500 p-3">
                    <Categories></Categories>
                </aside>
                {/* center */}
                <section className=" md:col-span-6 border-2 border-red-600 p-3">
                    <Outlet></Outlet>
                </section>
                {/* right side  */}
                <aside className=" md:col-span-3 border-2 border-fuchsia-600 p-3">
                    <SocialLogin></SocialLogin>
                    <FindUsOn></FindUsOn>
                    <Qzone></Qzone>
                    <Bg></Bg>
                </aside>
            </main>

        </div>
    );
};

export default Home;
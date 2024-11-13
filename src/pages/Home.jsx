import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
                <aside className=" border-2 md:col-span-3 border-orange-500">
                    All Caterogy
                </aside>
                <section className=" md:col-span-6 border-2 border-red-600">
                    Dragon News Home
                </section>
                <aside className=" md:col-span-3 border-2 border-fuchsia-600">
                    Login With
                </aside>
            </main>

        </div>
    );
};

export default Home;
import FrameNavbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Frame ({children}) {
    return (
        <section id="frame">
            <FrameNavbar/>
            <section id="wrapper">
                <section id="page">
                    {children}
                </section>
                <Footer/>
            </section>
            <img src="/background.jpg" className="background"/>
        </section>
    );
}

export default Frame;

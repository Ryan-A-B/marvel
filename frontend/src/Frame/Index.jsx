import FrameNavbar from "./Navbar.jsx";
import Redirect from "../Comic/Redirect.jsx";
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
            <Redirect/>
            <img src="/background.jpg" className="background"/>
        </section>
    );
}

export default Frame;

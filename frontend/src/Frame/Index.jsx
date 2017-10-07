import FrameNavbar from "./Navbar.jsx";

function Frame ({children}) {
    return (
        <section id="frame">
            <FrameNavbar/>
            <section id="wrapper">
                {children}
            </section>
            <img src="/background.jpg" className="background"/>
        </section>
    );
}

export default Frame;

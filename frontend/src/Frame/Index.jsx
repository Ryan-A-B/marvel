import FrameNavbar from "./Navbar.jsx";

function Frame ({children}) {
    return (
        <section id="frame">
            <FrameNavbar/>
            <section id="wrapper">
                {children}
            </section>
        </section>
    );
}

export default Frame;

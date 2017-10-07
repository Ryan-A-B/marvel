import FrameNavbar from "./Navbar.jsx";

function Frame ({children}) {
    return (
        <section id="frame">
            <FrameNavbar/>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Frame;

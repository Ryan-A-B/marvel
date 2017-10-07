import CharacterSearch from "../Characters/Search.jsx";

function FrameNavbar (props) {
    const submit = () => {
        store.dispatch(ReactRouterRedux.push({pathname: "/"}));
    }

    return (
        <Navbar.Container className="navbar-dark bg-dark">
            <div className="container">
                <Navbar.Brand>
                    <img src="/marvel.svg" height="54"/>
                </Navbar.Brand>
                <Form.Form onSubmit={submit} className="form-inline">
                    <CharacterSearch placeholder="Search"/>
                    <Button.Submit>
                        Search
                    </Button.Submit>
                </Form.Form>
            </div>
        </Navbar.Container>
    );
}

export default FrameNavbar;

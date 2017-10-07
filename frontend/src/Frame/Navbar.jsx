import CharacterSearch from "../Characters/Search.jsx";

function FrameNavbar (props) {
    const submit = () => {
        store.dispatch(ReactRouterRedux.push({pathname: "/"}));
    }

    return (
        <Navbar.Container className="sticky-top navbar-dark bg-red">
            <div className="container">
                <Navbar.Brand>
                    <img src="/marvel.svg" height="54"/>
                </Navbar.Brand>
                <Form.Form onSubmit={submit} className="form-inline">
                    <CharacterSearch className="mr-sm-2" placeholder="Search"/>
                    <Button.Submit className="btn-dark">
                        Search
                    </Button.Submit>
                </Form.Form>
            </div>
        </Navbar.Container>
    );
}

export default FrameNavbar;

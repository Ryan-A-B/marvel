import CharacterSearch from "../Characters/Search.jsx";

function FrameNavbar (props) {
    const submit = () => {
        store.dispatch(ReactRouterRedux.push({pathname: "/"}));
    }

    return (
        <Navbar.Container className="sticky-top navbar-expand-sm navbar-light bg-red">
            <div className="container">
                <Navbar.Brand>
                    <img src="/marvel.svg" height="54"/>
                </Navbar.Brand>
                <Navbar.Toggle target="navbar-form"/>
                <Navbar.Collapse id="navbar-form">
                    <Form.Form onSubmit={submit} className="ml-auto">
                        <div className="form-row">
                            <div className="col">
                                <CharacterSearch className="mr-sm-2" placeholder="Search"/>
                            </div>
                            <div className="col-auto">
                                <Button.Submit className="btn-dark">
                                    Search
                                </Button.Submit>
                            </div>
                        </div>
                    </Form.Form>
                </Navbar.Collapse>
            </div>
        </Navbar.Container>
    );
}

export default FrameNavbar;

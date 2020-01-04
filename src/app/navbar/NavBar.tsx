import * as React from 'react';
import Nav from '../../components/nav/Nav';

const NavBar = () => {
    return (
        <Nav>
            <Nav.Header header="Kevin Mario Gerard" />
            <Nav.ItemsList>
                <Nav.Item label="Home" id="home" />
                <Nav.Item label="About" id="about" />
                <Nav.Item label="Tech Skills" id="techSkills" />
                <Nav.Item label="Contact" id="contact" />
            </Nav.ItemsList>
        </Nav>
    );
};

export default NavBar;

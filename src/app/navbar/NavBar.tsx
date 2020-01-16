import * as React from 'react';
import Shell from '../../components/shell/Shell';

const NavBar = () => {
    return (
        <Shell.Nav>
            <Shell.Nav.Header header="Kevin Mario Gerard" caption="Software Engineer" />
            <Shell.Nav.ItemsList>
                <Shell.Nav.Item label="Home" id="home" />
                <Shell.Nav.Item label="About" id="about" />
                <Shell.Nav.Item label="Tech Skills" id="techSkills" />
                <Shell.Nav.Item label="Contact" id="contact" />
            </Shell.Nav.ItemsList>
        </Shell.Nav>
    );
};

export default NavBar;

import * as React from 'react';
import Shell from '../../components/shell/Shell';
import Icon from '../../components/icon/Icon';
import Links from '../constants/Links';

const NavBar = () => {
    return (
        <Shell.Nav>
            <Shell.Nav.Header
                header="KEVIN MARIO GERARD"
                caption="Software Developer"
                profilePicSrc="/img/me.JPG"
                footerIcons={
                    <>
                        <Icon icon="fa-github" redirectionUrl={Links.githubUrl} />
                        <Icon icon="fa-linkedin" redirectionUrl={Links.linkedInUrl} />
                    </>
                }
            />
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

import * as React from 'react';
import Shell from '../../components/shell/Shell';
import IconButton from '../../components/button/IconButton';
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
                        <IconButton icon="fa-github" redirectionUrl={Links.githubUrl} />
                        <IconButton icon="fa-linkedin" redirectionUrl={Links.linkedInUrl} />
                    </>
                }
            />
            <Shell.Nav.ItemsList>
                <Shell.Nav.Item label="About Me" id="about_me" icon="fa fa-user-circle" />
                <Shell.Nav.Item label="Experience" id="experience" icon="fa fa-list-ul" />
                <Shell.Nav.Item label="Tech Skills" id="techSkills" icon="fa fa-code" />
                <Shell.Nav.Item label="Contact" id="contact" icon="fa fa-comments" />
            </Shell.Nav.ItemsList>
            <Shell.Nav.Footer>Designed & Built by Kevin Mario Gerard</Shell.Nav.Footer>
        </Shell.Nav>
    );
};

export default NavBar;

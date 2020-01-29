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
                <Shell.Nav.Item label="About" id="about" />
                <Shell.Nav.Item label="Experience" id="experience" />
                <Shell.Nav.Item label="Education" id="education" />
                <Shell.Nav.Item label="Tech Skills" id="techSkills" />
                <Shell.Nav.Item label="Contact" id="contact" />
                <Shell.Nav.Item label="Resume" id="resume" />
            </Shell.Nav.ItemsList>
        </Shell.Nav>
    );
};

export default NavBar;

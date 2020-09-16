import * as React from 'react';
import ProfilePic, { ProfilePicProps } from '../profilePic/ProfilePic';

type NavHeaderProps = {
    /**
     * Nav Header label to render
     */
    header: string;

    /**
     * Nav Header caption to render
     */
    caption?: string;

    /**
     * Nav footer icon buttons to render
     */
    footerIcons?: React.ReactNode;
} & ProfilePicProps;

const NavHeader: React.FC<NavHeaderProps> = ({
    header = '',
    caption,
    profilePicSrc,
    footerIcons,
}) => (
    <div className="nav__header">
        <ProfilePic profilePicSrc={profilePicSrc} />
        <header>{header}</header>
        {caption ? (
            <div className="nav__header__caption">
                <span>{caption}</span>
            </div>
        ) : null}
        {footerIcons ? <div className="nav__header__footer">{footerIcons}</div> : null}
    </div>
);

NavHeader.displayName = 'Nav.Header';

const NavItemsList: React.FC = props => <div className="nav__items-list">{props.children}</div>;

NavItemsList.displayName = 'Nav.ItemsList';

type NavItemProps = {
    /**
     * Nav Item Label
     */
    label: string;

    /**
     * Nav Item id
     */
    id: string;

    /**
     * Nav Item icon
     */
    icon?: string;
};

const NavItem: React.FC<NavItemProps> = ({ label = '', id = '', icon = '' }) => {
    const onClick = React.useCallback(() => {
        var element = document.getElementById(id);
        element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, [id]);

    return (
        <div className="nav__item" onClick={onClick}>
            <i className={`nav__item__icon ${icon}`} />
            <label>{label}</label>
        </div>
    );
};

NavItem.displayName = 'Nav.Item';

const NavFooter: React.FC = ({ children }) => <footer className="nav__footer">{children}</footer>;

NavFooter.displayName = 'Nav.Footer';

type Statics = {
    Header: typeof NavHeader;
    Item: typeof NavItem;
    ItemsList: typeof NavItemsList;
    Footer: typeof NavFooter;
};

const Nav: React.FC & Statics = props => <nav className="shell__nav">{props.children}</nav>;

Nav.displayName = 'Nav';

Nav.Header = NavHeader;
Nav.ItemsList = NavItemsList;
Nav.Item = NavItem;
Nav.Footer = NavFooter;

export default Nav;

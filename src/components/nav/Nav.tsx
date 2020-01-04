import * as React from 'react';

type NavHeaderProps = {
    header: string;
};

const NavHeader: React.FC<NavHeaderProps> = ({ header = '' }) => (
    <div className="nav__header">
        <header>{header}</header>
    </div>
);

NavHeader.displayName = 'Nav.Header';

const NavItemsList: React.FC = props => <div className="nav__items-list">{props.children}</div>;

NavItemsList.displayName = 'Nav.ItemsList';

type NavItemProps = {
    label: string;
    id: string;
};

const NavItem: React.FC<NavItemProps> = ({ label = '', id = '' }) => (
    <div className="nav__item">
        <a href={`#${id}`}>{label}</a>
    </div>
);

NavItem.displayName = 'NavItem';

type Statics = {
    Header: typeof NavHeader;
    Item: typeof NavItem;
    ItemsList: typeof NavItemsList;
};

const Nav: React.FC & Statics = props => (
    <nav className="nav__bar">
        <div className="container">{props.children}</div>
    </nav>
);

Nav.Header = NavHeader;
Nav.ItemsList = NavItemsList;
Nav.Item = NavItem;

export default Nav;

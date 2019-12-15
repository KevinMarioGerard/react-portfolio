import * as React from 'react';

type NavItemProps = {
    label: string;
    id: string;
};

type NavHeaderProps = {
    header: string;
};

type NavSubComponents = {
    Header: React.FC<NavHeaderProps>;
    Item: React.FC<NavItemProps>;
    ItemsList: React.FC;
};

const Nav: React.FC & NavSubComponents = props => (
    <nav className="nav__bar">
        <div className="container">{props.children}</div>
    </nav>
);

const NavHeader: React.FC<NavHeaderProps> = props => {
    const { header = "" } = props;

    return (
        <div className="nav__header">
            <header>{header}</header>
        </div>
    )
};

NavHeader.displayName = "Nav.Header";

const NavItemsList: React.FC = props => (
    <div className="nav__items-list">
        {props.children}
    </div>
);

NavItemsList.displayName = "Nav.ItemsList";

const NavItem: React.FC<NavItemProps> = props => {
    const { label = '', id = "" } = props;

    return (
        <div className="nav__item">
            <a href={`#${id}`}>{label}</a>
        </div>
    );
};

NavItem.displayName = 'NavItem';

Nav.Header = NavHeader;
Nav.ItemsList = NavItemsList;
Nav.Item = NavItem;

export default Nav;

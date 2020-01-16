import * as React from 'react';
import Nav from '../nav/Nav';
import Main from './Main';

type Statics = {
    Nav: typeof Nav;
    Main: typeof Main;
};

const Shell: React.FC & Statics = props => <div className="shell">{props.children}</div>;

Shell.Nav = Nav;
Shell.Main = Main;

export default Shell;

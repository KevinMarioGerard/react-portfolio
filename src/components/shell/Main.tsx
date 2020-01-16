import * as React from 'react';

const Main: React.FC = props => <main className="shell__main">{props.children}</main>;

Main.displayName = 'Shell.Main';

export default Main;

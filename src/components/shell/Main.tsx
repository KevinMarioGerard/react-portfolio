import * as React from 'react';

const Main: React.FC = props => (
    <main className="shell__main">
        <div className="shell__main__container">{props.children}</div>
    </main>
);

Main.displayName = 'Shell.Main';

export default Main;

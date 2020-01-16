import * as React from 'react';
import NavBar from './navbar/NavBar';
import Shell from '../components/shell/Shell';

const App = () => {
    return (
        <Shell>
            <NavBar />
            <Shell.Main>
            </Shell.Main>
        </Shell>
    );
};

export default App;

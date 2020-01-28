import * as React from 'react';
import NavBar from './navbar/NavBar';
import Main from './main/Main';
import Shell from '../components/shell/Shell';

const App = () => {
    return (
        <Shell>
            <NavBar />
            <Main />
        </Shell>
    );
};

export default App;

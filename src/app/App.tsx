import * as React from 'react';
import NavBar from './navbar/NavBar';
import Main from './main/Main';
import Shell from '../components/shell/Shell';
import PageUnderConstruction from './pageUnderConstruction/PageUnderConstruction';

const App = () => {
    return (
        <>
            <PageUnderConstruction />
            <Shell>
                <NavBar />
                <Main />
            </Shell>
        </>
    );
};

export default App;

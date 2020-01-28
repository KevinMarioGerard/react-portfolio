import * as React from 'react';
import Overlay from '../../components/overlay/Overlay';
import './PageUnderConstruction.scss';

const PageUnderConstruction = () => (
    <Overlay>
        <div className="underConstruction__container">
            <div className="underConstruction__content">Page Under Construction!!!</div>
        </div>
    </Overlay>
);

export default PageUnderConstruction;

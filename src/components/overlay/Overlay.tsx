import * as React from 'react';

const Overlay: React.FC = props => (
    <>
        <div className="overlay">
            <div className="overlay__content">{props.children}</div>
        </div>
    </>
);

export default Overlay;

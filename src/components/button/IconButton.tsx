import * as React from 'react';

type IconButtonProps = {
    icon: string;
    redirectionUrl: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon = '', redirectionUrl = '' }) => (
    <div
        className="icon icon__container"
        onClick={React.useCallback(() => {
            window.open(redirectionUrl);
        }, [redirectionUrl])}>
        <i className={`fa ${icon}`} />
    </div>
);

export default IconButton;

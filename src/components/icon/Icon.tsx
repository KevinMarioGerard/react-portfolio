import * as React from 'react';

type IconProps = {
    icon: string;
    redirectionUrl: string;
};

const Icon: React.FC<IconProps> = ({ icon = '', redirectionUrl = '' }) => (
    <div
        className="icon icon__container"
        onClick={React.useCallback(() => {
            window.open(redirectionUrl);
        }, [redirectionUrl])}>
        <i className={`fa ${icon}`} />
    </div>
);

export default Icon;

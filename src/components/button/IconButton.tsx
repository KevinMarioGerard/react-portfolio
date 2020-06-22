import * as React from 'react';

type IconButtonProps = {
    /**
     * Icon to render
     */
    icon: string;

    /**
     * Redirection url on button click
     */
    redirectionUrl: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, redirectionUrl, ...rest }) => (
    <div
        className="icon icon__container"
        onClick={React.useCallback(() => {
            window.open(redirectionUrl);
        }, [redirectionUrl])}
        {...rest}>
        <i className={`fa ${icon}`} />
    </div>
);

export default IconButton;

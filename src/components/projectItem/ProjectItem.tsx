import * as React from 'react';
import IconButton, { IconButtonProps } from '../button/IconButton';

type ProjectItemProps = {
    /**
     * Project title
     */
    title: string;

    /**
     * Project description
     */
    description: string;

    /**
     * Project tech list
     */
    techList?: Array<string>;

    /**
     * Footer icon buttons
     */
    footerButtons?: Array<IconButtonProps>;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
    title,
    description,
    techList = [],
    footerButtons = [],
}) => (
    <div className="project__item">
        <h3 className="project__item__header">{title}</h3>
        <div className="project__item__description">{description}</div>
        <ul className="project__tech__list">
            {techList.map(tech => (
                <li>
                    <span>{tech}</span>
                </li>
            ))}
        </ul>
        <footer className="project__item__footer">
            {footerButtons.map(button => (
                <IconButton {...button} />
            ))}
        </footer>
    </div>
);

export default ProjectItem;

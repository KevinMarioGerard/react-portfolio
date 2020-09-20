import * as React from 'react';
import ExperienceContext from './ExperienceContext';

type ExperienceTabProps = {
    /**
     * Experience tab id
     */
    id: string;

    /**
     * Experience tab label
     */
    label: string;
};

const ExperienceTab: React.FC<ExperienceTabProps> = ({ id, label }) => {
    const { selected, setSelected } = React.useContext(ExperienceContext);

    const onClick = React.useCallback(() => {
        setSelected(id);
    }, [id, setSelected]);

    return (
        <div
            className={`experience__tab ${id === selected ? 'experience__tab--selected' : ''}`}
            onClick={onClick}
            id={id}
            key={id}>
            <span>{label}</span>
        </div>
    );
};

ExperienceTab.displayName = 'Experience.Tab';

type ExperienceTabsProps = {
    /**
     * Experience tab initial selection
     */
    initial?: string;
};

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ children, initial }) => {
    const { setSelected } = React.useContext(ExperienceContext);

    React.useEffect(() => {
        if (initial) {
            setSelected(initial);
        }
    }, []);

    return (
        <div className="experience__tabs">
            <div className="experience__tabs__container">{children}</div>
        </div>
    );
};

ExperienceTabs.displayName = 'Experience.Tabs';

export { ExperienceTabs, ExperienceTab };

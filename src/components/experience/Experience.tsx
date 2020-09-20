import * as React from 'react';
import ExperienceContext, { SelectedState } from './ExperienceContext';
import { ExperienceTabs, ExperienceTab } from './ExperienceTabs';
import ExperienceItem from './ExperienceItem';

type ExperienceContentProps = {
    /**
     * id mapped to experience tab.
     */
    id: string;
};

const ExperienceContent: React.FC<ExperienceContentProps> = ({ children, id }) => {
    const { selected } = React.useContext(ExperienceContext);

    return (
        <>
            {id === selected ? (
                <div className="experience__content__container" id={id}>
                    {children}
                </div>
            ) : null}
        </>
    );
};

ExperienceContent.displayName = 'Experience.Content';

type Statics = {
    Content: typeof ExperienceContent;

    Tabs: typeof ExperienceTabs;

    Tab: typeof ExperienceTab;

    Item: typeof ExperienceItem;
};

const Experience: React.FC & Statics = ({ children }) => {
    const [selected, setSelected] = React.useState<SelectedState>(null);

    return (
        <div className="experience__container">
            <ExperienceContext.Provider value={{ selected, setSelected }}>
                {children}
            </ExperienceContext.Provider>
        </div>
    );
};

Experience.displayName = 'Experience';

Experience.Content = ExperienceContent;
Experience.Item = ExperienceItem;
Experience.Tabs = ExperienceTabs;
Experience.Tab = ExperienceTab;

export default Experience;

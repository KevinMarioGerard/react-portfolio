import * as React from 'react';

export type SelectedState = string | null;

type ExperienceContextValue = {
    /**
     * Selected experience tab state
     */
    selected: SelectedState;

    /**
     * Set selected experience tab state
     */
    setSelected: (state: string) => void;
};

const ExperienceContext = React.createContext<ExperienceContextValue>({
    selected: null,
    setSelected: () => null,
});

export default ExperienceContext;

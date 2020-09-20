import { render, fireEvent, getByText } from '@testing-library/react';
import Experience from '../Experience';
import * as React from 'react';
import ExperienceContext, { SelectedState } from '../ExperienceContext';

const TestExperienceTabs = () => {
    const [selected, setSelected] = React.useState<SelectedState>(null);

    return (
        <ExperienceContext.Provider value={{ selected, setSelected }}>
            <Experience.Tabs initial="test1">
                <Experience.Tab id="test1" label="Tab 1" />
                <Experience.Tab id="test2" label="Tab 2" />
                <Experience.Tab id="test3" label="Tab 3" />
            </Experience.Tabs>
        </ExperienceContext.Provider>
    );
};

describe('Experience Tabs Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<TestExperienceTabs />);
        }).not.toThrow();
    });

    it('should match snapshot with initial selection', () => {
        const { container } = render(<TestExperienceTabs />);

        expect(container).toMatchSnapshot();
    });

    it('should update content on click', () => {
        const { container } = render(<TestExperienceTabs />);

        fireEvent.click(getByText(container, 'Tab 3'));

        expect(container).toMatchSnapshot();
    });
});

describe('Experience Tab Component tests', () => {
    it('should set selected state on click', () => {
        let selected = null;
        const setSelected = jest.fn(value => {
            selected = value;
        });

        const { container } = render(
            <ExperienceContext.Provider value={{ selected, setSelected }}>
                <Experience.Tab id="test2" label="Tab 2" />
            </ExperienceContext.Provider>
        );

        expect(selected).toBeNull();

        fireEvent.click(getByText(container, 'Tab 2'));

        expect(setSelected).toHaveBeenCalledTimes(1);
        expect(selected).toBe('test2');
    });
});

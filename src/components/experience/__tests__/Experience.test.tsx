import { render, fireEvent, getByText } from '@testing-library/react';
import Experience from '../Experience';
import * as React from 'react';

const TestExperience = () => (
    <Experience>
        <Experience.Tabs initial="test1">
            <Experience.Tab id="test1" label="Tab 1" />
            <Experience.Tab id="test2" label="Tab 2" />
            <Experience.Tab id="test3" label="Tab 3" />
        </Experience.Tabs>
        <Experience.Content id="test1">
            <Experience.Item
                title="Associate Software Engineer"
                company="Test 1"
                startDate="July 2019"
                endDate="Present"
                description={['description line 1', 'description line 2']}
            />
        </Experience.Content>
        <Experience.Content id="test2">
            <Experience.Item
                title="Software Engineer"
                company="Test 2"
                startDate="July 2019"
                endDate="Present"
                description={['description line 1', 'description line 2']}
            />
        </Experience.Content>
        <Experience.Content id="test3">
            <Experience.Item
                title="Full Stack Developer"
                company="Test 3"
                startDate="July 2019"
                endDate="Present"
                description={['description line 1', 'description line 2']}
            />
        </Experience.Content>
    </Experience>
);

describe('Experience Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<TestExperience />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<TestExperience />);

        expect(container).toMatchSnapshot();
    });

    it('should update content on click', () => {
        const { container } = render(<TestExperience />);

        fireEvent.click(getByText(container, 'Tab 3'));

        expect(container).toMatchSnapshot();
    });
});

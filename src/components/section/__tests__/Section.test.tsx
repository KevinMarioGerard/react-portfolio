import { render } from '@testing-library/react';
import Section from '../Section';
import * as React from 'react';

describe('Section Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Section id="id1" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<Section id="id1" />);

        expect(container).toMatchSnapshot();
    });
});

describe('Section Header Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Section.Header title="Section Title" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<Section.Header title="Section Title" />);

        expect(container).toMatchSnapshot();
    });
});

describe('Section Content Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Section.Content />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<Section.Content>Mock Section content</Section.Content>);

        expect(container).toMatchSnapshot();
    });
});

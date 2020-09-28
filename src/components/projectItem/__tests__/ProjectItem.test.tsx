import { render } from '@testing-library/react';
import ProjectItem from '../ProjectItem';
import * as React from 'react';

const TestComponent = () => (
    <ProjectItem
        title="React Portfolio"
        description="My personal portfolio website I designed and built. Learned quite a bit about UI development, SEO, etc."
        techList={['ReactJS', 'Typescript', 'SCSS']}
        footerButtons={[{ icon: 'fa-github', redirectionUrl: 'mockUrl' }]}
    />
);

describe('Project Item Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<TestComponent />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<TestComponent />);

        expect(container).toMatchSnapshot();
    });
});

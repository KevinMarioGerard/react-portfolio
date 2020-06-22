import { render } from '@testing-library/react';
import Shell from '../Shell';
import * as React from 'react';

describe('Shell Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(
                <Shell>
                    <Shell.Nav />
                    <Shell.Main />
                </Shell>
            );
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <Shell>
                <Shell.Nav />
                <Shell.Main />
            </Shell>
        );

        expect(container).toMatchSnapshot();
    });
});

import { render } from '@testing-library/react';
import Overlay from '../Overlay';
import * as React from 'react';

describe('Overlay Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Overlay />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <Overlay>
                <div>Overlay Content</div>
            </Overlay>
        );

        expect(container).toMatchSnapshot();
    });
});

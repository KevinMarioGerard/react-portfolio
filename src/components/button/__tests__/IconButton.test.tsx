import { render, fireEvent } from '@testing-library/react';
import IconButton from '../IconButton';
import * as React from 'react';

describe('Icon Button Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<IconButton icon="" redirectionUrl="" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<IconButton icon="fa-github" redirectionUrl="" />);

        expect(container).toMatchSnapshot();
    });

    it('should redirect on click', () => {
        window.open = jest.fn();

        const { getByTestId } = render(
            <IconButton data-testid="icon-button" icon="fa-github" redirectionUrl="test-url.com" />
        );

        fireEvent.click(getByTestId('icon-button'));

        expect(window.open).toHaveBeenCalledWith('test-url.com');
    });
});

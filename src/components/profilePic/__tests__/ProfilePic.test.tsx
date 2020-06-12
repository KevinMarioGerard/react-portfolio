import { render } from '@testing-library/react';
import ProfilePic from '../ProfilePic';
import * as React from 'react';

describe('Profile Pic Component tests', () => {

    it('should render without errors', () => {
        expect(() => {
            render(<ProfilePic profilePicSrc="test-image" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<ProfilePic profilePicSrc="test-image" />);

        expect(container).toMatchSnapshot();
    });
});
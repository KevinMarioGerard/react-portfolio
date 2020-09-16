import { render } from '@testing-library/react';
import * as React from 'react';
import Nav from '../Nav';
import IconButton from '../../button/IconButton';

describe('Nav Header Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Nav.Header header="Test Header" profilePicSrc="test-image" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <Nav.Header header="Test Header" caption="Test Caption" profilePicSrc="test-image" />
        );

        expect(container).toMatchSnapshot();
    });

    it('should render footer icons', () => {
        const { container } = render(
            <Nav.Header
                header="Test Header"
                caption="Test Caption"
                profilePicSrc="test-image"
                footerIcons={
                    <>
                        <IconButton icon="fa-github" redirectionUrl="test-github-url" />
                        <IconButton icon="fa-linkedin" redirectionUrl="test-linkedin-url" />
                    </>
                }
            />
        );

        expect(container).toMatchSnapshot();
    });
});

describe('Nav Items List Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(
                <Nav.ItemsList>
                    <Nav.Item label="Test" id="test" />
                </Nav.ItemsList>
            );
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(
            <Nav.ItemsList>
                <Nav.Item label="Test" id="test" />
            </Nav.ItemsList>
        );

        expect(container).toMatchSnapshot();
    });
});

describe('Nav Item Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Nav.Item label="Test" id="test" />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<Nav.Item label="Test" id="test" />);

        expect(container).toMatchSnapshot();
    });
});

describe('Nav Footer Component tests', () => {
    it('should render without errors', () => {
        expect(() => {
            render(<Nav.Footer />);
        }).not.toThrow();
    });

    it('should match snapshot', () => {
        const { container } = render(<Nav.Footer>Test Navigation Footer</Nav.Footer>);

        expect(container).toMatchSnapshot();
    });
});

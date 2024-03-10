import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from "@jest/globals";
import Box from '../src/box';

describe('Box Component', () => {
    test('should render children', () => {
        render(<Box>Test</Box>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('should apply data-space attribute', () => {
        const testSpaceValue = '1';
        render(<Box space={testSpaceValue}>Test</Box>);
        screen.debug();
        const box = screen.getByText('Test').closest('div');
        expect(box).toHaveAttribute('data-space', testSpaceValue);
    });

    test('should apply data-border attribute', () => {
        const testBorderValue = 'thin';
        render(<Box border={testBorderValue}>Test</Box>);
        screen.debug();
        const box = screen.getByText('Test').closest('div');
        expect(box).toHaveAttribute('data-border', testBorderValue);
    });

    test('does not apply data-space or data-border attributes when not provided', () => {
        render(<Box>Test</Box>);
        const box = screen.getByText('Test').closest('div');
        expect(box).not.toHaveAttribute('data-space');
        expect(box).not.toHaveAttribute('data-border');
    });

    test('passes additional props to the div element', () => {
        const title = "Box Title";
        render(<Box title={title}>Test</Box>);
        const box = screen.getByText('Test').closest('div');
        expect(box).toHaveAttribute('title', title);
    });

    test('applies the correct class to the box', () => {
        render(<Box>Test</Box>);
        const box = screen.getByText('Test').closest('div');
        expect(box).toHaveClass('box');
    });

    test('renders multiple children correctly', () => {
        render(
            <Box>
                <span>Child 1</span>
                <span>Child 2</span>
            </Box>
        );
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    test('applies custom styles when provided', () => {
        const customStyles = { backgroundColor: 'blue' };
        render(<Box style={customStyles}>Test</Box>);
        const box = screen.getByText('Test').closest('div');
        expect(box).toHaveStyle('background-color: blue');
    });
    // Other tests...
});

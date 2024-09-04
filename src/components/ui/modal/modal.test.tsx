import { render, fireEvent } from '@testing-library/react';
import Modal from './index';
import { describe, it, expect, vi } from 'vitest'

describe('Modal Component', () => {
    const mockOnClose = vi.fn()
    const mockOnConfirm = vi.fn()

    it('renders correctly when open', () => {
        const { getByText } = render(
            <Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="two-buttons">
                <p>Modal Content</p>
            </Modal>
        );
        expect(getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        const { queryByText } = render(
                <Modal isOpen={false} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="two-buttons">
                <p>Modal Content</p>
            </Modal>
        );
        expect(queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('calls onClose when the Escape key is pressed', () => {
         render(
            <Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="two-buttons">
                <p>Modal Content</p>
            </Modal>
        );
        fireEvent.keyDown(window, { key: 'Escape' });
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('calls onClose when Cancel button is clicked', () => {
        const { getByText } = render(
            <Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="two-buttons">
                <p>Modal Content</p>
            </Modal>
        );
        fireEvent.click(getByText('Cancel'));
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('calls onConfirm when Confirm button is clicked', () => {
        const { getByText } = render(
            <Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="two-buttons">
                <p>Modal Content</p>
            </Modal>
        );
        fireEvent.click(getByText('Confirm'));
        expect(mockOnConfirm).toHaveBeenCalled();
    });

    it('renders correctly with one-button variant', () => {
        const { getByText } = render(
            <Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} variant="one-button">
                <p>Custom Modal Content</p>
            </Modal>
        );
        expect(getByText('Custom Modal Content')).toBeInTheDocument();
        fireEvent.click(getByText('Confirm'));
        expect(mockOnClose).toHaveBeenCalled();
    });
});
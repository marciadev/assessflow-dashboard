import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '@/App';

describe('AssessmentCard Integration', () => {
    it('should show AssessmentDetail when "View Details" is clicked in the card', () => {

        const { container } = render(<App />);

        const mobileContainer = container.querySelector('.block.md\\:hidden');
        if (!mobileContainer) throw new Error('Mobile container not found');

        const cardButton = within(mobileContainer as HTMLElement).getAllByRole('button', { name: /view details/i })[0];

        fireEvent.click(cardButton);

        const detailHeading = screen.getByRole('heading', { name: /assessment details/i });
        expect(detailHeading).toBeInTheDocument();

        expect(screen.getByText("Assessment Information")).toBeInTheDocument();
    });
});

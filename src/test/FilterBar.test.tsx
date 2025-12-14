import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

describe('FilterBar Integration', () => {
    it('should filter assessments by search query', async () => {
        const user = userEvent.setup();
        render(<App />);

        const searchInput = screen.getByPlaceholderText(/search patients or assessments/i);
        await user.type(searchInput, 'Emily');

        await waitFor(() => {
            const emilyElements = screen.getAllByText('Emily Martinez');
            expect(emilyElements.length).toBeGreaterThan(0);
        });

        await waitFor(() => {
            expect(screen.queryByText('James Chen')).not.toBeInTheDocument();
        });
    });
});

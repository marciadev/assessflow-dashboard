import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

describe('Pagination Integration', () => {
    it('should display 5 items per page and navigate correctly', async () => {
        const user = userEvent.setup({ pointerEventsCheck: 0 });
        render(<App />);

        expect(screen.getByText(/Showing 1-5 of/i)).toBeInTheDocument();

        expect(screen.getAllByText('Emily Martinez').length).toBeGreaterThan(0);

        expect(screen.queryByText('David Kim')).not.toBeInTheDocument();

        const page2Button = screen.getByRole('button', { name: '2' });
        await user.click(page2Button);

        await waitFor(() => {
            expect(screen.getByText(/Showing 6-10 of/i)).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getAllByText('David Kim').length).toBeGreaterThan(0);
        });

        await waitFor(() => {
            expect(screen.queryByText('Emily Martinez')).not.toBeInTheDocument();
        });
    });
});

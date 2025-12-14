import { render, screen } from '@testing-library/react';
import PageHeader from '@/components/layout/PageHeader';

describe('PageHeader', () => {
    it('should render the heading with text "Assessments"', () => {
        render(<PageHeader />);

        const heading = screen.getByRole('heading', {
            name: /assessments/i,
            level: 1
        });

        expect(heading).toBeInTheDocument();
    });

    it('should render a button with text "New Assessment"', () => {
        render(<PageHeader />);

        const button = screen.getByRole('button', {
            name: /new assessment/i
        });

        expect(button).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

test("shows app title", () => {
    render(<Header />);
    expect(screen.getByText(/AssessFlow/i)).toBeInTheDocument();
});

test("shows navigation links", () => {
    render(<Header />);

    const navLinks = ["Dashboard", "Patients", "Reports", "Settings"];

    navLinks.forEach(linkText => {
        const link = screen.getByRole('link', { name: new RegExp(linkText, 'i') });
        expect(link).toBeInTheDocument();
    });
});

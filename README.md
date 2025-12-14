# AssessFlow Dashboard

A responsive, mobile-first interface for managing psychological assessments.
This project simulates a real feature from a clinical software platform, providing clinicians with tools to review, filter, and analyze patient assessments in an accessible and modern dashboard.

## Technologies

-   **Core**: React 19, TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS, CSS Variables
-   **Testing**: Vitest, React Testing Library
-   **Icons**: Lucide React

## Libraries

-   **UI Components**: Shadcn UI
-   **Utilities**: `clsx`, `tailwind-merge`

## Main Functionalities

-   **Dashboard Overview**: Key statistics about assessments (Total, Completed, In Progress, Active Patients).
-   **Responsive Layout**:
    -   **Desktop**: Detailed table view with sorting and actions.
    -   **Mobile**: Card-based view optimized for smaller screens.
-   **Advanced Filtering**:
    -   Real-time search by patient name or ID.
    -   Filter by Assessment Status (Completed, In Progress, etc.).
    -   Filter by Assessment Type (MMPI-2, Beck Depression Inventory, etc.).
-   **Pagination**: Efficient navigation through large datasets.
-   **Assessment Details**: Slide-over panel displaying detailed scores, subscales, and clinician notes without leaving the main context.
-   **Visualizations**: Score visualization with color-coded gauges and progress bars.

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/marciadev/assessflow-dashboard.git
    cd assessflow-dashboard
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

4.  **Run Tests**
    To execute the test suite:
    ```bash
    npm test
    ```

## Approach

The project was built with a **mobile-first** mindset, ensuring that the interface is fully functional and aesthetically pleasing on all device sizes.

-   **Component Architecture**: The application is broken down into small, reusable components (e.g., `AssessmentCard`, `AssessmentTable`, `FilterBar`) to maintain clean and manageable code.
-   **Separation of Concerns**: Logic for filtering and pagination is separated from the UI components, making the code easier to test and maintain.
-   **Design System**: A consistent design system was implemented using Tailwind CSS and CSS variables for colors and spacing, ensuring visual consistency across the app.
-   **Accessibility**: Semantic HTML and ARIA attributes (via Radix UI) were prioritized to ensure the dashboard is accessible.

## Assumptions & Decisions

-   **State Management**: Given the scope, I opted for local React state (`useState`) instead of a global state management library like Redux, as the application state (filters, pagination) is contained within the dashboard view.
-   **Testing Strategy**: I focused on integration tests for the main user flows (Filtering, Pagination, Viewing Details) to ensure the features work as expected from a user's perspective.

## Time Spent

Approximately 8 hours were spent on this project, covering:
-   Initial setup and configuration.
-   Component development and styling.
-   Responsive design implementation.
-   Logic implementation (filtering, pagination).
-   Testing setup and writing test cases.
-   Refactoring and polish.
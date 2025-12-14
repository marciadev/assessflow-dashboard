import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText } from "lucide-react";

function Header() {
  return (
    <header className="w-full border-b border-[var(--color-gray-200)] bg-white px-[var(--space-6)] py-[var(--space-4)] sticky top-0 z-[100]">
      <div className="max-w-screen-xl flex items-center justify-between gap-[var(--space-4)] mx-auto">
        <div className="flex items-center gap-[var(--space-2)] no-underline">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--color-primary-500),var(--color-primary-700))]">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <span
            className="text-xl font-bold text-[color:var(--color-gray-900)] cursor-pointer"
          >
            AssessFlow
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-[var(--space-6)]">
          <a
            href="#"
            className="text-[color:var(--color-primary-700)] text-sm font-medium px-3 py-2 rounded-md bg-primary-50 transition-colors tracking-[.025em]"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[color:var(--color-gray-600)] px-3 py-2 rounded-md hover:bg-[color:var(--color-gray-100)] hover:text-[color:var(--color-gray-900)] transition-colors tracking-[.025em]"
          >
            Patients
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[color:var(--color-gray-600)] px-3 py-2 rounded-md hover:bg-[color:var(--color-gray-100)] hover:text-[color:var(--color-gray-900)] transition-colors tracking-[.025em]"
          >
            Reports
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[color:var(--color-gray-600)] px-3 py-2 rounded-md hover:bg-[color:var(--color-gray-100)] hover:text-[color:var(--color-gray-900)] transition-colors tracking-[.025em]"
          >
            Settings
          </a>
        </nav>

        <Avatar className="h-10 w-10 rounded-full border-2 border-transparent hover:border-[var(--color-primary-100)] hover:shadow-[0_0_0_2px_var(--color-primary-100)] transition-[box-shadow] duration-200 ease-in-out cursor-pointer">
          <AvatarFallback className="bg-[var(--color-primary-100)] text-[var(--color-primary-600)] text-sm font-medium tracking-tight">
            DR
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;

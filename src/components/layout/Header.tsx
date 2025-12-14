import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText } from "lucide-react";

function Header() {
  return (
    <header>
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span>
            AssessFlow
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium">
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm font-medium"
          >
            Patients
          </a>
          <a
            href="#"
            className="text-sm font-medium"
          >
            Reports
          </a>
          <a
            href="#"
            className="text-sm font-medium"
          >
            Settings
          </a>
        </nav>

        <Avatar className="h-9 w-9 text-white">
          <AvatarFallback className="text-blue-600 text-sm font-medium bg-blue-200">
            DR
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
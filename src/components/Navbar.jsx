import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
            CP
          </div>
          <span className="font-semibold text-lg text-slate-900">
            Course Platform
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="
            text-sm font-medium capitalize
            px-3 py-1 rounded-md
            bg-slate-100 text-slate-700
          "
          >
            {role}
          </span>

          <Button
            variant="outline"
            onClick={handleLogout}
            className="
              border-slate-300
              hover:bg-slate-100
              hover:border-slate-400
              hover:shadow-sm
              active:scale-[0.97]
              transition-all
            "
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

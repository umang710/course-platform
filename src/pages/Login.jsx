import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) return;

    let role = null;
    if (email.startsWith("trainer@")) role = "trainer";
    else if (email.startsWith("trainee@")) role = "trainee";
    else return;

    onLogin(role);
    navigate(`/${role}`);
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300
      "
    >
      <div
        className="
          w-[380px]
          bg-white/95 backdrop-blur-md
          rounded-2xl
          shadow-2xl
          border border-slate-200
          p-6 space-y-4
          transition-all duration-300
          hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]
          hover:-translate-y-0.5
        "
      >
        <h1 className="text-2xl font-semibold text-center text-slate-800">
          Course Platform
        </h1>

        <p className="text-sm text-center text-slate-500">
          Sign in to continue
        </p>

        <div className="h-px bg-slate-200 my-2" />

        <input
          placeholder="trainer@example.com / trainee@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="
            w-full px-3 py-2 rounded-md
            border border-slate-300
            text-slate-800 placeholder:text-slate-400
            focus:outline-none
            focus:ring-0.5 focus:ring-indigo-500/60
            focus:border-indigo-400
            transition
          "
        />

        <button
          onClick={handleLogin}
          className="
            w-full py-2 rounded-lg
            bg-indigo-600 text-white font-medium
            border
            hover:bg-indigo-700
            hover:shadow-md
            active:scale-[0.97]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-indigo-500/50
            transition-all duration-200
          "
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

import { useLogout } from "../hooks/useLogout";
const Nav = () => {
  const { logout } = useLogout();
  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={() => logout()}
        className="bg-fuchsia-500 p-2 rounded-md hover:bg-fuchsia-400 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
      </button>
    </div>
  );
};

export default Nav;

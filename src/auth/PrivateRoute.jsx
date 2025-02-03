import { useAuth } from "./AuthProvider";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    window.location.href = "/loginout-page";
    return null;
  }

  return children;
}
import { useAuth } from "../../src/auth/AuthProvider";
import { Login, Logout } from "../../src/auth/LoginOut";

export default function LoginOutPage() {
    const { user } = useAuth();

    return (
        <>
            {user ? (
                <Logout />
            ) : (
                <Login />
            )}
        </>
    );
}
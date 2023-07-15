import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
const auth = localStorage.getItem('auth');

console.log(auth)
    if (!auth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }
    // authorized so return outlet for child routes
    return <Outlet />;
}

export { ProtectedRoute };
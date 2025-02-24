import { useNavigate } from "react-router-dom";
import { Content, Navbar, Sidebar } from "../components/layout";
import { Modal } from "../components/modal/Modal";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import { clearAuthRedux } from "../redux/slices/authSlice";

export const Dashboard = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAppSelector(state => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(clearAuthRedux());
            navigate("/login");
        }
    }, [dispatch, navigate, isAuthenticated])

    return (
        <div className='w-full h-full text-gray-700'>
            <Navbar />
            <div className='w-full h-[calc(100vh-83px)] flex bg-gray-100 bg-radial-[at_10%_0%] from-gray-50 from-65% to-gray-300 to-100%'>
                <Sidebar />
                <div className="w-full overflow-y-auto">
                    <div className='w-full sm:max-w-[480px] md:max-w-[768px] mx-auto lg:max-w-[1024px] p-4 '>
                        <Content />
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    );
};

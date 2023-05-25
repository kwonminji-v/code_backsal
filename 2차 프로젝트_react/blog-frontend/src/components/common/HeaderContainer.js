import { useDispatch, useSelector } from "react-redux";
import Header from '../../components/common/Header'
import { logout } from "../../modules/user";


const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {

        if (window.confirm("로그아웃 하시겠습니까?")) {
            alert("로그아웃 되셨습니다.")
        }

        dispatch(logout());
    };
    return <Header user={user} onLogout={onLogout} />
};

export default HeaderContainer;
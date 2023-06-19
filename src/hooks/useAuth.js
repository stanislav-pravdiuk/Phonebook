import { selectLogin } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { selectRefreshing } from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLogin = useSelector(selectLogin);
  const isRefreshing = useSelector(selectRefreshing);

  return {
    isLogin,
    isRefreshing
  };
};
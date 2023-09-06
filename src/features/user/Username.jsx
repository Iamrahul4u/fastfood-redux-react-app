import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../slices/userSlice";
function Username() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;

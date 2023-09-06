import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  getcurrentQuantity,
  increaseItem,
} from "../../slices/cartSlice";
import Button from "../../ui/Button";

function QuantityUpdate({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getcurrentQuantity(id));
  function handleIncrease() {
    dispatch(increaseItem(id));
  }
  function handleDecrease() {
    dispatch(decreaseItem(id));
  }

  return (
    <div className="flex gap-3 items-center flex-1">
      <Button type="round" onClick={() => handleDecrease()}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => handleIncrease()}>
        +
      </Button>
    </div>
  );
}

export default QuantityUpdate;

import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../slices/cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem(e) {
    e.preventDefault();
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteButton;

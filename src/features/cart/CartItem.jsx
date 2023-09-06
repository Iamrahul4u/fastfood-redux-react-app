import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "../../slices/cartSlice";
import DeleteButton from "../../ui/DeleteButton";
import QuantityUpdate from "./QuantityUpdate";
/* eslint-disable react/prop-types */

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li
      className="py-3 sm:flex sm:items-center sm:justify-between"
      key={pizzaId}
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <QuantityUpdate id={pizzaId} />
        <DeleteButton pizzaId={pizzaId}>Delete</DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;

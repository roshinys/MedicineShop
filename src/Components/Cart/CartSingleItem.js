import styles from "./CartSingleItem.module.css";

function CartSingleItem(props) {
  return (
    <>
      <li id={props.cart.id} className={styles.listcart}>
        <div className={styles.title}>
          <h3>{props.cart.title}</h3>
          <p>${props.cart.price}</p>
        </div>
      </li>
    </>
  );
}

export default CartSingleItem;

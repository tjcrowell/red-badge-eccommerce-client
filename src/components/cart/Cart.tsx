import CartItem from '../cartItem/cartItem';
import {Wrapper} from './Cart.styles'
import {CartItemType } from "../item/Item"
// refresh

// export default class Cart extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         user:null,
    //         cart:{},
    //         products:[]
        // };
    //     this.routerRef = React.creatRef();
    // }
// }

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType)=> void;
    removeFromCart: (id: number) => void;
};


const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
const calculateTotal = (items: CartItemType[]) =>
items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
           <h2>Your Shopping Cart</h2> 
           {cartItems.length === 0 ? <p>No items in cart.</p> : null}
           {cartItems.map(item => (
               <CartItem
               key={item.id}
               item={item}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
               />
           ))}
           <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>

        
    );

    
};

export default Cart;
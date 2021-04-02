const INITIAL_STATE = {
    cart: [],
    hover: ''
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        case "HOVER":
            return { ...state, hover: [...state.hover, action.payload] };
        default:
            return state;
    }
};
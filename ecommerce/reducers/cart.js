const initialState = [];

const cartReducer = (state = initialState, action) => {
    // console.log()
    switch(action.type) {
        case 'ADD_PRODUCT': {
            const newState = [...state];
            let term = true;
            newState.forEach(element => {
                if(element.name == action.payload.product.name && element.size == action.payload.size){
                    element.quantity += 1;
                    term = false;
                }
            });
            if( term ) {
                const objTerm = {...action.payload.product, size: action.payload.size};
                objTerm.quantity = 1;
                newState.push(objTerm);
            }
            return ([
                ...newState
            ])
        }
        case 'REMOVE_PRODUCT': {
            const newState = [...state];
            newState.splice(action.payload,1);
            return([
                ...newState
            ])
        }
        case 'INCREASE_PRODUCT': {
            const newState = [...state];
            ++newState[action.payload].quantity;
            return([
                ...newState
            ])
        }
        case 'DECREASE_PRODUCT': {
            const newState = [...state];
            --newState[action.payload].quantity;
            if(newState[action.payload].quantity == 0) {
                newState.splice(action.payload,1);
            }
            return([
                ...newState
            ])
        }
        case 'SET_CART': {
            return [
                ...action.payload
            ];
        }
        default:
            return state;
    }
}

export default cartReducer;
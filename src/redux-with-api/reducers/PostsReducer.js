import Types from './types'
const InitialState = {
    items: [],
    item: {}
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case Types.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
       
        case Types.ADD_POST:
            return {
                ...state,
                item: action.payload,
                items: [action.payload, ...state.items]
            };

        case Types.DELETE_POST:
            return {
                ...state,
                items:state.items.filter((item, index) => item.id !== action.payload.id)
            };
        
        default:
            return state;
    }
}
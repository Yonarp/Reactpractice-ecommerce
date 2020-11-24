

const IntialState = {
    currentUser: null
}

const UserReducer = (state = IntialState , action) => {
    switch(action.type){
        case 'SET_CURRENT_USER': return{
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }

}

export default UserReducer;
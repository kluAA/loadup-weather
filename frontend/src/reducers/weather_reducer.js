
const weatherReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        default: 
            return state;
    }
} 

export default weatherReducer;
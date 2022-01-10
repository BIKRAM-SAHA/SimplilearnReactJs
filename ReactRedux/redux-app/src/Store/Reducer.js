const initialState={
    message:"Subscribe to simplilearn"
}

const reducer = (state=initialState,action)=>{
    const newState={...state}
    if(action.type==="Message Change"){
        newState.message="Thank You for Subscribing!"
    }
    return newState
}
export default reducer;
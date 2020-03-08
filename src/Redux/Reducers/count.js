import {DECREMENT,INCREMENT} from '../Actions/count'

const initialState={
    count:0
}
export function countReducers (state=initialState,action){
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
              count:state.count+1

            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state
        
    }
}
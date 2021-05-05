import { 
    GET_DIARIES,
    SET_LOADING,
    SET_CURRENT,
    SET_SHOWADDDIARY,
    SET_SHOWDIARY,
    UPDATE_DIARY,
    CLEAR_CURRENT,
    ADD_DIARY,
    SEARCH,
    CLEAR_SEARCH,
    DIARY_ERROR,
    CLEAR_DIARY_ERROR,
    CLEAR_ADDED_DIARY
} from "./../actions/types"

const initialState ={
    diaries:null,
    current:null,
    errors:null,
    addedDiary:null,
    searchResult:null,
    loading:false,
    showDiary:false,
    showAddDiary:false
}

export default (state = initialState,action)=>{
    switch(action.type){
        case GET_DIARIES:
            return {
              ...state,
              diaries: action.payload,
              loading:false
            }
        case ADD_DIARY:
            return {
              ...state,
              diaries: [...state.diaries, action.payload],
              addedDiary:action.payload,
              loading: false
            }
        case UPDATE_DIARY:
            return {
                ...state,
                diaries: state.diaries.map(diary =>
                    diary._id === action.payload._id ? action.payload : diary),
                current:action.payload
            }
        case CLEAR_ADDED_DIARY:
            return{
                ...state,
                addedDiary:null
            }    
        case SEARCH:
            return{
                ...state,
                searchResult:action.payload
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                searchResult:null
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }  
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            }      
        case SET_SHOWADDDIARY:
            return {
                ...state,
                showAddDiary: !state.showAddDiary
            }    
        case SET_SHOWDIARY:
            return {
                ...state,
                showDiary: !state.showDiary
            }
        case DIARY_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        case CLEAR_DIARY_ERROR:{
            return {
                ...state,
                errors: null
            }
        }         
        default:
            return state
    }
}
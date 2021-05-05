import {
    GET_DIARIES,
    SET_CURRENT,
    SET_SHOWADDDIARY,
    SET_SHOWDIARY,
    DIARY_ERROR,
    SET_LOADING,
    CLEAR_ADDED_DIARY,
    UPDATE_DIARY,
    CLEAR_CURRENT,
    ADD_DIARY,
    SEARCH,
    CLEAR_SEARCH,
    CLEAR_DIARY_ERROR
} from './types'

export const getDiaries = () => async dispatch => {
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/api/diaries')
        const data = await res.json()

        dispatch({
            type: GET_DIARIES,
            payload: data.data.diaries
        })
    } catch (err) {
        dispatch({
            type: DIARY_ERROR,
            payload: err.response
        })
    }
}

export const addDiary = diary => async dispatch =>{
    try{
        setLoading()

        const res = await fetch(`http://localhost:5000/api/diaries`, {
            method: 'POST',
            body: JSON.stringify(diary),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch({
            type: ADD_DIARY,
            payload: data.data.diary
        })
    }catch(err){
        dispatch({
            type: DIARY_ERROR,
            payload: err.response
        })
    }
}

export const updateDiary = diary => async dispatch =>{
    try{
        setLoading()

        const res = await fetch(`http://localhost:5000/api/diaries/${diary.id}`, {
            method: 'PUT',
            body: JSON.stringify(diary),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        
        if(data.status==='fail'){
            return dispatch({
                type: DIARY_ERROR,
                payload:data.message
            })
        }

        dispatch({
            type: UPDATE_DIARY,
            payload: data.data.diary
        })
    }catch(err){
        dispatch({
            type: DIARY_ERROR,
            payload: err.response
        })
    }
}

export const clearError= () =>{
    return{
        type:CLEAR_DIARY_ERROR
    }
}

export const clearAdded= () =>{
    return{
        type:CLEAR_ADDED_DIARY
    }
}

export const setSearchResult = diaries =>{
    return{
        type:SEARCH,
        payload:diaries
    }
}

export const clearSearch = () => {
    return {
      type: CLEAR_SEARCH
    }
}

export const setCurrent = diary => {
    return {
      type: SET_CURRENT,
      payload: diary
    }
}

export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
      type: SET_LOADING
    }
}

export const setShowDiary = () => {
    return {
      type: SET_SHOWDIARY
    }
}

export const setShowAddDiary = () => {
    return {
      type: SET_SHOWADDDIARY
    }
}
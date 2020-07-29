export const ADD= 'ADD_TODOLIST'
export const DEL= 'DEL_TODOLIST'
export const COMPLETE= 'COMPLETE_TODOLIST'
export const EDIT = 'EDIT_TODOLIST'
export const COMPLETE_EDIT = 'COMPLETE_EDIT_TODOLIST'
export const INITIALCOMPLETE = 'INITIAL_COMPLETE_TODOLIST'

//action creator
export const addtolist = (str,id,completed)=>{
    return {type:ADD,payload:{listname:str,id:id,completed:completed}}

}
export const deltodolist = (id) =>{
    return {type:DEL,payload:{delItemIndex:id}}
}

//action creator + redux thunk
//block original dispatch and dispatch another one
// export const addtolist_async = (str)=>{
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(addtolist(str))
//         }, 2000);
//     }
// }

export const savetoserver = (todo) => {
    return async dispatch => {
        // 注意資料格式要設定，伺服器才知道是json格式
        const request = new Request('/todolist/savetodb', {
            method: 'POST',
            body: JSON.stringify({content:'123',title:'123'}),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        console.log(JSON.stringify(todo))
        const response = await fetch(request)
        const data = await response.json()
        console.log(data)
        dispatch(addtolist(todo.content))
    }
}
//從database抓回資料
export const getDatafromserverAsync = () => {
    return dispatch => {
        fetch('https://ptt-todolist-api.herokuapp.com/todolist/gettodo',{
            method:'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        .then(response=>response.json())
        // .then(data=>console.log(data))
        .then(data=>data.forEach(
            element=>element.completed == 0? 
            dispatch(addtolist(element.content,element.Id,element.completed)):
            dispatch({type:INITIALCOMPLETE,payload:{id:element.Id,content:element.content,completed:element.completed}}))
            )
        // dispatch(addtolist())
    }
}
//刪除todo
export const delDatafromserverAsync = (obj) =>{
    return dispatch => {
        let body = JSON.parse(obj)
        console.log('del_body',JSON.stringify(body))
        fetch('https://ptt-todolist-api.herokuapp.com/todolist/deltodo',{
            method:'POST',
            body:JSON.stringify(body),
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        
        dispatch(deltodolist(obj.delid))
        
}
}
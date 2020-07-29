import * as actiontype from '../actions/todoaction'
import { act } from 'react-dom/test-utils';
const initialState = {
    todoList:[{id:0,content:'first',edit:false}],
    completeTodo:[]
}
const reducer= (state=initialState,action) => {
    switch(action.type){
        case actiontype.ADD:{
            const tempTodo = state.todoList.map(list=>list);
            console.log('tempTodoBEFORE',tempTodo)
            
            if( state.todoList.map(item=>item.id).indexOf(action.payload.id) == -1){
                console.log('action.payload.id',action.payload.id)
               tempTodo.push({id:action.payload.id,content:action.payload.listname,edit:false,completed:action.payload.completed}) 
            }
            
            console.log('tempTodoAFTER',tempTodo)
            return {
                ...state,
                todoList:tempTodo
            }
        }
        case actiontype.DEL:{
            // const tempTodo = state.todoList.map(list=>list);
            // console.log(action.payload.listname)
            // let index = tempTodo.findIndex(element => element == action.payload.listname)
            
            // tempTodo.splice(index,1)
            // const updatedArr = state.todoList.filter((todo,index)=>index !== action.payload.delItemIndex)
            const updatedArr = state.todoList.filter((todo,index)=> todo.id !== action.payload.delItemIndex)
            console.log('updatedArr',updatedArr)
            return {
                ...state,
                todoList:updatedArr
            }
        }
        case actiontype.COMPLETE:
            // console.log('complete',state.completeTodo)
            const complete = state.todoList.filter(item=>item.id == action.payload.id) 
            console.log('complete',complete)
            const notcomplete = state.todoList.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                todoList:notcomplete,
                completeTodo:state.completeTodo.concat(complete)
            }
        case actiontype.INITIALCOMPLETE:
            const initialcomplete = [{id:action.payload.id,content:action.payload.content,edit:false,completed:action.payload.completed}]
            return {
                ...state,
                completeTodo:state.completeTodo.concat(initialcomplete)
            }
        case actiontype.EDIT:
            //篩出todolist中的其他項目
            // const editArr = state.todoList.filter((todo,index)=> index !== action.payload.editItemIndex)
            // const editArr = state.todoList.filter((todo)=> todo.id !== action.payload.editItemIndex)
            // console.log('editArr',editArr)
            //找到todolist中的要修改的項目
            // const index = action.payload.editItemIndex
            // const obj = {...state.todoList[index]}
            const obj = state.todoList.map((todo) => todo.id == action.payload.editItemIndex?{...todo,edit:true}:{...todo,edit:false})
            // obj.edit = true
            
            // console.log('updateobj',obj)
            //重新組合
            // const newarray = editArr.concat(obj)
            // console.log('newarray',newarray)
            return {
                ...state,
                todoList:obj
            }
        
        case actiontype.COMPLETE_EDIT:
            //篩出todolist中的其他項目
            const tempArr = state.todoList.filter((todo,index)=> index !== action.payload.editItemIndex)
            const tempObj = {...state.todoList[action.payload.editItemIndex]}
            tempObj.content = action.payload.editcontent;
            tempObj.edit = false;
            const edit_temp_Array = tempArr.concat(tempObj)
            const comleteEditObj = state.todoList.map((todo) => todo.id==action.payload.editItemIndex?{...todo,edit:false,content:action.payload.editcontent}:{...todo})
            return {
                ...state,
                todoList:comleteEditObj
            }
        default:
            return state;
    }
    
}

export default reducer;
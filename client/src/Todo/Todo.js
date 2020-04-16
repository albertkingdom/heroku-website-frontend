import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import * as actiontype from '../actions/todoaction'
//import action-creator
import { addtolist,deltodolist,savetoserver,getDatafromserverAsync,delDatafromserverAsync } from '../actions/todoaction'
//react bootstrap card
import { Card,Button} from 'react-bootstrap'
//css
import './Todo.scss'
//react-icon
import { AiOutlineDelete,AiOutlineCheck,AiOutlineEdit,AiOutlinePushpin } from "react-icons/ai"
import { Modal } from 'antd';
import $ from 'jquery'

function Todo(props){

    //觀察由connect可以在這個元件得到什麼
    console.log(props)

    const [newtodo,setNewtodo] = useState('')
    const [editTodo,setEditTodo] = useState('')
    const [currentTodo,setCurrentTodo] = useState([])
    const [visible,setVisible] =useState(false)
//將todo存進database,以下
    async function localsavetosrv(todo){
        const request = new Request(
            
            '/todolist/savetodb',
            {
              method: 'post',
              body:JSON.stringify(todo),
              headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }),
            }
          )
          const response = await fetch(request)
          const data = await response.json()
          console.log('res data', data)
        //   setCurrentTodo([])
          props.getdata()
          
    }
//將todo存進database,以上

//一開始，從database抓回資料，以下
    useEffect(()=>{
        props.getdata()
    },[])
    
//從database抓回資料，以上

// 刪除todo
async function localdelDatafromserver(id){
    
        let body = {delid:id}
        console.log('test1213',body)
        
        const request = new Request(
            
            '/todolist/deltodo',
            {
              method: 'post',
              body:JSON.stringify(body),
              headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }),
            }
          )
          const response = await fetch(request)
          const data = await response.json()
          console.log('res data', data)
          
          props.onDelTodo(id)
          
        
        // dispatch(deltodolist(obj.delid))
        

}
//更新todo內容to server
const localupdatetoserver = (id) =>{
    let body={editid:id,
        content:editTodo
    }
    
    fetch('/todolist/updatetodo',
    {
      method: 'post',
      body:JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .then(props.onCompleteEdit(id,editTodo))
    
    
}

const localCompletetoServer = (id) =>{
    let body={completeid:id,
        }
    
    fetch('/todolist/completetodo',
    {
      method: 'put',
      body:JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .then(props.onCompleteTodo(id))
}
    //新增to do的modal
    const showModal = () => {
    setVisible(true);
  };

    const handleOk = e => {
        console.log(e);
        setVisible(false);
        setNewtodo('');
        localsavetosrv({content:newtodo,title:'123'});
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
  //改變card底色
  const handleChangeBkgColor = e => {
    //   console.log(e.target);
      let colorData = e.target.style.background
    //   console.log(colorData)
      $(e.target).closest('.todocard').css('background-color',colorData)
    //   console.log(aa)
  }

    return (
    <>
    <div className="container">
    <h1 className="text-center">ToDo List</h1>
    <button className="btn-add" onClick={showModal}>+</button>
    <Modal
          title="請輸入待辦事項"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="新增待辦"
        >
          <textarea rows="8" cols="60" 
            value={newtodo} 
            onChange={e=>setNewtodo(e.target.value)}
            placeholder="請輸入待辦事項..."
            style={{background:'transparent',border:'none'}}>

            </textarea>
    </Modal>
    {/* <input type="text" value={newtodo} onChange={e=>setNewtodo(e.target.value)}></input>
    <button onClick={()=>{
        // props.onAddTodo(newtodo);
        setNewtodo('');
        localsavetosrv({content:newtodo,title:'123'});
        // props.getdata()
        }}>
            add to list
    </button> */}

    {/* 新增一筆to do */}
    {/* <Card style={{ width: '18rem' }} className="m-2 todocard position-relative col-5">
        
                
        <Card.Body>
            
            <button onClick={()=>{
                
                setNewtodo('');
                localsavetosrv({content:newtodo,title:'123'});
                // props.getdata()
                }}
                className="float-right btn btn-primary">
                   新增待辦
            </button>
            <>
            <Card.Text>
            <textarea rows="8" cols="30" 
            value={newtodo} 
            onChange={e=>setNewtodo(e.target.value)}
            placeholder="請輸入待辦事項..."
            style={{background:'transparent',border:'none'}}>

            </textarea>
            
            </Card.Text>
            
            </>
            
            
        </Card.Body>
    </Card> */}
    <hr/>
    {/* <ul>
        {props.currentTodo.map((todo,index)=>
        <>
        
        <li key={index}>{todo.content}</li>
        <button className="btn btn-primary mx-2" onClick={()=>props.onDelTodo(index)}>del from list</button>
        <button className="btn btn-primary" onClick={()=>props.onCompleteTodo(`${todo}`)}>complete</button>
        
        </>
        )}
        
    </ul> */}
    <div className="d-flex flex-wrap justify-content-around">
    {props.currentTodo.map((todo,index)=>
    todo.completed == 0 ?
    <Card key={todo.id} style={{ width: '18rem' }} className="m-2 todocard position-relative col-12 col-md-5">
        <span className="card-del-btn" onClick={()=>{localdelDatafromserver(todo.id);}} >
        <AiOutlineDelete style={{fontSize:'24px'}}/>
        <span>刪除</span>
        </span>
        <span className="card-check-btn" 
        onClick={()=>{
            // props.onCompleteTodo(todo.id)
            localCompletetoServer(todo.id)
        }
        }>
        <AiOutlineCheck style={{fontSize:'24px'}}/>
        <span>完成</span>
        </span>
        <AiOutlinePushpin style={{fontSize:'24px'}}/>
        {/* 顏色選擇 */}
        <div className="d-flex">
            <div className="color-select rounded-circle" style={{background:"skyblue"}} onClick={handleChangeBkgColor}></div>
            <div className="color-select rounded-circle" style={{background:"orange"}} onClick={handleChangeBkgColor}></div>
            <div className="color-select rounded-circle" style={{background:"yellow"}} onClick={handleChangeBkgColor}></div>
        </div>
        <Card.Body>
           
            <Card.Title></Card.Title>
            {!todo.edit?
            <>
            <Card.Text>
            {todo.content} 
            <span className="card-edit-btn" onClick={()=>{props.onEditTodo(todo.id);setEditTodo(todo.content)}}>
            <AiOutlineEdit/>
            </span>
            </Card.Text>
           
            </>:
            <textarea type="text" 
            className="col-10" 
            value={editTodo} 
            onChange={(e)=>setEditTodo(e.target.value)} 
            onBlur={()=>{
                
                localupdatetoserver(todo.id)
                // props.onCompleteEdit(todo.id,editTodo)
            }
            }
            />
            }
        </Card.Body>
    </Card>
    :null
    )}
    </div>
    <hr/>
    <h1 className="text-center">已完成</h1>
    <div className="d-flex flex-wrap justify-content-around">
        {props.completelist.map((item) => {
            return (
                
            <Card key={item.id} style={{ width: '18rem' }} className="m-2 todocard position-relative col-12 col-md-5">
            <span className="card-del-btn" >
            <AiOutlineDelete style={{fontSize:'24px'}}/>
            </span>
            <span className="card-check-btn">
            <AiOutlineCheck style={{fontSize:'24px'}}/>
            </span>
            
            <Card.Body>
                <Card.Title></Card.Title>
               
                
                <Card.Text>
                {item.content} 
                </Card.Text>
            
            </Card.Body>
        </Card>
        )})}
    </div>
    
    </div>
    </>)
}

const mapStateToProps = state => {
    return {
        currentTodo: state.todoList,
        completelist:state.completeTodo,
        completed:state.completed
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onAddTodo: (str) => dispatch(addtolist(str)),
        onDelTodo: (id) => dispatch(deltodolist(id)),
        onCompleteTodo: (id) => dispatch({type:actiontype.COMPLETE,payload:{id:id}}),
        onEditTodo: (id) => dispatch({type:actiontype.EDIT,payload:{editItemIndex:id}}),
        onCompleteEdit: (id,str) => dispatch({type:actiontype.COMPLETE_EDIT,payload:{editItemIndex:id,editcontent:str}}),
        // savetosrv: (todo) => dispatch(savetoserver(todo))
        getdata: () => dispatch(getDatafromserverAsync())
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo);
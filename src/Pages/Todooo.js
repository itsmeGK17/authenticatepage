// import React, { useState, useEffect } from 'react'
// import '../ReactTodo.js/Todo.css';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
// import { Button, Checkbox } from '@mui/material';

// const Todo = () => {
//     const [input, setInput] = useState("")
//     const [item, setItem] = useState([])
//     const [userData, setUserData] = useState([])
//     const [btn, setBtn] = useState("All")


//     const AddItem = () => {

//         if (!input) {
//         } else {

//             setItem([...item, { text: input, status: false }])
//             setInput("")
//         }
//     }


//     const checkHandler = (index) => {

//         setItem(item.map((element, i) => {
//             if (i === index) {
//                 return { ...element, status: !element.status }
//             } else {
//                 return element;
//             }
//         }))
//     };



//     // console.log("item", item);

//     const deleteItem = (id) => {


//         const deleteData = item.filter((elem) => {
//             return elem !== id
//         })
//         setItem(deleteData)


//     }

//     const EditItem = (edit) => {
//         setInput(edit.text)

//         const editeData = item.filter((elem) => {
//             return elem !== edit

//         })
//         setItem(editeData)
//         // setToggle(false)
//     }

//     const filterData = (value) => {

//         setBtn(value)
//          setUserData (item?.filter((ff) => {
//                 switch (value) {
//                     case "Active":
//                         return !ff.status

//                     case "Complete":
//                         // setUserData(item.filter((ff) => ff.status));
//                         return ff.status

//                     default:
//                         return setUserData;
//                 }
//             }));



//         const ClearAll = (e) => {
//             setItem([])
//             setUserData([])

//         }

//         useEffect=(() => {

//             filterData(btn)
//             let storage = localStorage.setItem("list", JSON.stringify(item))

//         }, [item, btn])


//         return (
//             <div className='main'>

//                 <h1 className='heading__style'>ToDo List</h1>
//                 <br />
//                 <div className='inputType'>
//                     <input
//                         className='input'
//                         type="text"
//                         placeholder='Add Item'
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                     />

//                     <button onClick={AddItem} >ADD</button>

//                     <br />
//                     {
//                         userData?.map((elem, index) => {

//                             return (
//                                 <div className='output'>
//                                     <div key={elem.id}>

//                                         <Checkbox
//                                             checked={elem.status}
//                                             onChange={(e) => checkHandler(index)} />
//                                         <span
//                                             style={
//                                                 elem.status ? { textDecoration: "line-through" } : null
//                                             }
//                                         >
//                                             {elem.text}
//                                         </span>

//                                         {/* <h5
//                                     key={elem.id}>{elem}
//                                 </h5> */}
//                                         <span> <EditNoteOutlinedIcon onClick={() => EditItem(elem)} className='editItem' /> </span>
//                                         <span> <DeleteIcon onClick={() => deleteItem(elem)} className='deleteIcon' /> </span>
//                                     </div>
//                                 </div>

//                             )
//                         })
//                     }

//                     <div>

//                         <Button
//                             className='mx-2'
//                             variant="outlined"
//                             href="#outlined-buttons"
//                             onClick={(e) => filterData("All")}
//                         >All</Button>

//                         <Button
//                             variant="outlined"
//                             href="#outlined-buttons"
//                             onClick={(e) => filterData("Active")}
//                         >Active</Button>

//                         <Button
//                             className='mx-2'
//                             variant="outlined"
//                             href="#outlined-buttons"
//                             onClick={(e) => filterData("Complete")}
//                         > Complete</Button>

//                         <Button
//                             variant="outlined"
//                             href="#outlined-buttons"
//                             onClick={ClearAll}
//                         > Clear All</Button>


//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Todo;

import React, { useState, useEffect } from 'react';
// import '../ReactTodo/Todo.css';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Button, Checkbox } from '@mui/material';


const Todo = () => {
    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);
    const [userData, setUserData] = useState(item);
    const [btn, setBtn] = useState("All");
  

    const AddItem = () => {
        if (!input) {
            alert("please enter some Item")
        } else {
            setItem([...item, { text: input, status: false }]);
            setInput("");
        }
    };

    const checkHandler = (index) => {
        setItem(item.map((element, i) => {
            if (i === index) {
                return { ...element, status: !element.status };
            } else {
                return element;
            }
        }));
    };

    const deleteItem = (id) => {
        const deleteData = item.filter((elem) => elem !== id);
        setItem(deleteData);
    };

    const EditItem = (edit) => {
        // setActive(false);
        setInput(edit.text);
        const editeData = item.filter((elem) => elem === edit);
        setItem(editeData);
    };

    const filterData = (value) => {

        setBtn(value);
        setUserData(item.filter((ff) => {

            if (value === "Active") {
                return !ff.status
            } else if (value === "Complete") {
                return ff.status
            } else {
                return setUserData;
            }
            
        }));
    };

    const ClearAll = () => {
        setItem([]);
        setUserData([]);
    };

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(item));
        filterData(btn);
    }, [item, btn]);

    return (
        <div className='main'>
            <h1 className='heading__style'>ToDo List</h1>
            <br />

            <div className='inputType'>
                <input
                    className='input'
                    type="text"
                    placeholder='Add Item'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {

                    <button onClick={AddItem}><AddCircleIcon /></button>
                    // <button onClick={AddItem}> <EditIcon /></button>
                }

                <br />
                {userData?.map((elem, index) => (
                    <div className='output' key={index}>

                        <Checkbox
                            checked={elem.status}
                            onChange={(e) => checkHandler(index)} />
                        <span
                            style={
                                elem.status ? { textDecoration: "line-through" } : null
                            }                                         >
                            {elem.text}
                        </span>
                        <span>
                            <EditNoteOutlinedIcon onClick={() => EditItem(elem)} className='editItem' />
                        </span>
                        <span>
                            <DeleteIcon onClick={() => deleteItem(elem)} className='deleteIcon' />
                        </span>
                    </div>
                ))}

                <div className='mt-3'>
                    <Button
                        className='mx-2'
                        style={{ backgroundColor: "grey", color: "white" }}
                        variant="outlined"
                        href="#outlined-buttons"
                        onClick={() => filterData("All")}
                    >
                        All
                    </Button>

                    <Button
                        style={{ backgroundColor: "green", color: "white" }}
                        variant="outlined"
                        href="#outlined-buttons"
                        onClick={() => filterData("Active")}
                    >
                        Active
                    </Button>

                    <Button
                        style={{ backgroundColor: "red", color: "white" }}
                        className='mx-2'
                        variant="outlined"
                        onClick={() => filterData("Complete")}
                    >
                        Complete
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={ClearAll}>
                        Clear All
                    </Button>

                </div>
            </div>
            {/* <h4>{Showdelete}</h4> */}
        </div>
    );
};

export default Todo;
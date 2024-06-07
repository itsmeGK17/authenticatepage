import { Button, TextField } from "@mui/material"
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TableData = () => {
    const [data, setData] = useState([])
    const [sort, setSort] = useState("Acs");
    const [editId, setEditId] = useState(null)

    // console.log("object", data)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const res = await response.json()
        setData(res)
    }

    const sorting = (col) => {
        if (sort === "Acs") {
            let sorted = data.sort((a, b) => a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1)
            setData(sorted)
            setSort("Dcs")
        }
        if (sort === "Dcs") {
            let sorted = data.sort((a, b) => a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1)
            setData(sorted)
            setSort("Acs")
        }
    }

    const handleEdit = () => {

    }

    const handleDelete = (i) => {
        const deleted = data.filter((datas) => datas.id !== i)
        setData(deleted)
    }

    return (
        <div>
            <table className='table stiped-table border '>
                <thead className='table'>
                    <tr>
                        <th onClick={() => sorting("UserId")}>UserId</th>
                        <th onClick={() => sorting("Id")}>Id</th>
                        <th onClick={() => sorting("Body")}>Body</th>
                        <th onClick={() => sorting("Title")}>Title</th>
                        <th  >Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((datas) => {
                            return (
                                <tr key={datas.id}>
                                    <td>{datas.id}</td>
                                    <td>{datas.userId}</td>
                                    <td>{datas.body}</td>
                                    <td>{datas.title}</td>
                                    <td>
                                        {
                                            editId === datas.id &&
                                            <TextField value={editId} onChange={(e) => setEditId(e.target.value)} />

                                        }
                                        <Button onClick={() => handleEdit(datas.id)}><EditIcon /></Button>

                                    </td>
                                    <td>  <Button onClick={() => handleDelete(datas.id)}><DeleteForeverIcon /></Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableData

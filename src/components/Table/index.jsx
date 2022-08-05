import React, {useState,useEffect} from 'react'
import './index.css'
import axios from 'axios';
function Table() {
    const [tableData,setTableData]=useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setTableData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, []);

    const deleteRow=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`).then(function(response){
         console.log(response);
         console.log("deleted");      
        });
    }

  return (
    <>
    <div  className='headTitle mt-3'>
    <h3>List of Albums</h3>
    </div>
    <div className='mainTable'>
        
<table id="albums">
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Thumbnail</th>
    <th>Delete</th>
  </tr>
  {tableData.map((item)=>{
  return (
   <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td><img src={item.url} alt="thumbnail" width="150" height="150" /></td>
    <td><button onClick={()=>deleteRow(item.id)}>Delete</button></td>
  </tr>
  )
})}
  
 
 
  
</table>
    </div>

</>
  )
}

export default Table
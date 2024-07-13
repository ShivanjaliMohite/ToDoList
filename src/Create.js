import React, { useState } from 'react';
import photos from './photos.jpg'
export default function Create(props) {
    console.log(props)
    let [title,setTitle]=useState("")
    let [description,setDescription]=useState("")
    let [state,setState]=useState(false)

    return (
       
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            backgroundColor: '#E6E6FA', 
            padding: '2rem'
        }}>
            <div className='container' style={{
                backgroundColor: '#F8BBD0', 
                padding: '2rem', 
                borderRadius: '8px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}>
                <label style={{ marginBottom: '0.5rem' }}>Title:</label>
                <input type="text" placeholder='Enter title' 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                style={{
                    width: '100%',
                    padding: '0.5rem', 
                    marginBottom: '1rem', 
                    border: '1px solid #ccc', 
                    borderRadius: '4px' 
                }} />
                
                <label style={{ marginBottom: '0.5rem' }}>Description:</label>
                <textarea placeholder='Enter description'
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                style={{
                    width: '100%', 
                    padding: '0.5rem', 
                    marginBottom: '1rem', 
                    border: '1px solid #ccc',
                    borderRadius: '4px' 
                }} />
                <input type="checkbox" checked={state}  onChange={(e)=>(setState(e.target.checked))}/>Add to Favourites
                <br></br>
                <button onClick={()=>{props.add(title,description);
                    props.merge(state,title,description)
                    setTitle('');
                    setDescription('');
                    setState(false)
                    alert('Data added successfully!');
                }}>Submit</button>
                
            </div>
        </div>
     
    )
}

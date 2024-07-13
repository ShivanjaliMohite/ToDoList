import React from 'react';

export default function Display(props) {
    const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9'];
    return (
        <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}>
                {props.taskListf.map((task, index) => (
                    <div key={index} style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '1rem',
                        backgroundColor: colors[index % colors.length],
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'left',
                        width: '300px'
                    }}>
                        <h3>TITLE: {task.title}</h3>
                        <p>DESCRIPTION: {task.description}</p>
                        <button style={{
                              backgroundColor: '#ff4d4d', 
                              color: 'white', 
                              border: 'none', 
                              borderRadius: '8px', 
                              padding: '0.5rem 1rem', 
                        }} onClick={() => { props.remove(index);  }}>Remove Task</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


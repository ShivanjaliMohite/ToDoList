import React, { useState } from 'react';

export default function Search(props) {
    let [data, setData] = useState("");
    let [title, setTitle] = useState("");
    let [des, setDes] = useState("");
    let [noData, setNoData] = useState("");

    const search = () => {
        console.log(data);
        const dataNew = props.taskData.filter((task) =>
            task.title.toLowerCase().includes(data.toLowerCase()) ||
            task.description.toLowerCase().includes(data.toLowerCase())
        );

        console.log(dataNew);
        if (dataNew.length > 0) {
            setTitle(dataNew[0].title);
            setDes(dataNew[0].description);
            setNoData("");  
        } else {
            setTitle("");
            setDes("");
            setNoData("No Such Task");
        }
    };

    const styles = {
        pageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f4f4f9',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            fontFamily: 'Arial, sans-serif',
        },
        input: {
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontSize: '1rem',
        },
        button: {
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        result: {
            marginTop: '1rem',
            fontSize: '1.2rem',
            color: '#333',
            textAlign: 'center',
            width: '100%',
        },
        noData: {
            color: '#ff4d4d',
        },
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <input 
                    type="text" 
                    placeholder="Search task here" 
                    value={data} 
                    onChange={(e) => setData(e.target.value)} 
                    style={styles.input}
                />
                <button 
                    onClick={search} 
                    style={styles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                    Search
                </button>
                <div style={styles.result}>{title}</div>
                <div style={styles.result}>{des}</div>
                <div style={{ ...styles.result, ...styles.noData }}>{noData}</div>
            </div>
        </div>
    );
}

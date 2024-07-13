import React from "react";

const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9'];  

export default function Favourites(props) {
  return (
    <div style={styles.container}>
      {props.fav.map((favItem, index) => (
        <div key={index} style={  
        {border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '1rem',
        margin: '1rem',
        justifyContent: 'center',
        backgroundColor: colors[index%colors.length],
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '250px',
        flex: '1 1 calc(33% - 2rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }
        }>
          <h3>Title:{favItem.title}</h3>
          <p style={styles.description}>Description:{favItem.description}</p>
          <button onClick={() => props.pop(index)} style={styles.removeButton}>
            Remove from favourites
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
  },
  description: {
    textAlign: 'center',
  },
  removeButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '1rem'
  },
}
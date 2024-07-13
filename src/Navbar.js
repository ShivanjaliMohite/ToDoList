import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav style={{ padding: '1em', backgroundColor: '#333', color: 'white' }}>
            <Link to="/home" style={{ marginRight: '1em', color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/search" style={{ marginRight: '1em', color: 'white', textDecoration: 'none' }}>Search</Link>
            <Link to="/create" style={{ marginRight: '1em', color: 'white', textDecoration: 'none' }}>Create</Link>
            <Link to="/fav" style={{ marginRight: '1em', color: 'white', textDecoration: 'none' }}>Favourites</Link>
            <Link to="/display" style={{ color: 'white', textDecoration: 'none' }}>Display</Link>
        </nav>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

const pageStyles = {
    Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-evenly',
      padding: 20,
      backgroundColor: 'lightgray',
      height: 60
    },
  };
const Header = () =>{


    return(
        <div style={pageStyles.Container}>
            <Link  to="/">Home</Link>
            <Link to="/todo">To dos</Link>
            <Link to="/search">Movies</Link>
        </div>
    )

}

export default Header;
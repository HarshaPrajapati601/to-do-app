import React from 'react';
import { Link } from 'react-router-dom';

const pageStyles = {
    Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: 'lightgray',
      height: 60
    },
  };
const Header = () =>{


    return(
        <div style={pageStyles.Container}>
            <Link style={{paddingRight: 50}}  to="/">Home</Link>
            <Link to="/todo">To dos</Link>
        </div>
    )

}

export default Header;
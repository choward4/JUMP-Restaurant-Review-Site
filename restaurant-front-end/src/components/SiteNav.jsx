import React, {useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';


const SiteNav = (props) => {
    // State contains values for search bar to pass back up to App
    const [searchValue, setSearchValue] = useState('');

    // State changes logged to pass back up to app when search button is clicked
    const handleSearch = (evt) => {
    evt.preventDefault();
    props.search(searchValue, true);
    }

    console.log(searchValue);

    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Navbar.Brand href="/">Restaurant</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>

            </Nav>


        </Navbar>
    );

}

export default SiteNav;

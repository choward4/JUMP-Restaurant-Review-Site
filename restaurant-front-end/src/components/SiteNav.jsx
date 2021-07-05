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
        <Navbar.Brand href="/">ICan'tBelieveIt'sNotYelp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <a href="/results">
            <Button variant='primary'>
                Show All
            </Button>
        </a>
        
        <Form inline onSubmit={handleSearch}>
          <FormControl  type="text" placeholder="Search Restaurants" className="mr-sm-2" onChange={e=>setSearchValue(e.target.value)} />
          <Button variant="outline-info" type='submit'>Search</Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">SignUp</Nav.Link>
        </Nav>
        
      </Navbar>
    );
  }
  
  export default SiteNav;

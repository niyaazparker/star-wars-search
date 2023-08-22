import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import SearchInput from './SearchInput';
import ResultBox from './ResultBox';

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${query}`);
      const data = await response.json();
      setSuggestions(data.results);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSearch = (query) => {
    fetchSuggestions(query);
    setSelectedCharacter(null);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setSuggestions([]); // Clear the suggestions when a character is selected
  };

  return (
    <Container  className="App">
      <h1>Star Wars Character Search</h1>
      <div className='col-4 mx-auto'><SearchInput onSearch={handleSearch} /></div>
      <Row  className="suggestions col-4 mx-auto text-start">
      <Col className='p-0 '>
          <ListGroup>
        {suggestions.map((character) => (
          <ListGroup.Item
            key={character.name}
            className="suggestion"
            onClick={() => handleCharacterSelect(character)}
          >
            {character.name}
          </ListGroup.Item>
        ))}
        </ListGroup>
        </Col>
      </Row >
      <ResultBox selectedCharacter={selectedCharacter} />
    </Container >
  );
}

export default App;

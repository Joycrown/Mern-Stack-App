import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card} from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import {Link} from 'react-router-dom'
// import notes, { } from "../../data/notes"
import axios from 'axios'

function MyNotes() {

  const [notes, setNotes] = useState([])


  const deleteHandler = (id) =>{
    if (window.confirm('Are You Sure?')){

    }
  };

  const fetchNotes = async() =>{
    const {data} =await axios.get('/api/notes')
    setNotes(data)
  }

  useEffect(() => {
    fetchNotes()

  }, [])
  return (
    <MainScreen title="Welcome Back Joycrown...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginButton: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Item as={Card.Text} variant="link" eventKey="0">
                  
                  {note.title}
                </Accordion.Item>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventkey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on -date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes
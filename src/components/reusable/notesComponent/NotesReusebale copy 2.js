import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const NotesReusebale = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState({ content: '' });

  useEffect(() => {
    // Fetch initial notes from the API or any other data source
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    // Simulating API call to fetch initial notes
    setTimeout(() => {
      const fakeApiResponse = [
        {
          id: 1,
          image: 'https://example.com/image1.jpg',
          name: 'John Doe',
          time: '9:00 AM',
          content: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          image: 'https://example.com/image2.jpg',
          name: 'Jane Smith',
          time: '10:30 AM',
          content: 'Consectetur adipiscing elit.',
        },
      ];

      setNotes(fakeApiResponse);
    }, 500); // Simulate delay of 500ms
  };

  const addNote = () => {
    setShowForm(true);
  };

  const cancelAddNote = () => {
    setShowForm(false);
    setNewNote({ content: '' });
  };

  const submitNote = () => {
    const newNoteData = {
      ...newNote,
      id: notes.length + 1,
      time: new Date().toLocaleTimeString(), // Capture the current time
    };

    setNotes([...notes, newNoteData]);
    setShowForm(false);
    setNewNote({ content: '' });
  };

  const handleInputChange = (e) => {
    setNewNote({ ...newNote, content: e.target.value });
  };

  return (
    <div>
      {!showForm && <Button label="Add Note" onClick={addNote} />}
      {showForm && (
        <div className="note-form">
          <div>
            <label>Content:</label>
            <InputText
              value={newNote.content}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-buttons">
            <Button label="Cancel" className="p-button-secondary" onClick={cancelAddNote} />
            <Button label="Submit" onClick={submitNote} />
          </div>
        </div>
      )}
      {notes.map((note) => (
        <Card key={note.id} title={note.name} subTitle={note.time}>
          <div className="note-content">
            <img src={note.image} alt="Note" className="note-image" />
            <div className="note-text">{note.content}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default NotesReusebale;

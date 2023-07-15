import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const NotesReusable = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  useEffect(() => {
    // Fetch initial notes from the API or any other data source
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    // Simulating API call to fetch notes
    setTimeout(() => {
      const fakeApiResponse = [
        {
          id: 1,
          image: 'https://example.com/image1.jpg',
          name: 'John Doe',
          time: '9:00 AM',
          content: 'Lorem ipsum dolor sit amet.',
        }
      ];

      setNotes(fakeApiResponse);
    }, 500); // Simulate delay of 500ms
  };

  const addNote = () => {
    if (newNoteText.trim() === '') {
      return; // Prevent adding empty notes
    }

    const newNote = {
      id: notes.length + 1,
      image: 'https://example.com/newimage.jpg',
      name: 'New User',
      time: '3:45 PM',
      content: newNoteText,
    };

    setNotes([...notes, newNote]);
    setNewNoteText(''); // Reset the input field
  };

  const handleInputChange = (e) => {
    setNewNoteText(e.target.value);
  };

  return (
    <div>
      <div className="note-form">
        <InputText
          value={newNoteText}
          onChange={handleInputChange}
          placeholder="Enter note content"
        />
        <Button label="Clear" className="p-button-text" onClick={() => setNewNoteText('')} />
        <Button label="Add" onClick={addNote} />
      </div>
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

export default NotesReusable;

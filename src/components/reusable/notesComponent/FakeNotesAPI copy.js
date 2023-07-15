// fakeNotesAPI.js
import axios from 'axios';

const fakeNotesAPI = {
  getAllNotes() {
    // Simulating API call to fetch initial notes
    return axios.get('/api/notes').then((response) => response.data);
  },

  addNote(newNote) {
    // Simulating API call to add a new note
    return axios.post('/api/notes', newNote);
  },
};

export default fakeNotesAPI;

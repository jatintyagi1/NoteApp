import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNotes = () => {
    const [notes, setNotes] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [noteData, setNoteData] = useState({ title: '', content: '' });

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const handleEdit = (index) => {
        setEditIndex(index);
        setNoteData(notes[index]);
    };

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            const updatedNotes = notes.filter((_, i) => i !== index);
            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        }
    };

    const handleSave = () => {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = noteData;
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setEditIndex(-1);
        setNoteData({ title: '', content: '' });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">My Notes</h2>
            {notes.length === 0 ? (
                <div className="alert alert-info">No notes available. Please add some notes.</div>
            ) : (
                <div className="row">
                    {notes.map((note, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    {editIndex === index ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={noteData.title}
                                                onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
                                                placeholder="Title"
                                                className="form-control mb-2"
                                            />
                                            <textarea
                                                value={noteData.content}
                                                onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
                                                placeholder="Content"
                                                className="form-control mb-2"
                                            />
                                            <button className="btn btn-primary" onClick={handleSave}>Save</button>
                                            <button className="btn btn-secondary ms-2" onClick={() => setEditIndex(-1)}>Cancel</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <h5 className="card-title">{note.title}</h5>
                                            <p className="card-text">{note.content}</p>
                                            <button className="btn btn-warning" onClick={() => handleEdit(index)}>Edit</button>
                                            <button className="btn btn-danger ms-2" onClick={() => handleDelete(index)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyNotes;

import React, { useState } from 'react';

const AddNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = { title, content };
        // Save to local storage (example)
        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        existingNotes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(existingNotes));

        // Reset form
        setTitle('');
        setContent('');
        alert('Note added successfully!');
    };

    return (
        <div className="container mt-5">
            <h2>Add Note</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="noteTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="noteTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="noteContent" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="noteContent"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save Note</button>
            </form>
        </div>
    );
};

export default AddNote;

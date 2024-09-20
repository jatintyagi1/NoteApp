import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="container text-center">
            <h1 className="display-4 mt-5">Welcome to NotesApp!</h1>
            <p className="lead">Your simple solution for managing notes effectively.</p>

            <div className="mt-4">
                <Link to="/add-note" className="btn btn-primary btn-lg mx-2">Add a Note</Link>
                <Link to="/my-notes" className="btn btn-secondary btn-lg mx-2">View My Notes</Link>
            </div>

            <h2 className="mt-5">Featured Notes</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Note 1</h5>
                            <p className="card-text">This is a brief description of Note 1.</p>
                            <Link to="/my-notes" className="btn btn-outline-primary">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Note 2</h5>
                            <p className="card-text">This is a brief description of Note 2.</p>
                            <Link to="/my-notes" className="btn btn-outline-primary">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Note 3</h5>
                            <p className="card-text">This is a brief description of Note 3.</p>
                            <Link to="/my-notes" className="btn btn-outline-primary">View</Link>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mt-5">Why Use NotesApp?</h2>
            <ul className="list-group mt-3">
                <li className="list-group-item">📅 Organize your thoughts easily.</li>
                <li className="list-group-item">📝 Edit and delete notes with ease.</li>
                <li className="list-group-item">🔍 Search for notes quickly.</li>
                <li className="list-group-item">🔒 Secure your notes with authentication.</li>
            </ul>
            <Footer />
        </div>
    );
};

export default Home;

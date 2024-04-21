import './Form.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export default function Form() {
   
    type FormData = {
        name: string;
        genre: string;
        artist: string;
        date: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: '',
        genre: '',
        artist: '',
        date: ''
    });

    function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(function(prev) {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit  (e: React.FormEvent)  {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData)); 
        console.log('Form data :', formData);
    }

    function handleReset  ()  {
        setFormData({
            name: '',
            genre: '',
            artist: '',
            date: ''
        });
      }

    return (
        <div className='container'>
            <h3>Your day, your choice, your song</h3>
            <p>Form & Historical Cards</p>
            <form id="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" maxLength={15}   value={formData.name} required onChange={handleInput} />
                <label htmlFor="genre">Genre:</label>
                <select id="genre" name="genre"  value={formData.genre} required onChange={handleInput}>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                    <option value="K-Pop (Korean Pop)">K-Pop (Korean Pop)</option>
                    <option value="Funk">Funk</option>
                    <option value="Metal">Metal</option>
                    <option value="Jazz">Jazz</option>
                </select>
                <label htmlFor="artist">Artist:</label>
                <input type="text" id="artist" name="artist" maxLength={15}  value={formData.artist} required onChange={handleInput} />
                <label htmlFor="date">Date for note:</label>
                <input type="date" id="date" name="date" min="2022-01-01" max="2025-12-31"  value={formData.date} required onChange={handleInput} />
                <div id="buttons">
                    <input type="submit" value="Submit" className='btn' />
                    <button type="button" onClick={handleReset} className ='button'>
                        <FontAwesomeIcon icon={faTrashAlt} /> Clear
                    </button>
                    </div>
            </form>
        </div>
    )

}

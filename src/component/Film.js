/* eslint-disable jsx-a11y/anchor-is-valid */
import { listFilms } from '../shared/ShareFilm'
import { useState } from 'react';


function Film() {
    const [film, setFilm] = useState([])

    return (
        <div className="container">
            {listFilms.map((Film) => (
                <div className="column" key={Film.id}>
                    <div className="card">
                        <img src={Film.Image} alt="daylahinhanh=))" style={{ width: "100%", height: 600 }} />
                        <h3>{Film.Title}</h3>
                        <p className="title">Publisher: {Film.Year} Nation: {Film.Nation}</p>
                        <p>
                            <button>
                                <a href="#popup1" id="openPopUp" onClick={() => setFilm(Film)} > Detail </a>
                            </button>
                        </p>
                    </div>
                </div>

            ))}

            <div id="popup1" className="overlay">
                <div className="popup">
                    <a className="close" href="#">&times;</a>
                    <img src={film.Image} alt="" style={{ height: 250 }} />
                    <h2>{film.Title}</h2>

                    <div className="content">{film.Info}</div>
                </div>
            </div>
        </div>
    );
}

export default Film;

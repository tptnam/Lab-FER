import { listFilms } from '../shared/ShareFilm'

function Film() {
    return (
        <div className="container">
            {listFilms.map((Film, index) => (
                <div className="column" key={index}>
                    <div className="card">
                        <img src={Film.Image} alt="daylahinhanh=))" style={{ width: "100%", height: 600 }} />
                        <h3>{Film.Title}</h3>
                        <p className="title">Publisher: {Film.Year} Nation: {Film.Nation}</p>
                        <p>
                            <button>
                                <a href="#popup1" id="openPopUp"> Detail </a>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Film;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom'
import { Container, Card, Button, Grid } from '@mui/material';
import Image from 'mui-image';
import { listFilms } from '../shared/ShareFilm'

function FilmDetail() {
    const filmDetail = useParams();
    const Film = listFilms.find((obj) => {
        // eslint-disable-next-line eqeqeq
        return obj.id == filmDetail.id;
    });


    return (

        <Container>
            <Grid container>
                <Grid item lg={12}>
                    <Card className="card">
                        <Image src={`../${Film.Image}`} alt="daylahinhanh=))" showLoading />
                        <h3>{Film.Title}</h3>
                        <p className="title">Publisher: {Film.Year} Nation: {Film.Nation}</p>
                        <div className="content">{Film.Info}</div>
                    </Card>
                </Grid>
            </Grid>

        </Container >
        // <div div className="container" >
        //     <div className="column" key={film.id}>
        //         <div className="card">
        //             <img src={`../${film.Image}`} alt="daylahinhanh=))" style={{ width: "100%", height: 600 }} />
        //             <h3>{film.Title}</h3>
        //             <p className="title">Publisher: {film.Year} Nation: {film.Nation}</p>
        //             <div className="content">{film.Info}</div>
        //         </div>
        //     </div>
        // </div >
    );
}

export default FilmDetail;

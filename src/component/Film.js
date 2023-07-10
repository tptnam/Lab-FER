/* eslint-disable jsx-a11y/anchor-is-valid */
import { listFilms } from '../shared/ShareFilm'
import { Link } from 'react-router-dom'
import { Container, Card, Button, Grid } from '@mui/material';
import Image from 'mui-image';

function Film() {
    return (
        <Container>
            <Grid container spacing={2}>
                {listFilms.map((Film) => (
                    <Grid item lg={4} key={Film.id}>
                        <Card className="card">
                            <Image src={Film.Image} alt="daylahinhanh=))" showLoading height={500} />
                            <h3>{Film.Title}</h3>
                            <p className="title">Publisher: {Film.Year} Nation: {Film.Nation}</p>
                            <p>
                                <Button >
                                    <Link to={`/FilmDetail/${Film.id}`}>
                                        Detail
                                    </Link>
                                </Button>
                            </p>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Container >
    );
}

export default Film;

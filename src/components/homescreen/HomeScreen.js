import React from 'react';
import "../homescreen/HomeScreen.css"
import NavBar from '../navbar/NavBar';
import Banner from '../banner/Banner';
import Row from '../row/Row';
import requests from '../../api/Requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <NavBar />

      <Banner />

      < Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      < Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      < Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      < Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      < Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      < Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      < Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      < Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
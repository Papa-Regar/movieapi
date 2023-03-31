import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';


const Main = () => {

  const [movie, setMovie] = useState([])
  const [textinput, setTextinput] = useState('')
  const [query, setQuery] = useState('')
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e9a0daa4a8msh9d1b894afd4f1e8p11a838jsn08fbdbe1c607',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  const getMovie = async () => {
    const response = await fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=${query}`, options
    );
    const data = await response.json();
    setMovie(data.d)
    console.log(data.d)
  }

  useEffect(() => {
    getMovie();
  }, [query])

  const onChangeHandler = (e) => {
    setTextinput(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(textinput)
  }
  return (
    <div style={{ height: '100vh' }} class="header finisher-header">
      <div>
        <h1 style={{ textAlign: 'center', marginTop: 40, color: 'white' }}>Movies Go</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', padding: 30 }}>
          <form onSubmit={onSubmitHandler}>
            <input type='text' style={{borderRadius:10, display: 'inline-block', boxSizing: 'border-box', backgroundColor: 'black', color: 'white'}} required placeholder='Enter keyword' onChange={onChangeHandler} />
            <button style={{borderRadius: 10, marginLeft:10 }}>Search</button>
          </form>
        </div>
        <div style={{paddingTop:30 ,paddingBottom: 30, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'black', gap: 10 }}>
          {
            movie.map((movie) => (
              <Movie style={{ flexDirection: 'row' }} key={movie.l} title={movie.l} image={movie.i} rank={movie.rank} summary={movie.s} id={movie.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Main

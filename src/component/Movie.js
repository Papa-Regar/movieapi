import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Movie = ({title, image, rank, summary, id}) => {


  return (
    <div style={{backgroundColor: 'black'}}>
        <Card style={{ width: '18rem', borderColor: 'black', borderRadius: 30 }}>
      <Card.Img variant="top" src={image.imageUrl} className='mx-auto'  style={{ height: '300px', objectFit: 'cover' }}  />
      <Card.Body className='bg-dark text-white'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {summary} <br></br>
          Ranking :{rank}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movie

import React  from 'react';
import Post from './Post';

export default function Livro({ book, escolherLivro }){

  return (
    <Post select={escolherLivro} data={book} />
  );
};
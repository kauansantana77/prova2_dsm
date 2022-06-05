import React, {useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Post from './Post';
import Livro from './book';

export default function BookList(){
  const [data, setData] = useState([]);
  const [LivroEscolhido, setEscolherLivro] = useState(null);

  function livros(){

    fetch('https://hn.algolia.com/api/v1/search?query=chave')
      .then((re) => re.json())
      .then((json) => {
        setData(json.hits);
      });
  }
  useEffect(() => {
    livros();
  }, []);

  function EscolherLivro(livro){
    setEscolherLivro(livro);
  }


  return (
    <>
    {
      LivroEscolhido === null ? (
      <>
        <Text style={{textAlign: 'center', fontSize: '50', marginTop: 20, }}>PROVA 2 - KAUAN SANTANA</Text>
        <FlatList
          initialNumToRender={20}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Post select={() => EscolherLivro(item)} data={item} />}
        />
      </>) : 
        <Livro  select={() => EscolherLivro(null)} livro={LivroEscolhido} />
         
    }
    </>
  );
};
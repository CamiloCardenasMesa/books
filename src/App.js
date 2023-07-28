import {useState} from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',  {
           title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    return (
      <div className="app">
          <h1>Reading List</h1>
          <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
          <BookCreate onCreate={createBook} />
      </div>
    );
}

export default App;

/*
esta aplicación tiene 3 pasos
1) lista de libros locales no persistentes
2) Persistir los libros usando una Api Externa
3) api externa + estado centralizado

en esta rama (refactor):
1) Crearé una API y entenderé cómo funciona
2) Cada vez que nuestra app se inicie, me aseguraré de hacer una solicitud inicial para obtener la lista actual de los libros
3) Voy a volver a mis tres funciones de este archivo (crear, editar y eliminar) y las actualizaré con la info de la api.

primeros pasos: Json Server Setup
1) instalar JSON-Server con npm en la terminal
2) crear un archivo "ds.json". En este archivo se guardará la data.
3) Crear un comando para correr JSON-Server
4) Correr el comando

*/
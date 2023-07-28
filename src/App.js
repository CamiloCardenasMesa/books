import {useState, useEffect} from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);


    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

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

UseEffect
1) Entender que pasa cuando se usa useEffect
    1.1) si usamos useEffect siempre se va a renderizar apenas iniciamos la app
    1.2) luego, esta funciòn puede o no ejecutarse dependiendo de lo que pasemos en el segundo argumento, en este caso es el array.
    1.3) el segundo argumento puede ser un array vacìo, un array con algo o simplemente nada.
    1.3.1) si pasamos el array vacio: la funciòn flecha se ejecuta la primera vez y no se vuelve a ejecutar.
    1.3.2) Si no pasamos segundo argumento: la funcion flecha se ejecutarà siempre
    1.3.3) Si pasamos un array con algo en el array: la funcion flecha se ejecuta la primera vez y se vuelve a ejecutar si algo de lo que està adentro del array cambia.

2) 
3)
*/
import { useEffect, useContext} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const{fetchBooks} = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
      <div className="app">
          <h1>Reading List</h1>
          <BookList />
          <BookCreate />
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

Hooks
son funciones que añaden características adicionales a un componente. Generalmente comienzan con la palabra "use"
useState: permite a un componente usar el stateSystem
useEffect: permite a un componente correr código en puntos de tiempo específicos
useContext: permite acceder a los valores de un componente almacenados en el contexto
*/
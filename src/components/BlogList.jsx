import { useState } from 'react';

// ARRAY STRINGHE
const initialBlog = ['Team rocket', 'eggrocketcollector', 'unianime', 'berserkfans'];

//COMPONENTE
export default function BlogList() {

    // STATO BLOG LIST
    const [blogs, setBlogs] = useState(initialBlog);
    // STATO INPUT DI INSERIMENTO NUOVO BLOG
    const [newblog, setNewBlog] = useState('');

    // FUNZIONE DI CB AGGIUNTA BLOG ALLA LISTA 
    const addBlog = e => {
        e.preventDefault();
        // VERSIONE CON CREAZIONE DI NUOVO ARRAY
        const updateBlogs = [...blogs, newblog];
        setBlogs(updateBlogs);
        // AZZERIAMO IL VALORE DI NEWBLOG
        setNewBlog('');
    }

    // FUNZIONE DI CB RIMOZIONE BLOG ALLA LISTA 
    const removeBlog = i => {
        const updateBlogs = blogs.filter((blog, index) => {
            return index !== i
        });
        setBlogs(updateBlogs);



    }
    return (
        <>
            <form onSubmit={addBlog}>
                <input type='text' value={newblog}
                    onChange={event => { setNewBlog(event.target.value) }}
                />
                <button>INVIA</button>
            </form>

            {blogs.map((blog, i) =>
                <li key={i}>
                    {blog}
                    <button onClick={() => removeBlog(i)}>
                        Elimina
                    </button>

                </li>
            )}
        </>
    )
}


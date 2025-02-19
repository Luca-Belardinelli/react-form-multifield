import { useState } from 'react';

// ARRAY STRINGHE
const initialBlog = [{
    id: 1,
    titolo: "Top 10 Pokémon Leggendari",
    autore: "Ash Ketchum",
    contenuto: "In questo articolo esploriamo i Pokémon leggendari più amati e potenti di tutte le generazioni...",
    categoria: "Pokémon"
},
{
    id: 2,
    titolo: "I migliori momenti di One Piece",
    autore: "Monkey D. Luffy",
    contenuto: "Ripercorriamo alcune delle scene più emozionanti ed epiche dell'anime di One Piece...",
    categoria: "Anime"
},
{
    id: 3,
    titolo: "Come allenare un team competitivo",
    autore: "Misty",
    contenuto: "Scopri le strategie migliori per creare un team competitivo nel mondo Pokémon...",
    categoria: "Pokémon"
},
{
    id: 4,
    titolo: "Nuovi episodi di Demon Slayer: cosa aspettarsi",
    autore: "Tanjiro Kamado",
    contenuto: "Analizziamo le anticipazioni sui prossimi episodi dell'amato anime Demon Slayer...",
    categoria: "Anime"
},
{
    id: 5,
    titolo: "Pokémon shiny: tutto quello che devi sapere",
    autore: "Professor Oak",
    contenuto: "Una guida completa per trovare e catturare Pokémon shiny durante le tue avventure...",
    categoria: "Pokémon"
}];


//  AGGIUNGIAMO I CAMPI VUOTI AL FORM
const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: "",
};

const BlogList = () => {
    // UTILIZZO USESTATE PER LA GESTIONE DEI DATA 
    const [blogs, setBlogs] = useState(initialBlog);
    //STATE GESTIONE INFORMAZIONI RACCOLTE DAI CAMPI DEL FORM
    const [formData, setFormData] = useState(initialFormData);

    // FUNZIONE GESTIONE INFO CAMPI
    function handleFormData(e) {
        // GESTIONE VALUE A SECONDA DEL TIPO DI INPUT
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        //SETTA TRAMITE SETSTATE L'OGGETTO CON LE INFO PRESI DAI CAMPI DEL FORM
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    return (
        <>
            <h1>QUESTO è UN POSTO SICURO PER I NERD</h1>

            <form action="#">
                {/* valore titolo blog */}
                <input
                    type="text"
                    titolo="titolo"
                    onChange={handleFormData}
                    value={formData.titolo}
                    placeholder='titolo del blog'
                />


                {/* valore autore blog */}
                <input
                    type="text"
                    titolo="titolo"
                    onChange={handleFormData}
                    value={formData.autore}
                    placeholder='autore del blog'
                />

                {/* valore contenuto blog */}
                <textarea
                    type="text"
                    titolo="titolo"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder='contenuto del blog'
                />


                {/* valore categoria blog */}
                <input
                    type="text"
                    titolo="titolo"
                    onChange={handleFormData}
                    value={formData.categoria}
                    placeholder='categoria del blog'
                />

                <button>Cerca</button>


            </form >





            {/* MAP */}

            {
                blogs.map((blog) => (

                    <div key={blog.id}>
                        <h2>{blog.titolo}</h2>
                        <span>{blog.autore}</span>
                        <p>{blog.contenuto}</p>
                        <span>{blog.categoria} </span>
                    </div>

                ))
            }
        </>
    )
}


export default BlogList
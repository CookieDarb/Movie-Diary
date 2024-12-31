export default function Entry(props){

    const {img,title,director,releaseDate,imdbLink,text}=props.movie
    const {src,alt}=props.movie.img
    return(
      <article>
        <section className="Movie-Poster">
            <img src={src} alt={alt} width="150" height="225"/>
        </section>
        <section className="Movie-Data">
            <h1 className="title">{title}</h1>
            <p className="director">By {director}</p>
            <p className="releaseDate">{releaseDate}</p>
            <p className="text">{text}</p>
            <a href={imdbLink} target="_blank">View on IMDb</a>
        </section>
      </article>  
    )
}
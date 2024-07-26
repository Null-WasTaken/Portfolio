import {GrGithub} from "react-icons/gr";


export default  function ProjectSlide() {

    const Dave = {
        id: 1,
        Title: "Dave",
        Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi assumenda dolores eligendi enim est illo magni maxime mollitia officia officiis quas temporibus? Esse, facere itaque nesciunt officia sapiente vero!",
        Img: "https://imgur.com/7fHPurp",
        GitHub : "https://github.com/Null-WasTaken/companion"
    }

    return (
        <>
            <img className="w-[700px]" src={Dave.Img} alt="Project Poster"/>
            <h1 className="text-5xl">{Dave.Title}</h1>

            <p>{Dave.Desc}</p>
            <a href={Dave.GitHub} className="text-4xl"><GrGithub/></a>
        </>

    )
}
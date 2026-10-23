const ProjectCard = ({ titulo, descripcion, imagen, link }) => {
    return (
        <div className="card h-100">
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href={link} target="_blank" rel="noreferrer" className="btn-card">
                    Ir
                </a>
            </div>
        </div>
    );
}

export default ProjectCard
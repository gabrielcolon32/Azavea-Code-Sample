function ProjectItem(props){
    const location = useLocation();
    const history = useHistory();

    let backgroundImage;
    if(props.category === "Astronomy"){backgroundImage = astronomyBanner}
    else if (props.category === "Planetary Radar"){backgroundImage = planetaryBanner}
    else if (props.category === "Atmospheric Science"){backgroundImage = atmosphericBanner}


    async function deleteHandler(projectID){
        const user = {
            username: location.state,
            projectID: projectID
        }
        const response = await fetch('http://localhost:3000/researchers/unsave-project',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        const answer = response.json();
        console.log(answer.answer);
        window.location.reload();
    }


    return(
        <div className="col-md-6">
            <div className="card mb-4 o-hidden"><img className="card-img-top" src={backgroundImage} alt="Project Background" />
                <div className="card-body">
                    <h5 className="card-title"><span>Project Title: </span>{props.title}</h5>
                    <h6 className="card-title"><span>Project ID: </span>{props.projectID}</h6>
                    <h6 className="card-title"><span>Researchers: </span>{props.researchers.join(', ')}</h6>
                    <h6 className="card-title"><span>Date: </span>{props.researchers.year}</h6>
                </div>
               
                <div className="card-body"><a className="card-link" href="/">Expand</a><button className="btn btn-danger m-1" type="button" onClick={() => {deleteHandler(props.projectID)}}>Unsave</button></div>
            </div>
        </div>
    );
}

export default ProjectItem;

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">Redux & Context</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"
                                    to="Home">context without api</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="movie">context with api</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="counter"
                                    aria-disabled="true">Redux without api</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="index">Redux with api</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="add">Redux with api(add)</Link>
                            </li>
                           

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
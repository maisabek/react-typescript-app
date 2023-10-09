import { useContext, useEffect } from "react";
import { movieContext } from "./store";

const Movies = () => {
    let data = useContext(movieContext)
    useEffect(() => {
        data.getTrendingMovie()
    }, [])
    return (
        <>
            <h5 className="text-primary mb-4">Movies</h5>
            <div className="row" >
                {
                    data.trendingMovie.map((data: any, index: any) =>
                        <div className="col-md-3" key={index}>
                            <div className="bg-primary p-3 my-2 text-white">
                              <h5>{data.title}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Movies;
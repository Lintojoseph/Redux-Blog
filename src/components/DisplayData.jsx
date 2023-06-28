import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import './DisplayData.css'


function DisplayData() {
    const { id } = useParams();
    const blogitems = useSelector(store => store.blog.blogs)


    return (
        <div className="container">
            {blogitems.map((data) => {
                if (id == data.id) {
                    return (
                        <div key={data.id}>
                            <h1>{data.title}</h1>
                            <h2>{data.text}</h2>
                        </div>
                    );
                }
            })}
        </div>

    )
}
export default DisplayData;

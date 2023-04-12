import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/img-size.css';

const URI = process.env.REACT_APP_API_IMG_URL;

const CompShowImgs = () =>{
    const [imgs, setImg] = useState([]);
    useEffect( ()=>{
        getImgs()
    },[]);



//procedimiento para mostrar todas las imagenes
const getImgs = async() => {
    const res = await axios.get(URI);
    setImg(res.data);
    }


//Procedimiento para eliminar Imagenes
const deleteImg = async(id) =>{
    await axios.delete(`${URI}${id}`)
    getImgs();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copiado');
      })
      .catch((err) => {
        console.error('Error', err);
      });
  }
  

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/admin/media/upload" className='btn btn-primary mt-2 mb-2'><i className="fa-regular fa-square-plus"></i></Link>
                    <Link to="https://google.com.ar" className='btn btn-primary mt-2 mb-2'><i className="fa-regular fa-circle-xmark"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Preview</th>
                                <th>View</th>
                                <th>Img URL</th>
                                <th>Video URL</th>
                                <th>Image Name</th>
                                <th>Alt</th>
                                <th>Image Type</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {imgs.map( (img)=> (
                                <tr key={img.id}>
                                <td><img className='img-size' src={img.media_img_url} alt={img.media_alt}/></td>
                                <td>{ <button className='btn btn-info' onClick={() => copyToClipboard(img.media_img_url)}><i className="fa-regular fa-copy"></i></button> }</td>
                                <td>{ img.media_vid_url }</td>
                                <td>{ img.media_name}</td>
                                <td>{ img.media_alt}</td>
                                <td>{ img.media_type}</td>
                                <td>
                                    <Link to={`/edit/${img.id}`} className="btn btn-info"><i className="fa-regular fa-pen-to-square"></i></Link>
                                    <button onClick={ ()=>deleteImg(img.id)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}



export default CompShowImgs;
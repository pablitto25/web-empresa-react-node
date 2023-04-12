import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const URI = process.env.REACT_APP_API_IMG_URL;

const CompUploadImg = ()=>{
    const [media_img_url, setImgUrl] = useState('');
    const [media_vid_url, setVideoUrl] = useState('');
    const [media_name, setImgName] = useState('');
    const [media_alt, setMediaAlt] = useState('');
    const [media_type, setMediaType] = useState('');

    const navigate = useNavigate();

    //Procedimiento para guardar en db
    const store = async(e) =>{
        e.preventDefault();
        axios.post(URI, {media_img_url: media_img_url,
                         media_vid_url: media_vid_url,
                         media_name: media_name,
                         media_alt: media_alt,
                         media_type: media_type});
        navigate('/admin/media');
    }


    return(
        <div>
            <h3>Upload Images</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Img URL</label>
                    <input
                        value={media_img_url}
                        onChange={(e) => setImgUrl(e.target.value)}
                        type="text"
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Video URL</label>
                    <input
                        value={media_vid_url}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        type="text"
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Img Name</label>
                    <input
                        value={media_name}
                        onChange={(e) => setImgName(e.target.value)}
                        type="text"
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Alt</label>
                    <input
                        value={media_alt}
                        onChange={(e) => setMediaAlt(e.target.value)}
                        type="text"
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Image Type</label>
                    <input
                        value={media_type}
                        onChange={(e) => setMediaType(e.target.value)}
                        type="text"
                        className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
        </div>
    )

}


export default CompUploadImg;
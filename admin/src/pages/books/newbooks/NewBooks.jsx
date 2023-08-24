import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import img from '../../../img/img2.jpg';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBooks = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const handleInput = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // For changing the img when selecting a file img
  const [file, setFile] = useState('');
  const [vid, setVid] = useState('');
  const [pdf, setPdf] = useState('');

  // For image submitting to the DB
  const imgDB = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'bookImages');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/kingsmanmoses/image/upload',
        data
      );

      const { url } = uploadRes.data;
      return url;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  // For video submitting to the DB
  const vidDB = async () => {
    const data = new FormData();
    data.append('file', vid);
    data.append('upload_preset', 'bookVid');
    try {
      let uploadVid = await axios.post(
        'https://api.cloudinary.com/v1_1/kingsmanmoses/video/upload',
        data
      );

      const { url } = uploadVid.data;
      return url;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  // For video submitting to the DB
  const pdfDB = async () => {
    const data = new FormData();
    data.append('file', pdf);
    data.append('upload_preset', 'bookPDF');
    try {
      const uploadPDF = await axios.post(
        'https://api.cloudinary.com/v1_1/kingsmanmoses/auto/upload',
        data
      );
      const { url } = uploadPDF.data;

      return url;
    } catch (err) {
      console.log(err);
    }
  };

  // for handling the click for submitting the file to the DB
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
        bookImg: await imgDB(),
        bookPdf: await pdfDB(),
        bookVid: await vidDB(),
      };
      await axios.post('/books', newUser);
      navigate('/books');
    } catch (error) {
      console.error(error.response.data);
    }
  };
  console.log(info);

  return (
    <div className="newUser">
      <Sidebar />
      <div className="newUserCont">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : img} alt="" />
          </div>
          <div className="right">
            <form action="">
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    id={input.id}
                    required
                  />
                </div>
              ))}
              {/* for img */}
              <div className="formInput">
                <label>Book-Img:</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {/* for vid */}
              <div className="formInput">
                <label>Book-Vid:</label>
                <input
                  type="file"
                  required
                  onChange={(e) => setVid(e.target.files[0])}
                />
              </div>
              {/* for pdf */}
              <div className="formInput">
                <label>Book-PDF:</label>
                <input
                  type="file"
                  required
                  onChange={(e) => setPdf(e.target.files[0])}
                />
              </div>

              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooks;

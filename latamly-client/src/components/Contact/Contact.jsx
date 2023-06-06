import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./Contact.module.scss"
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const URI = process.env.REACT_APP_API_CONTACT;
const URI_TEXT = process.env.REACT_APP_API_CONTACT_TEXT;


const Contact = () => {

    const [mail, setMail] = useState('');
    const navigate = useNavigate();
    const [showContact, setShowContact] = useState(false);


    /* Start Language */
    const [lang, setLang] = useState([]);
    const [data, setData] = useState([]);
    const { lg } = useContext(LangContext);

    useEffect(() => {
        getLang()
    }, []);

    const getLang = async () => {
        const res = await axios.get(URI_TEXT);
        setLang(res.data);
    };

    useEffect(() => {
        let output;
        lg === '/' ? output = 'en' : output = 'sp';
        if (lang.cont_json) {
            const value = JSON.parse(lang.cont_json);

            if (value.hasOwnProperty(output) && Array.isArray(value[output]) && value[output].length > 0) {
                setData(value[output][0]);
            }
        }
    }, [lang, lg]);
    /*End Language */



    //Procedimiento guardar

    const createContact = async (e) => {
        e.preventDefault()
        axios.post(URI, { mail: mail })
        navigate({lg})
    }



    const handleButtonClick = () => {
        setShowContact(true);
    };

    return (
        <div id='Contact'>
            <div className={styles.box_container}>
                <div>
                    <img className={styles.img_contact} src='/assets/img/girl_latamly-800x631.png' alt='contacto' />
                </div>
                <div>
                    <h4 className={styles.titleContact}>{data.title}</h4>
                    <Form onSubmit={createContact}>
                        <Form.Group className="mb-3" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Name*" id={styles.formInputs} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id={styles.formInputs}>
                            <Form.Control className="border-0" type="email" placeholder="Email*" id={styles.formInputs} value={mail} onChange={(e) => setMail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Company*" id={styles.formInputs} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Subject*" id={styles.formInputs} required />
                        </Form.Group>
                        <div className={styles.espacio}></div>
                        <Form.Group className="mb-3" id={styles.formTextArea}>
                            <Form.Control className="border-0" as="textarea" rows={5} placeholder="Message*" id={styles.formTextAreaPlaceHolder} required />
                        </Form.Group>
                        <Button className={styles.buttonSend} variant="white" type="submit" onClick={handleButtonClick}>
                            <span className={styles.buttonSendText}>{data.button}</span>
                        </Button>
                    </Form>
                    {showContact && (
                        <p className="alert alert-info mt-3">{data.message}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact;
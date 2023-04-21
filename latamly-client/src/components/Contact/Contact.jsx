import React from 'react'
import styles from "./Contact.module.scss"
import { Form, Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <div className={styles.box_container}>
                <div>
                    <img className={styles.img_contact} src='/assets/img/girl_latamly-800x631.png' alt='contacto' />
                </div>
                <div>
                    <h4 className={styles.titleContact}>Get in touch with us</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Name*" id={styles.formInputs} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail" id={styles.formInputs}>
                            <Form.Control className="border-0" type="email" placeholder="Email*" id={styles.formInputs}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCompany" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Company*" id={styles.formInputs}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSubject" id={styles.formInputs}>
                            <Form.Control className="border-0" type="text" placeholder="Subject*" id={styles.formInputs}/>
                        </Form.Group>
                        <div className={styles.espacio}></div>
                        <Form.Group className="mb-3" controlId="formMessage" id={styles.formTextArea}>
                            <Form.Control className="border-0" as="textarea" rows={5} placeholder="Message*" id={styles.formTextAreaPlaceHolder}/>
                        </Form.Group>
                        <Button className={styles.buttonSend} variant="white" type="submit">
                            <span className={styles.buttonSendText}>Send</span>
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Contact;
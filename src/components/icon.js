import React from 'react';
import { FaTimes, FaRegCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icons"  size="100%" />
            break;
        case 'cross':
            return <FaTimes className="icons" size="100%"/>
            break;
        default:
            return ""
            break;
    }
}

export default Icon;
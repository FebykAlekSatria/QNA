import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import FormLogin from '../component/formLogin';
import ModalForm from '../component/modal';
import FormRegist from '../component/formRegist';
import FormQuestion from '../component/formQuestion';

export default function User() {

    return (
        <div className="text-center">
            <h5>CREATE QUESTION</h5>
            <div className="w-full">
                <FormQuestion />
            </div>
        </div >
    )
}

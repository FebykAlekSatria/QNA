import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import FormLogin from '../component/formLogin';
import ModalForm from '../component/modal';
import BG from '../public/BG.svg';
import FormRegist from '../component/formRegist';

export default function Login() {
    const [login, setLogin] = useState(false);
    const handleCloseLogin = () => setLogin(false);
    const handleShowLogin = () => setLogin(true);

    const [register, setRegister] = useState(false);
    const handleCloseRegister = () => setRegister(false);
    const handleShowRegister = () => setRegister(true);

    return (
        <div className="text-center bg-halaman">
            {/* <div className="static">
                <Image src={BG} />
            </div> */}
            <div className="h-72 pt-32 bg-blue-800 mb-12">
                <h1 className="text-white text-7xl">QnA</h1>
            </div>
            <Button variant="outline-primary" onClick={handleShowLogin}>Masuk</Button><br />
            <label className="text-sm">Belum punya Akun?<a className="text-indigo-900" onClick={handleShowRegister}>Daftar Sekarang</a></label>

            <ModalForm title="MASUK" show={login}>
                <FormLogin handleClose={handleCloseLogin}>
                </FormLogin>
            </ModalForm>

            <ModalForm title="DAFTAR" show={register}>
                <FormRegist handleClose={handleCloseRegister} />
            </ModalForm>
        </div>
    )
}

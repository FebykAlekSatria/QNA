import axios from "axios"
import { FC, useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"

type Props = {
    handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const FormRegist: FC<Props> = (props) => {
    const [name, setName] = useState<String>('')
    const [password, setPassword] = useState<String>('')

    const handleRegist = () => {
        axios.post('http://localhost:5000/user', {
            id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
            username: name,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Form>
            <Modal.Body>
                <div className="items-center text-center space-y-2 px-4">
                    <div className="border-2 rounded-xl">
                        <input className="text-center py-2 font-bold focus:outline-none w-full" placeholder="Nama Pengguna" onChange={e => setName(e.target.value)} />
                        {/* {name} */}
                    </div>
                    <div className="border-2 rounded-xl">
                        <input className="text-center py-2 font-bold focus:outline-none w-full" placeholder="Kata Sandi" onChange={e => setPassword(e.target.value)} type='password' />
                        {/* {password} */}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Batal
                </Button>
                <Button variant="primary" onClick={handleRegist}>
                    Daftar
                </Button>
            </Modal.Footer>
        </Form>
    )
}

export default FormRegist
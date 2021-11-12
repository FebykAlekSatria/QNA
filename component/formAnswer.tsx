import axios from "axios"
import { FC, useState } from "react"
import { Button } from "react-bootstrap"

type Props = {
    questionId: String
}

const FormAnswer: FC<Props> = (props) => {
    const [answer, setAnswer] = useState<String>('')
    const [username, setUsername] = useState<String>('')

    const handleAnswer = () => {
        axios.post('http://localhost:5000/answer', {
            id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
            answer: answer,
            question_id: '123',
            username: username
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="w-1/3 m-auto space-y-4">
            {props.children}
            <div className="border-b-2 ">
                <label className="text-xs">Nama anonim</label><br />
                <input className="w-full px-4 focus:outline-none border-gray-200 border-b-2" onChange={e => setUsername(e.target.value)} /><br />
                <p className="text-xs text-gray-400">Masukkan nama yang ingin anda tampilkan</p><br />
                <label className="text-xs">Komentar</label><br />
                <textarea className="w-full focus:outline-none" onChange={e => setAnswer(e.target.value)} />
            </div>
            <Button variant="primary" onClick={handleAnswer}>SIMPAN</Button>
        </div>
    )
}

export default FormAnswer
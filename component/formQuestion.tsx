import axios from "axios"
import { FC, useState } from "react"
import { Button } from "react-bootstrap"


const FormQuestion = () => {
    const [question, setQuestion] = useState<String>('')

    const handleQuestion = () => {
        axios.post('http://localhost:5000/question', {
            id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
            question: question,
            user_id: "123455"
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
            <div className="border-b-2">
                <label>Masukkan Pertanyaan</label><br />
                <input className="w-full text-center focus:outline-none" onChange={e => setQuestion(e.target.value)} />
            </div>
            <Button onClick={handleQuestion}>SIMPAN</Button>
        </div>
    )
}

export default FormQuestion
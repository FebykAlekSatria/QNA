import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FormAnswer from '../../component/formAnswer'
import ListAnswer from '../../component/listAnswer'
export default function answerDetail() {
    const router = useRouter()
    const { id } = router.query
    const [question, setQuestion] = useState<any>([])
    const [idQuestion, setIdQuestion] = useState<String>('')

    useEffect(() => {
        axios.get('http://localhost:5000/question/', {
            params: { id },
        })
            .then(function (response) {
                setQuestion(response.data)
                console.log(question.id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>

            <FormAnswer questionId={question.id} >
                {
                    question.map((data, key) => {
                        return (
                            <div key={key} className="bg-indigo-900 p-4 rounded-xl">
                                <p className="text-white font-bold text-lg">{data.question}</p>
                                <p className="text-white text-xs">@{data.user_id}</p>
                            </div>
                        )
                    })
                }
            </FormAnswer>
            <ListAnswer questionId='123' />
        </>
    )
}
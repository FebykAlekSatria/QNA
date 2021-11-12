import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Button } from "react-bootstrap"

type Props = {
    questionId: String
}

const ListAnswer: FC<Props> = (props) => {
    const [answer, setAnswer] = useState<any>([])

    useEffect(() => {
        axios.get('http://localhost:5000/answer/', {
            params: props.questionId
        })
            .then(function (response) {
                setAnswer(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div className="w-1/3 m-auto space-y-4">

            {
                answer.map((data, key) => {
                    return (
                        <div key={key}>
                            <p className="text-sm">{data.answer}</p>
                            <p className="text-xs">@{data.username}</p>
                            <hr className="mt-2" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListAnswer
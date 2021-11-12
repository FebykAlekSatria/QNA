import React, { FC, useState } from 'react'

type Props = {
    title: string;
}

const FuncCompt: FC<Props> = (props) => {
    const [counter, setCounter] = useState<number>(0)

    function addCounter(param: number): void {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.children
            }
            {counter}
            <div>
                <button onClick={() => addCounter(counter)}>tambah</button>
            </div>
        </div>
    )
}

export default FuncCompt
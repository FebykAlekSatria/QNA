import React, { FC, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


type Props = {
    title: string;
    show: boolean;
    // handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalForm: FC<Props> = (props) => {

    return (
        <div>
            <Modal show={props.show}>
                <div className="text-center pt-4">
                    <h5 className="font-bold">{props.title}</h5>
                </div>
                {
                    props.children
                }
            </Modal>
        </div>
    )
}

export default ModalForm
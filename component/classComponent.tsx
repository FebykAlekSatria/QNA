import React, { Component } from "react";

interface State {
    counter: number
}
interface Props {
    title: string
    halaman?: string
}

export default class ClasComp extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    _addCount(): void {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.counter}<br />
                {this.props?.halaman}
                <div>
                    <button onClick={() => this._addCount()}>tambah</button>
                </div>
            </div>
        )
    }
}


import React from 'react';
import { Button, Label } from '../styles';


export default class ServiceForm extends React.Component {
    state = {
        title: '',
        description: '',
        timeIn: '',
        timeOut: '',
    }

    onChangeTitle(e) { // para poder editar o input

        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeTimeIn(e) {
        this.setState({
            timeIn: e.target.value
        });
    }
    onChangeTimeOut(e) {
        this.setState({
            timeOut: e.target.value
        });
    }
    onDate(e) {
        const date1 = this.state.timeIn;
        const date2 = this.state.timeOut;

        if (date1.getTime() < date2.getTime()) {
            alert("A Data de Término não pode ser anterior a Data de Início");
        }
        else {
            this.setState({

                title: '',
                description: '',
                timeIn: '',
                timeOut: '',
            });
            alert('Tarefa criada com sucesso!')
        };
    }
    onClick(e) {
    this.setState({

        title: '',
        description: '',
        timeIn: '',
        timeOut: '',
    });
    alert('Tarefa criada com sucesso!')
    }

    render() {
        const { title, description, timeIn, timeOut } = this.state
        return (
            <React.Fragment>

                <div class="row">
                    <form class="col s12">

                        <div class="form-row">
                            <div class="input-field col s12">
                                <Label>Título da Tarefa</Label>
                                <input
                                    type="text"
                                    class="form-control"
                                    value={title}
                                    onChange={e => this.onChangeTitle(e)} >
                                </input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="input-field col s12">
                                <label>Descrição</label>
                                <input
                                    row="3"
                                    type="text"
                                    class="form-control"
                                    value={description}
                                    onChange={e => this.onChangeDescription(e)}>
                                </input>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="finput-field col s4">
                                <label for="date">Data de Início</label>
                                <input
                                    type="datetime-local"
                                    class="form-control"
                                    id="date"
                                    value={timeIn}
                                    onChange={e => this.onChangeTimeIn(e)}></input>
                            </div>
                            <div class="finput-field col s4">
                                <label for="date">Data de Término</label>
                                <input
                                    type="datetime-local"
                                    class="form-control"
                                    value={timeOut}
                                    onChange={e => this.onChangeTimeOut(e)}></input>
                            </div>
                        </div>
                        <div class="finput-field col s4">
                            <Button
                                className="waves-effect waves-light btn-large"
                                variant="outlined"
                                onClick={e => this.onClick(e)}>
                                Criar Tarefa
                            </Button>
                        </div>
                    </form>
                </div>
            </React.Fragment >
        )
    }
}
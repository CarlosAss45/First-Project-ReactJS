import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';

import Header from '../../components/Navbar/index';
import ModalNotification from '../../components/Modals/index'

import api from '../../services/api';

class Register extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            email: "",
            senha: "",
            error: "",
            success: false
        };
    }
    
    handleSignUp = async e => {
        e.preventDefault();
        const { nome, email, senha } = this.state;

        const message = () => {
            this.setState({success: true})
        }

        if(!nome || !email || !senha) {
            this.setState({error: "Preencha todos os dados para se cadastrar "});
        }else {
            try {
                await api.post("/register", { nome, email, senha });
                message()
                setTimeout(() => {
                    this.props.history.push("/login");
                }, 2000 )
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta."})
            }
        }
    };

    render(){
        return(
            <>  
                <Header />
                <section className="container__register">
                    <div className="register__content">
                        <h1>Cadastra-se !</h1>
                        <form onSubmit={this.handleSignUp} className="register__form">
                            {this.state.error && <p>{this.state.error}</p>}
                            <div className="form__items">
                                <input 
                                    type="text"
                                    placeholder=" "
                                    onChange={ e => this.setState({ nome: e.target.value })}
                                    required/>
                                <label htmlFor="">Usuário: </label>
                            </div>
                            <div className="form__items">
                                <input 
                                    type="email"
                                    placeholder=" "
                                    onChange={e => this.setState({ email: e.target.value })}
                                    required/>
                                <label htmlFor="">E-mail: </label>
                            </div>
                            <div className="form__items">
                                <input 
                                    type="password"
                                    placeholder=" "
                                    onChange={e => this.setState({ senha: e.target.value })}
                                    required/>
                                <label htmlFor="">Senha: </label>
                            </div>
                            <button type="submit"       className="form__button">Cadastrar</button>
                        </form>
                        <Link to="/Login" className="link__login">Fazer Login</Link>
                    </div>
                    { this.state.success ? <ModalNotification message="Cadastrado com Sucesso !" /> : null}
                </section>
            </>
        )
    }
}

export default withRouter(Register);
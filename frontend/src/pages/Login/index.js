import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './styles.scss'

import Header from '../../components/Navbar/index';
import { login } from '../../services/auth';
import api  from '../../services/api';



// class EffectLogin extends Component {
//     effect() {
//         const ulSquares = document.querySelector("ul.squares");
//         for (let i = 0; i < 11; i++) {
//             const li = document.createElement("li");

//             const random = (min, max) => Math.random() * (max - min) + min;

//             const size = Math.floor(random(10, 120));
//             const position = random(1, 99);
//             const delay = random(5, 0.1);
//             const duration = random(24, 12);

//             li.style.width = `${size}px`;
//             li.style.height = `${size}`;
//             li.style.bottom = `-${size}`;

//             li.style.left = `${position}%`;

//             li.style.animationDelay = `${delay}s`;
//             li.style.animationDuration = `${duration}s`;
//             li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()}, ${Math.random()}, ${Math.random()})`;

//             ulSquares.appendChild(li);

//         }
//     }
//     render(){
//         return(
//             <ul className="squares">
//                 {this.effect()}
//             </ul>
//         )
//     }
// }
class Login extends Component{
   state = {
       email: "",
       senha: "",
       error: ""
   }

   handleSignIn = async e => {
       e.preventDefault();
       const { email, senha } = this.state;
       if( !email || !senha) {
           this.state({ error: "Preencha e-mail e senha para continuar! "})
       } else {
           try {
               const response = await api.post("/autenticar", {email, senha});
               login(response.data.token);
               this.props.history.push("/contato");
           } catch (err) {
               this.setState({
                   error: "Houve um problema ao logar"
               });
           }
       }
   };

    render(){
        return(
            <>
                <Header />
                <section className="container__login">
                    <div className="login__content">
                        <h1>Bem-Vindo</h1>
                        <span>Faça seu login !</span>
                        <form onSubmit={this.handleSignIn} className="login__form" >
                            {this.state.error && <span className="form__error">{this.state.error}</span>}
                            <div className="form__items">
                                <input 
                                    name="email"
                                    type="email"
                                    placeholder=" "
                                    onChange={e => this.setState({ email: e.target.value })} />
                                <label htmlFor="">Email:</label>
                            </div>
                            <div className="form__items">
                                <input 
                                    type="password"
                                    placeholder=" "
                                    onChange={e => this.setState({ senha: e.target.value})}/>
                                <label htmlFor="">Senha:</label>
                            </div>
                            <button type="submit" className="form__button">Logar</button>
                        </form>
                        <Link to="/register" className="link__register">Registrar-se!</Link>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(Login);
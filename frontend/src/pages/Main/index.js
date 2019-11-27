import React from 'react';
import Header from '../../components/Navbar/index';

import './styles.scss'

export default function main(){
    return(   
       <>
           <Header />
           <section className="container">
                <div className="container__content">
                    <div className="container__filter">

                    </div>
                    <div className="container__showcase">

                    </div>
                </div>
           </section>
       </>
    )
}
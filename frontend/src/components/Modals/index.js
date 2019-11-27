import React, {Component} from 'react';

import './style.scss';

 class ModalNotification extends Component {
    //  constructor(props){
    //      super(props);
    //      this.state = {
    //          top: -100,
    //      }
    //      this.timeout = null;
         
    //  }

    //  onShow = () => {
         
    //      if(this.timeout){
    //          clearTimeout(this.timeout);
    //          this.setState({ top: - 100 }, () => {
    //              this.timeout = setTimeout(() => {

    //              }, 500)
    //          })
    //      }
    //  }

    //  showNotification = () => {
    //      this.setState({
    //          top: 16,
    //      }, () => {
    //          this.timeout = setTimeout(() => {
    //              this.setState({
    //                  top: -100,
    //              })
    //          }, 3000)
    //      })
    //  }

    render(){
        return(
            <>
                <div className="container__notification">
                    <h3>{this.props.message}</h3>
                </div>
            </>
        )
    }
}

export default ModalNotification;
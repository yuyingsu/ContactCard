import React, {Component} from 'react';

class ContactCard extends React.Component {
  render () {
    return (<div>
            <div className='name'>Name: {this.props.name}</div>
            <div className='email'>Email: {this.props.email}</div>
            <div className='mobilephone'>Mobile Phone: {this.props.mobilephone}</div>
            </div>
            )
        }
}

export default ContactCard;
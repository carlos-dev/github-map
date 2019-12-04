import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/actions/users';

import './index.css';

class Modal extends Component {
  state = {
    usernameInput: ''
  }

  handleCloseMap = (event) => {
    const modal = document.querySelector('.modal');

    event.stopPropagation();
    modal.classList.remove('active')
  }

  handleAddUser = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.props.addUserRequest(this.state.usernameInput);
  }

  preventEvents = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  setTextInput = event => {
    let inputMapGL = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input');
    inputMapGL.value = event.target.value
  }

  render() {
    return (
      <div className="modal" onClick={this.handleCloseMap}>
        <div>
          <h3>Adicionar novo usuário</h3>

          <form onSubmit={this.handleAddUser}>
            <input
              type="text"
              placeholder="usuário"
              value={this.state.username}
              onChange={e => this.setState({ usernameInput: e.target.value })}
              onClick={this.preventEvents}
              onKeyUp={this.setTextInput}
              name="username"
              required
            />

            <div className="buttons">
              <button onClick={this.handleCloseMap}>Cancelar</button>
              <button>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

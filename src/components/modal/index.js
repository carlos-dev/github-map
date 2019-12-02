import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/actions/users';

import './index.css';

class Modal extends Component {
  state = {
    username: ''
  }

  handleCloseMap = (e) => {
    e.stopPropagation();
    e.target.classList.remove('active')
  }

  handleAddUser = (event) => {
    event.preventDefault();
    this.props.addUser();
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
              onChange={e => this.setState({ username: e.target.value })}
            />

            <div className="buttons">
              <button>Cancelar</button>
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

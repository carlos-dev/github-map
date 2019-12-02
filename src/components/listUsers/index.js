import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/actions/users';

import './index.css';

class ListUsers extends Component {
  render() {
    return (
      <div className="list-users">
        <div className="user">

          {this.props.users.map(user => (
              <div className="flex" key={user.id}>
                <div>
                  <p>{user.name}</p>
                  <small>{user.username}</small>
                </div>

                <div>
                  <span className="btn-close">x</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);

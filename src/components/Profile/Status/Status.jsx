import React from 'react';
import s from './Status.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status)
      this.setState({status: this.props.status});
  }

  activateEditMode = () => {
    this.setState({editMode: true});
  };
  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.setStatus(this.state.status);
  };
  onStatusChange = (event) => this.setState({status: event.target.value});

  render() {
    return (
      <div className={s.status}>

        {!this.state.editMode
          ? <div>
            Status:
            <span onDoubleClick={() => this.activateEditMode()}> {this.props.status || 'Enter your status'} </span>
          </div>
          : <div>
            <input autoFocus={true} onChange={this.onStatusChange} onBlur={() => this.deactivateEditMode()}
                   value={this.state.status}/>
          </div>}
      </div>
    );
  }
}

export default ProfileStatus;
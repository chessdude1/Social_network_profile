import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode= () => {
    this.setState({
      editMode: true,
    });
  }

  deActivateEditMode= () => {
      console.log(this)
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status : e.currentTarget.value
    }
    )
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status != this.state.status) {
  //     this.setState ({
  //     status: this.props.status
  //     })
  //   }
  // }

 

  render() {
    return (
      <div>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
            onChange = {this.onStatusChange}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            ></input>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;

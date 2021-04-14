import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
      this.setState(
          {
        editMode: true  
        }
      ) 
  }


  deActivateEditMode() {
    this.setState(
        {
      editMode: false  
      }
    ) 
}

  render() {
    return (
      <div>
        <div>
            {
            !this.state.editMode && 
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            }
        </div>
        <div>
            {
            this.state.editMode &&
                <input onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}></input>
            }
        </div>
      </div>
    );
  }
}

export default ProfileStatus;

import * as React from 'react';

interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

interface State {
  editingName: string;
}


export class NameEditComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // Watch out what would happen if we get this user name via an AJAX callback
    // you will find a different implementatin on 05 sample
    this.state = { editingName: this.props.initialUserName };
  }

  onChange = (event) => {
    this.setState({ editingName: event.target.value } as State);
  }

  onNameSubmit = (event: any): any => {
    this.props.onNameUpdated(this.state.editingName);
  }

  public render() {
    return (
      <div>
        <label>Update Name:</label>
        <input value={this.state.editingName} onChange={this.onChange} />
        <input type="submit" value="Change" className="btn btn-default" onClick={this.onNameSubmit} />
      </div>
    );
  }
}

import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  handleSubmit = (event) => {
    this.props.add(this.state.title, this.state.description);
    this.setState ({
      title: '',
      description: ''
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <label className="col-3">Title</label>
          <input name="title" value={this.state.title} onChange={this.handleChange} className="col-3"/>
        </div>
        <div className="row">
          <label className="col-3">Description</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange} className="col-3"></textarea>
        </div>
          <button type="button" className="btn btn-secondary" >Add</button>
      </form>
    )
  }
}

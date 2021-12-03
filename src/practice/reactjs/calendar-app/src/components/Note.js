import React, { Component } from 'react'
import '../styles/notes.css'

export default class Note extends Component {
  onNoteInputChange = (e) => {
    // TO-DO: method calls parent prop handler
    this.props.onNoteInputChange(e.target.value)
  }

  render() {
    return (
        <textarea value={this.props.note}
                  onChange={(e) => {this.onNoteInputChange(e)}}
                  placeholder="Enter your note...">
        </textarea>
    )
  }
}

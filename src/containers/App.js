import React, { Component } from 'react'
import ItemList from '../components/ItemList'
import Hint from '../components/Hint'
import ResponseList from '../components/ResponseList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: this.props.data}
  }

  handleItemClick(index, state) {
    let userChoice = state.data.items[index]
    state.data.response.push({libelle: userChoice.libelle})
    if (userChoice == state.data.answer) {
      state.data.items[index].libelle = 'found'
    } else {
      state.data.items[index].libelle = 'chosen'
      state.data.hintIndex += 1
    }
    this.setState({data: state.data})
  }

  render() {
    return (
      <div>
        <ItemList 
          items={this.props.data.items}
          onItemClick={index =>
            this.handleItemClick(index, this.state)
          } />
        <Hint index={this.props.data.hintIndex} hintList={this.props.data.answer.hint}/>
        <ResponseList response={this.props.data.response} />        
      </div>
      )
  }
}

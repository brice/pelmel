import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { getItems } from './lib'

var dictionary = [
  {"libelle" : "a", "sound": "test.wav", "hint": ["come before e", "come before b", "first letter"], choose: false},
  {"libelle" : "b", "sound": "test.wav", "hint": ["come before e", "come after a", "second letter"], choose: false},
  {"libelle" : "c", "sound": "test.wav", "hint": ["come before d", "come after a", "third letter"], choose: false},
  {"libelle" : "d", "sound": "test.wav", "hint": ["come before e", "come after c", "fourth letter"], choose: false},
  {"libelle" : "e", "sound": "test.wav", "hint": ["come after a", "come after d", "fifth letter"], choose: false},
  {"libelle" : "f", "sound": "test.wav", "hint": ["come after d", "come after e", "sixth letter"], choose: false},
  {"libelle" : "g", "sound": "test.wav", "hint": ["come after e", "come after f", "seventh letter"], choose: false}
];

const items = getItems(dictionary, 6);

const answerIndex = parseInt(Math.random() * 6)

const answer = items[answerIndex]

const data = {
  items: items,
  answer: answer,
  hintIndex: 0,
  response: []
}

render((
    <App data={data}/>
  ), document.getElementById('app'))
import React from 'react'
import { render } from 'react-dom'

var dictionary = [
  {"libelle" : "a", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "b", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "c", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "d", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "e", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "f", "sound": "test.wav", "hint": ["a", "b", "c"]},
  {"libelle" : "g", "sound": "test.wav", "hint": ["a", "b", "c"]}
];

render((
    <div className="app">
      Hello World Again
    </div>
  ), document.getElementById('app'))
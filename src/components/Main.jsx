import React from 'react';

import List from './List.jsx'

const listF = [
  'HTML & CSS',
  'Bootstrap',
  'JavaScript',
  'ES2015 & Babel',
  'Node.js & NPM',
  'ESLint',
  'Jest',
  'React.js',
  'TypeScript'
]

const listO = [
    'C & C++'
]

const listG = [
  'Linux & Terminal',
  'SSH',
  'HTTP',
  'Git & GitHub',
  'Data Structures & Algorithms'
]

export default class Main extends React.Component {
    render() {
        return (
          <div className="main">
            <hr />
            <p>I started to study programming on C/C++ by myself at 19 years old and tried to work on Linux. 
               I was programming on Pascal at the school, and on Delphi at the university before that.
               I was working as math tutor simultaneously and was studing SMM and SEO for searching clients. I intend to evolve my programming skill in Web development. Moreover, this is a popular direction. Summing it up, I decided to become a Front-End Developer.</p>
            <hr />
            <p>At that moment I have almost finished to study HTML, CSS and JavaScript, and I am going to choose framework. 
               Now I have mastered next technologies:</p>
            <List listF={listF} listO={listO} listG={listG}/>
            <hr />
          </div>
        )
    }
}

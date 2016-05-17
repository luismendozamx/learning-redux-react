import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import expect from 'expect.js';
import { createStore } from 'redux';

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Lear React',
    completed: false
  };

  const todoAfter = {
    id: 0,
    text: 'Lear React',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).to.eql(todoAfter);
};

testToggleTodo();
console.log('Tests passed');

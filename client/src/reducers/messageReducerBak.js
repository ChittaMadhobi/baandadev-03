import moment from 'moment';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

// if you want to show initial data :)
const INITIAL_DATA = [
  {
    id: 0,
    messageText: 'Respond to Baanda Survey ASAP. XXXXX YYYY AAAA',
    priority: 'high',
    tasknotes: '',
    startDate: moment(),
    completed: true
  },
  {
    id: 1,
    messageText: 'Broadcast the arrival of cooperation-&-togetherness engine.',
    priority: 'medium',
    tasknotes: '',
    startDate: moment(),
    completed: false
  },
  {
    id: 3,
    messageText: 'Respond to Baanda Survey ASAP. XXXXX YYYY',
    priority: 'high',
    tasknotes: '',
    startDate: moment(),
    completed: false
  },
  {
    id: 4,
    messageText:
      'Broadcast the arrival of cooperation-&-togetherness engine.AAAA',
    priority: 'medium',
    tasknotes: '',
    startDate: moment(),
    completed: true
  },
  {
    id: 5,
    messageText: 'Respond to Baanda Survey ASAP. XXXXX YYYY',
    priority: 'high',
    tasknotes: '',
    startDate: moment(),
    completed: false
  },
  {
    id: 6,
    messageText: 'Broadcast the arrival of cooperation-&-togetherness engine.',
    priority: 'medium',
    tasknotes: '',
    startDate: moment(),
    completed: false
  },
  {
    id: 7,
    messageText: 'Respond to Baanda Survey ASAP. XXXXX YYYY',
    priority: 'high',
    tasknotes: '',
    startDate: moment(),
    completed: false
  },
  {
    id: 8,
    messageText:
      'Broadcast the arrival of cooperation-&-togetherness engine. AAAAA',
    priority: 'medium',
    tasknotes: '',
    startDate: moment(),
    completed: true
  }
];
//const INITIAL_DATA = [];

const messageReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(
      //   'in reducer :' +
      //     action.text.messageText +
      //     '|| priority:' +
      //     action.text.priority
      // );
      if (action.text.messageText.trim()) {
        return [
          ...state,
          {
            id: action.id,
            messageText: action.text.messageText,
            priority: action.text.priority,
            tasknotes: action.text.tasknotes,
            startDate: action.text.startDate,
            completed: false
          }
        ];
      } else {
        return state; // return the same state if messageText is null or blank
      }
    //break;
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      const numIndex = parseInt(action.id, 10);
      return state.filter(todo => todo.id !== numIndex);
    default:
      return state;
  }
};

export default messageReducer;

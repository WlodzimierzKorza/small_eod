import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from '../redux/reducers'
import cases from '../dummydata/cases.json'
import tags from '../dummydata/tags.json'
import letters from '../dummydata/letters.json'
import instytutions from '../dummydata/instytutions.json'
import channels from '../dummydata/channels.json'
import events from '../dummydata/events.json'

const initialState = {
    cases: cases.results,
    events: events.results,
    channels: channels.results,
    instytutions: instytutions.results,
    letters: letters.results,
    tags: tags.results,
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store

import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export const CreatePage = () => {
    const store = require('store')
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')
    const [cards, setCards] = useState(store.get('cards') || [])

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        className="create-input"
                        id="card-name"
                        type="text"
                        name="card-name"
                        value={cardName}
                        onChange={e => setCardName(e.target.value)}
                    />
                    <label htmlFor="card-name">Название</label>
                </div>
                <div className="input-field">
                    <textarea
                        className="create-input materialize-textarea"
                        id="card-description"
                        type="text"
                        name="card-name"
                        value={cardDescription}
                        onChange={e => setCardDescription(e.target.value)}
                    />
                    <label htmlFor="card-description">Описание</label>
                </div>
                {(!cardName &&
                    <button className="btn disabled">
                        Создать заметку
                    </button>)
                || (cardName &&
                    <NavLink
                        className="waves-effect waves-light btn create-btn"
                        to='/'
                        onClick={() => {
                            cards.push([cardName, cardDescription])
                            setCards(cards)
                            store.set('cards', cards)
                        }}
                    >
                        Создать заметку
                    </NavLink>)
                }
            </div>
        </div>
    )
}
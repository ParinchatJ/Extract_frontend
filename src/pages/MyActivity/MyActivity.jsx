import './MyActivity.css'
import { useState } from 'react'
import testData from '../../components/CartList/testData'
import CartList from '../../components/CartList/CardList'
import axios from 'axios'
import { useEffect } from 'react'

const api = axios.create({
  withCredentials: true
})


const MyActivity = () => {
  const [ cards, setCards ] = useState(testData)
  
  const login = () => {
    api.post('http://localhost:3000/auth/signin', {
      username: 'test',
      password: '12345',
      email: 'lnwza@gmail.com'
    }).then(() => console.log('login success')).catch(() => console.log('Login failed'))
  }
  const getData = () => {
    console.log('im gonna get the fucking data')
    api.get('http://localhost:3000/user/activities').then(response => {
      console.log('waiting')
      console.log(response.data)
      setCards(response.data)
    },).then(() => console.log('done'))
  }
  useEffect(() => {
    login()
    getData()
  },[])

  // const OnEditMode = (selectedCard) => {
    
  // }

  const removeCard = (selectedCard) => {
    api.delete(`http://localhost:3000/user/activities/${selectedCard._id}`).then(() => {
      const newCards = cards.filter(card => {
        return card._id != selectedCard._id
      })
      setCards(newCards)
    })
  }

  return (
    <div className="my-activity">
      {/* <div className='sidebar'>
        <h1>sidebar</h1>
      </div> */}
      <div className='container'>
        <h1>My Activity</h1>
        <a href='/new'><img src='public/assets/akar-icons_circle-plus-fill (1).png'/></a>
      </div>

        <CartList
          cards={cards}
          onRemove={removeCard}
          // OnEditMode={OnEditMode}
        />
    </div>
  )
}

export default MyActivity
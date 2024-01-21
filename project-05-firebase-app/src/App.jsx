import Navbar from "./components/Navbar"
import { FiSearch } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai"
import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import ContactCard from "./components/ContactCard"
import Modal from "./components/Modal"
import AddAndUpdateContact from "./components/AddAndUpdateContact"
import useDisclouse from "./hooks/useDisclouse"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotFoundContact from "./components/NotFoundContact"
  
const App = () => {
  const [contacts, setContacts] = useState([])
  const {isOpen, onClose, onOpen} = useDisclouse()

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        onSnapshot(contactsRef, (snapshot) => {
          const contactsLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
            }
        })
        setContacts(contactsLists)
        return contactsLists
        })
      } 

      catch(error) {
        console.log(error)
      }
    }

    getContacts()
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value

    const contactsRef = collection(db, "contacts")
    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
          }
      })
      const filteredContacts = contactsLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContacts)
      return filteredContacts
    })    
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 text-3xl text-white absolute"/>
            <input onChange={filterContacts} type="text" className="flex-grow h-10 bg-transparent border border-white rounded-md text-white pl-9" />
          </div>
            <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {
            contacts.length <= 0 ? <NotFoundContact /> : 
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer 
      position="bottom-center" />
    </>
  )
}

export default App
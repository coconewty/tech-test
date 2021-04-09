import React, { useState } from 'react'
import AppView from './App.view'
import { requestStarWarsPerson, requestStarWarsPeople } from '../utilities/api'

const App = () => {
  const [fetchError, setFetchError] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [isNoResultsFound, setIsNoResultsFound] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [personData, setPersonData] = useState(null)
  const [peopleData, setPeopleData] = useState(null)

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = () => {
    setFetchError(false)
    setIsLoadingData(true)
    setIsNoResultsFound(false)
    setPersonData(null)
    setPeopleData(null)

    requestStarWarsPerson(inputValue)
      .then((data) => {
        setIsLoadingData(false)
        if (data.count === 0) {
          setIsNoResultsFound(true)
        }
        if (data.count === 1) {
          setPersonData(data.results[0])
          setInputValue(data.results[0].name)
        }
        if (data.count > 1) {
          setPeopleData(data)
        }
      })
      .catch((e) => {
        setFetchError(true)
        setIsLoadingData(false)
        console.error(e)
      })
  }

  const handleSelectPerson = (person) => {
    setPersonData(person)
    setInputValue(person.name)
    setPeopleData(null)
  }

  const handleRequestPage = (url) => {
    if (!url) return
    setIsLoadingData(true)
    requestStarWarsPeople(url)
      .then((data) => {
        setIsLoadingData(false)
        setPeopleData(data)
      })
      .catch((e) => {
        setPeopleData(null)
        setFetchError(true)
        setIsLoadingData(false)
        console.error(e)
      })
  }

  return (
    <AppView
      fetchError={fetchError}
      isLoadingData={isLoadingData}
      isNoResultsFound={isNoResultsFound}
      inputValue={inputValue}
      peopleData={peopleData}
      personData={personData}
      handleInputOnChange={handleInputOnChange}
      handleFormSubmit={handleFormSubmit}
      handleSelectPerson={handleSelectPerson}
      handleRequestPage={handleRequestPage}
    />
  )
}

export default App

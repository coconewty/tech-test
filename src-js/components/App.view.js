import React from 'react'
import * as Styled from './styles'
import PersonDetails from './PersonDetails.view'
import PeopleList from './PeopleList.view'

const AppView = ({
  fetchError,
  isLoadingData,
  isNoResultsFound,
  inputValue,
  peopleData,
  personData,
  handleInputOnChange,
  handleFormSubmit,
  handleSelectPerson,
  handleRequestPage,
}) => (
  <Styled.Page>
    <Styled.Header>Star wars heroes</Styled.Header>
    <Styled.Main>
      <Styled.Searchbox>
        <h3>Character name</h3>
        <Styled.InputGroup>
          <Styled.FormInput
            type="text"
            placeholder="Eg. R2D2, Skywalker, Chew"
            value={inputValue}
            onChange={handleInputOnChange}
          />
          <Styled.FormButton onClick={handleFormSubmit}>
            Search
          </Styled.FormButton>
        </Styled.InputGroup>
        {fetchError && (
          <Styled.ErrorText>
            Oops - something's not working properly! Have another go 🤞
          </Styled.ErrorText>
        )}
        {isNoResultsFound && (
          <Styled.ErrorText>
            Sorry, but we can't find a person by the name of{' '}
            <strong>{inputValue}</strong>
          </Styled.ErrorText>
        )}
        {peopleData && (
          <PeopleList
            peopleData={peopleData}
            handleSelectPerson={handleSelectPerson}
            handleRequestPage={handleRequestPage}
          />
        )}
        {isLoadingData && <Styled.LoadingAnimation />}
      </Styled.Searchbox>

      {personData && (
        <PersonDetails
          personData={personData}
          handleSelectPerson={handleSelectPerson}
          handleRequestPage={handleRequestPage}
        />
      )}
    </Styled.Main>
  </Styled.Page>
)

export default AppView

import React from 'react'
import { nanoid } from 'nanoid'
import * as Styled from './styles'
import { getPageNumber, getPagesTotal } from '../utilities/pagination'

const PeopleListView = ({
  peopleData,
  handleSelectPerson,
  handleRequestPage,
}) => (
  <>
    <p>
      {peopleData.count} people found. Please select one, or continue searching.
    </p>
    <ul>
      {peopleData.results &&
        peopleData.results.map((person) => (
          <li key={nanoid()}>
            <Styled.ButtonAsLink onClick={() => handleSelectPerson(person)}>
              {person.name}
            </Styled.ButtonAsLink>
          </li>
        ))}
    </ul>
    {peopleData.count > 10 && (
      <>
        <p>
          Page {getPageNumber(peopleData)} of {getPagesTotal(peopleData)}
        </p>
        <button
          disabled={!peopleData.previous}
          onClick={() => handleRequestPage(peopleData.previous)}
        >
          Previous
        </button>
        <button
          disabled={!peopleData.next}
          onClick={() => handleRequestPage(peopleData.next)}
        >
          Next
        </button>
      </>
    )}
  </>
)

export default PeopleListView

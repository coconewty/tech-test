import * as React from 'react'
import * as Styled from './styles'
import { person } from './interfaces'

interface personData {
  personData: person
}

const PersonDetailsView = ({ personData }: personData) => (
  <Styled.Resultsbox>
    <Styled.Table>
      <thead>
        <tr>
          <th colSpan={2}>{personData.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gender</td>
          <td>{personData.gender}</td>
        </tr>
        <tr>
          <td>Birth year</td>
          <td>{personData.birth_year}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{personData.height}</td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>{personData.mass}</td>
        </tr>
        <tr>
          <td>Hair color</td>
          <td>{personData.hair_color}</td>
        </tr>
      </tbody>
    </Styled.Table>
  </Styled.Resultsbox>
)

export default PersonDetailsView

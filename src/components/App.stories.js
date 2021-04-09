import React from 'react'
import AppView from './App.view'
import {
  personData,
  peopleDataWith2,
  peopleDataWith37,
} from '../utilities/api.mock'

export default {
  title: 'App',
  component: AppView,
}

const Template = (args) => <AppView {...args} />

const defaultArgs = {
  fetchError: false,
  isLoadingData: false,
  isNoResultsFound: false,
  inputValue: '',
  personData: null,
  peopleData: null,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const TryThisName = Template.bind({})
TryThisName.args = {
  ...defaultArgs,
  inputValue: 'Luke',
}

export const FetchError = Template.bind({})
FetchError.args = {
  ...defaultArgs,
  fetchError: true,
  inputValue: 'Luke',
}

export const LoadingData = Template.bind({})
LoadingData.args = {
  ...defaultArgs,
  isLoadingData: true,
  inputValue: 'Luke',
}

export const NoResultsFound = Template.bind({})
NoResultsFound.args = {
  ...defaultArgs,
  isNoResultsFound: true,
  inputValue: 'Blah',
}

export const Display2People = Template.bind({})
Display2People.args = {
  ...defaultArgs,
  inputValue: 'Lu',
  peopleData: peopleDataWith2,
}

export const Display37People = Template.bind({})
Display37People.args = {
  ...defaultArgs,
  inputValue: 'L',
  peopleData: peopleDataWith37,
}

export const DisplayPerson = Template.bind({})
DisplayPerson.args = {
  ...defaultArgs,
  inputValue: 'Luke',
  personData: personData,
}

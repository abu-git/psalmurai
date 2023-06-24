import React from 'react'
import AddReleaseForm from '@/components/AddReleaseForm'

function AddRelease() {
  const releaseForm = {
    title: '',
    description: '',
    content: '',
    tracklist: '',
    releaseDate: '',
    spotify: '',
    youtube: '',
    itunes: '',
    tidal: '',
    bandcamp: '',
    audiomack: '',
    img: '',
    slug: '',
    metaImage: '',
  }

  return (
    <AddReleaseForm formId="add-release-form" releaseForm={releaseForm}  />
  )
}

export default AddRelease
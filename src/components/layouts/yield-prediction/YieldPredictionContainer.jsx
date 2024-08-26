import React from 'react'
import InfoSection from './sections/InfoSection'
import FormSection from './sections/FormSection'
import Navigationbar from '../../shared/navbar/Navigationbar'

const YieldPredictionContainer = () => {
  return (
    <div className="size-full">
    <div className="grid z-40  md:grid-cols-2 min-h-[90vh] w-full">
      <FormSection />
      <InfoSection />
    </div>
  </div>
  )
}

export default YieldPredictionContainer

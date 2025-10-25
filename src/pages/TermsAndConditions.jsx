import React from 'react'
import { useSEO } from '../utils/seo'
import TermsContent from '../components/TermsContent'

const TermsAndConditions = () => {
  // SEO optimization for terms page
  useSEO();

  return (
    <main>
      <div className="space-y-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-16">
        <TermsContent/>
      </div>
    </main>
  )
}

export default TermsAndConditions
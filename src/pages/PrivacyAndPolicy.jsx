import React from 'react'
import { useSEO } from '../utils/seo'
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'

const PrivacyAndPolicy = () => {
  // SEO optimization for privacy policy page
  useSEO();

  return (
    <main>
      <div className="space-y-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-16">
        <PrivacyPolicyContent/>
      </div>
    </main>
  )
}

export default PrivacyAndPolicy
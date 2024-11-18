import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'

export default function Portfolio () {
  return (
    <div className="grid grid-cols-3 gap-8">
      <PortfolioCard />
    </div>
  )
}
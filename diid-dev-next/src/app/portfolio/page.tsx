import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'
import projectsData, { Project } from '../../../data/projectData'

export default function Portfolio () {
  return (
    <div className="grid grid-cols-3 gap-8">
      {projectsData.map((project: Project) => (
        <div key={project.id}>
          <PortfolioCard {...project} />
        </div>
      ))}
    </div>
  )
}
import PortfolioCard from '@/components/PortfolioCard'
import React from 'react'
import projectsData, { Project } from '../../../data/projectData'

export default function Portfolio() {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project: Project) => (
        <div key={project.id}>
          <PortfolioCard {...project} />
        </div>
      ))}
    </div>
  )
}

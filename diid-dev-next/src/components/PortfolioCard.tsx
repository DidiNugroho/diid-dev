import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from 'react'

export default function PortfolioCard() {
  return (
    <div>
        <Card>
            <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>
                <p>
                I have worked on a number of projects over the years. Here are a few of them.
                </p>
            </CardDescription>
            </CardContent>
            <CardFooter>
            <a href="/portfolio">View Portfolio</a>
            </CardFooter>
        </Card>
    </div>
  )
}
  
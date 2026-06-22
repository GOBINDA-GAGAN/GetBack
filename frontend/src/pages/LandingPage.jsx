import React from 'react'
import { Button } from "../components/ui/button"
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>LandingPage
      <Link to="/dashboard">

        <Button>Dashboard</Button>

      </Link>
    </div>
  )
}

export default LandingPage
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <Link to="/client/add" className="btn-success btn-block btn">
      <i className="fas fa-plus"></i> New
      </Link>
    </div>
  )
}

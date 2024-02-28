import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function index({ }: Props) {
  return (
    <div>
      <h3>Cart</h3>
      <Link to='/'>Go to back</Link>
    </div>
  )
}
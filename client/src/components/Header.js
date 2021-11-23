import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="control">
      <span>[copy permalink]</span>
      <Link to="/create">[create philosophy]</Link>
      <Link to="/15615615156">[create philosophy]</Link>
      <span className="ml-auto">[lightmode]</span>
    </header>
  )
}

export default Header;

import React from "react"
import Link from "./Link"
import LinkIsSub from "./LinkIsSub"
import SubNav from "./SubNav"
import "./styles.css"

export default () => {
  return (
    <nav className="menu">
      <LinkIsSub isActive href="#" name="Sports" />
      <SubNav />
      <Link href="#" name="Brands" />
      <Link href="#" name="Micoash" />
    </nav>
  )
}

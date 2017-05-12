import React from "react"
import "./styles.css"
import Link from "./Link"

export default () => {
  return (
    <nav className="submenu">
      <Link isActive={true} href="#" name="Shoes" />
      <Link href="#" name="Clothing" />
      <Link href="#" name="Accesories" />
    </nav>
  )
}

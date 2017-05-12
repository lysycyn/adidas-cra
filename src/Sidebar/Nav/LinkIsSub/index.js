import React from "react"
import Link from "../Link"
import "./styles.css"

export default props => {
  const { isActive = false, href, name } = props
  return (
    <div className="has-submenu">
      <Link isActive={isActive} href={href} name={name} />
    </div>
  )
}

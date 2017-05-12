import React from "react"
import cn from "classnames"
import "./styles.css"

export default props => {
  const { isActive = false, href, name } = props
  const className = {
    submenu__item_active: !!isActive,
  }
  return <a className={cn("submenu__item", className)} href={href}>{name}</a>
}

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HeaderItem } from '../../../../types/menu'

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick: () => void }> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmenuOpen(!submenuOpen)
  }

  return (
    <div className="w-full">
      {/* Main link row */}
      <div className="flex items-center justify-between w-full">
        <Link
          href={item.href}
          onClick={() => !item.submenu && onLinkClick()} // ✅ close on click if no submenu
          className={`flex-1 py-2 px-3 
            ${path === item.href ? 'text-primary' : 'text-white'} 
            hover:text-primary`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            onClick={handleToggle}
            className="p-2 text-white hover:text-primary"
            aria-label="Toggle submenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              className={`transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div className="pl-4">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onLinkClick} // ✅ close menu when submenu clicked
              className={`block py-2 px-2 
                ${path === subItem.href ? 'text-primary' : 'text-white'} 
                hover:text-primary`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink

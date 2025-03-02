import { cloneElement, SVGAttributes } from 'react'

interface IconProps {
  icon: React.ReactElement<SVGAttributes<SVGElement>>
}

const Icon = ({ icon }: IconProps) => {
  const IconComponent = cloneElement(icon, {
    className: `size-6 text-gray-500`,
  })

  return IconComponent
}
export default Icon

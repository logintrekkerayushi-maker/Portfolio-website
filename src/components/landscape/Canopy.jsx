import { images } from '../../content/images'
import './Canopy.css'

/** Hanging branches in the top-left corner, in front of everything, swaying in the wind. */
export function Canopy() {
  return (
    <div className="canopy" aria-hidden="true">
      <img src={images.hero.canopy} alt="" className="canopy__img" draggable="false" />
    </div>
  )
}

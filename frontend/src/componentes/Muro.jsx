import { MenuTop } from './MenuTop'
import { Historias } from './Historias'
import { Publicaciones } from './Publicaciones'
import { MenuBottom } from './MenuBottom'

export const Muro = () => {
  return (
    <div>
      <MenuTop />
      <Historias />
      <Publicaciones />
      <MenuBottom />
    </div>
  )
}

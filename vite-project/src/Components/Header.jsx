// importando CSS module,sempre no componente que será estilizado
import style from './HeaderStyle.module.css'

export function Header (){
return (
    <>
    {/* sempre ultilizar no classname o nome da importação, neste caso "style".
    A classe usada no css, no caso header */}
   <header className={style.header}>
   <h1>Bikels Feed</h1>
   </header>
    </>
)
}
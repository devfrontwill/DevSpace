
import { useState } from "react";
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import './menu.css';

export default function Menu() {
    const [active, setActive] = useState(false);
    const toggleMode = () => {
        setActive(!active)
    }

    return (
        <div className="App">
            <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode} >
                <div className="hamburguer hamburguerIcon"></div>
            </div>

            <div className={active ? 'menu menuOpen' : 'menu menuClose'} >
                <nav className="list">
                    <ul className="listItems">
                        <li className="menu__item">
                            <img className="imagem" src={home} alt="" />
                            <a className="imagem" href="/">Início</a>
                        </li>
                        <li className="menu__item">
                            <img className="imagem" src={maisCurtidas} alt="" />
                            <a  className="imagem"href="/">Mais curtidas</a>
                        </li>
                        <li className="menu__item">
                            <img className="imagem" src={maisVistas} alt="" />
                            <a className="imagem" href="/">Mais vistas</a>
                        </li>
                        <li className="menu__item">
                            <img className="imagem" src={novas} alt="" />
                            <a  href="/">Novas</a>
                        </li>                        
                    </ul>
                </nav>
            </div>

        </div>
    )
}

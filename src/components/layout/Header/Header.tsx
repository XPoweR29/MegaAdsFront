import { Btn } from '../../common/Btn'
import './Header.css'

export const Header = () => {
    return <>
        <header>
        <h1><strong>Mega</strong> Ogłoszenia </h1>

        <Btn text='Dodaj ogłoszenie'/>

        <div className="search">
            <input type="text" />
            <Btn text='Szukaj'/>
        </div>
    </header>
    </>
}
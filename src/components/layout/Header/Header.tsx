import { FormEvent, FormEventHandler, useContext, useState } from 'react'
import { SearchContext } from '../../../contexts/search.context';
import { Btn } from '../../common/Btn'
import './Header.css'

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLoaclState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return <>
        <header>
        <h1><strong>Mega</strong> Ogłoszenia </h1>

        <Btn to='/add' text='Dodaj ogłoszenie'/>

        <form className="search" onSubmit={setSearchFromLoaclState}>
            <input type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)}/>
            <Btn text='Szukaj'/>
        </form>
    </header>
    </>
}
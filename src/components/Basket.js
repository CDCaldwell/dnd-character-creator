import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { StatsCard } from './StatsCard';

const scores = [
    { id: 1, name: 15 },
    { id: 2, name: 14 },
    { id: 3, name: 13 },
    { id: 4, name: 12 },
    {id: 5, name: 10 },
    {id: 6, name: 8 },
]

export const Basket = () => {
    const [strengthBasket, setStrengthBasket] = useState([])
    const [dexBasket, setDexBasket] = useState([])
    const [conBasket, setConBasket] = useState([])
    const [intBasket, setIntBasket] = useState([])
    const [wisBasket, setWisBasket] = useState([])
    const [chaBasket, setChaBasket] = useState([])

    const [userStr, setUserStr] = useState([])
    
    // Strength Basket
    const [{ isOverStrength }, dropStrengthRef] = useDrop({
        accept: 'stat',
        drop: (item) => setStrengthBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverStrength: monitor.isOver()
        })
    })
    // Dex Basket
    const [{ isOverDex }, dropDexRef] = useDrop({
        accept: 'stat',
        drop: (item) => setDexBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverDex: monitor.isOver()
        })
    })
    // Con Basket
    const [{ isOverCon }, dropConRef] = useDrop({
        accept: 'stat',
        drop: (item) => setConBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverCon: monitor.isOver()
        })
    })
    // Int Basket
    const [{ isOverInt }, dropIntRef] = useDrop({
        accept: 'stat',
        drop: (item) => setIntBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverInt: monitor.isOver()
        })
    })
    // Wis Basket
    const [{ isOverWis }, dropWisRef] = useDrop({
        accept: 'stat',
        drop: (item) => setWisBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverWis: monitor.isOver()
        })
    })
    // Cha Basket
    const [{ isOverCha }, dropChaRef] = useDrop({
        accept: 'stat',
        drop: (item) => setChaBasket((basket) => 
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOverCha: monitor.isOver()
        })
    })

    return (
        <>
            <div className='stats'>
                {scores.map(stat => <StatsCard draggable id={stat.id} name={stat.name} />)}
            </div>
            <div className='basket'>
                <div className="stat-container" ref={dropStrengthRef}>
                    <p>Strength</p>
                    {strengthBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverStrength && <div>Drop Here!</div>}
                </div>
                <div className="stat-container" ref={dropDexRef}>
                    <p>Dexterity</p>
                    {dexBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverDex && <div>Drop Here!</div>}
                </div>
                <div className="stat-container"ref={dropConRef}>
                    <p>Constitution</p>
                    {conBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverCon && <div>Drop Here!</div>}
                </div>
                <div className="stat-container"ref={dropIntRef}>
                    <p>Intelligence</p>
                    {intBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverInt && <div>Drop Here!</div>}
                </div>
                <div className="stat-container"ref={dropWisRef}>
                    <p>Wisdom</p>
                    {wisBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverWis && <div>Drop Here!</div>}
                </div>
                <div className="stat-container"ref={dropChaRef}>
                    <p>Charisma</p>
                    {chaBasket.map(stat => <StatsCard id={stat.id} name={stat.name} />)}
                    {isOverCha && <div>Drop Here!</div>}
                </div>
            </div>
        </>
    )
}

export default Basket;
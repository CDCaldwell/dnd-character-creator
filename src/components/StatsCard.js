import { useDrag } from 'react-dnd'

export const StatsCard = ({ id, name }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'stat',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='stat-card' ref={dragRef}>
            {name}
            {isDragging && '😱'}
        </div>
    )
}

export default StatsCard;
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Basket from './Basket'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Basket/>
    </DndProvider>
  )
}

export default App
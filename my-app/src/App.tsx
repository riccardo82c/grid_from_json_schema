import { Button } from './components/ui/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"
import GridItems from './components/grid-item'
import Details from './pages/details'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Testing React Typescript Tailwind Shadcn-UI
          </h1>
            <Details />
        </div>
      </div>
    </div>
  )
}

export default App

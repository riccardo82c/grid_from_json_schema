import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const extractLabelFromString = (str: string): string => {
  return str.substring(str.lastIndexOf('.') + 1)
}

// Recursive function to flatten and display nested content
const flattenContent = (content: any): { key: string; value: string }[] => {
  const flatten = (item: any, parentKey: string = ''): { key: string; value: string }[] => {

    if (typeof item !== 'object' || item === null) {
      return [{ key: parentKey, value: String(item) }]
    }

    if (Array.isArray(item)) {
      return item.flatMap((subItem, index) => {
        return flatten(subItem, `${parentKey}[${index}]`)
      }
      )
    }

    return Object.entries(item).flatMap(([key, value]) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key
      return flatten(value, fullKey)
    })
  }

  return flatten(content)
}

const addLayoutItemsOnDepthChange = (flattenedArray: { key: string; value: string }[]): { key: string; value: string }[] => {
  return flattenedArray.flatMap((item, index, array) => {
    const result = [item] // Aggiungi l'elemento corrente

    if (index < array.length - 1) {
      const currentKey = item.key
      const nextKey = array[index + 1].key

      // Estrarre le parti con [N] per confrontare
      const currentSegments = currentKey.match(/\[.*?\]/g) || []
      const nextSegments = nextKey.match(/\[.*?\]/g) || []

      // Aggiungi LAYOUT_ITEM se cambia la profondità o un valore nelle parentesi quadre
      if (
        nextSegments.length > currentSegments.length || // Profondità aumentata
        currentSegments.some((seg, i) => seg !== nextSegments[i]) // Valore differente
      ) {
        result.push({ key: 'LAYOUT_ITEM', value: nextKey }) // Aggiungi LAYOUT_ITEM
      }
    }

    return result
  })
}

export default function DetailAccordion({ title, content }: { title: string, content: unknown }) {
  // Render content as a 2-column grid if it's an array or complex object
  const renderContent = () => {
    if (typeof content === 'string') {
      return content
    }

    const flattenedContent = addLayoutItemsOnDepthChange(flattenContent(content))

    return (
      <div className="grid grid-cols-2 gap-2 w-full bg-gray-50 rounded-sm">
        {flattenedContent.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-md flex flex-col ${item.key === 'LAYOUT_ITEM' ? 'col-span-2 px-2 py-1 bg-transparent' : ''
              }`}
          >
            {item.key === 'LAYOUT_ITEM' ? (
              <>
                <h3 className="font-semibold text-sm">
                  {extractLabelFromString(item.value)}
                </h3>
              </>
            ) : (
              <>
                <span className="font-semibold text-sm text-gray-600">
                  {extractLabelFromString(item.key)}
                </span>
                <span className="text-gray-800 font-medium">{item.value}</span>
              </>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger><p className="capitalize">{title}</p></AccordionTrigger>
        <AccordionContent>
          {renderContent()}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

import esempio_dettaglio from '../fake_data/esempio_dettaglio.json'
import { esitoSchemaTypes } from '../types/details.d'
import DetailAccordion from '../components/detail-accordion'


export default function Details() {

  const { esito, pannello_bando, scheda_iniziativa } = esempio_dettaglio.data
  const { data: esitoData }: { data: esitoSchemaTypes } = esito
  const renderArray = []

  for (const [key, value] of Object.entries(esitoData)) {

    renderArray.push(
      <DetailAccordion
        key={key}
        title={key}
        content={value}
      />
    )
  }

  return (
    <>
      {renderArray}
    </>
  )
}

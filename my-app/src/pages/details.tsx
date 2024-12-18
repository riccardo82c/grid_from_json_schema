import esempio_dettaglio from '../fake_data/esempio_dettaglio.json'
import { esitoSchemaTypes } from '../types/details.d'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import DetailAccordion from '../components/detail-accordion'


export default function Details() {

  const { esito, pannello_bando, scheda_iniziativa } = esempio_dettaglio.data

  const { data: esitoData, schema: esitoSchema }: { data: esitoSchemaTypes, schema: unknown } = esito

  const renderArray = []


  for (const [key, value] of Object.entries(esitoData)) {

    const accordionTitle = key
    const accordionContent = value

    renderArray.push(
      <Accordion type="single" collapsible>
        <AccordionItem value={accordionTitle}>
          <AccordionTrigger>{accordionTitle}</AccordionTrigger>
          <AccordionContent>
            {typeof accordionContent}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }



  return (
    <>
      <DetailAccordion
        title="aggiudicatario"
        content={esempio_dettaglio.data.esito.data.aggiudicatario}
      />

      <DetailAccordion
        title="Asset assegnazione"
        content={esempio_dettaglio.data.esito.data.asset_assegnazione}
      />

      <DetailAccordion
        title="esito_punteggio_cns"
        content={esempio_dettaglio.data.esito.data.esito_punteggio_cns}
      />

      <DetailAccordion
        title="esito_punteggio_enti"
        content={esempio_dettaglio.data.esito.data.esito_punteggio_enti}
      />

      <DetailAccordion
        title="numero_partecipanti"
        content={esempio_dettaglio.data.esito.data.numero_partecipanti}
      />

      <DetailAccordion
        title="offerte_economiche"
        content={esempio_dettaglio.data.esito.data.offerte_economiche}
      />

      <DetailAccordion
        title="punteggio_tecnico_massimo"
        content={esempio_dettaglio.data.esito.data.punteggio_tecnico_massimo}
      />

      <DetailAccordion
        title="relazioni_tecniche"
        content={esempio_dettaglio.data.esito.data.relazioni_tecniche}
      />

    </>
  )
}

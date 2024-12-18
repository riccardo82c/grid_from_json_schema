export interface esitoSchemaTypes {
  aggiudicatario?: {
    CIG?: string | null
    aggiudicatario?: string | null
    aggiudicazione_cns?: boolean | null
    numero_lotto?: string | null
  }[]

  asset_assegnazione?: {
    CIG?: string | null
    asset_in_assegnazione?: {
      importo_asset?: number | null
      nome_asset?: string | null
    }[]
    numero_lotto?: string | null
  }[]

  esito_punteggio_cns?: {
    CIG?: string | null
    numero_lotto?: string | null
    posizione_graduatoria_economica_cns?: number | null
    punteggio_economico_cns?: string | null
    punteggio_economico_sottocriterio_cns?: {
      punteggio?: number | null
      sottocriterio_economico_nome?: string | null
    }[]
    punteggio_tecnico_cns?: number | null
    punteggio_tecnico_sottocriterio_cns?: {
      punteggio?: number | null
      sottocriterio_tecnico_nome?: string | null
    }[]
    punteggio_totale?: number | null
  }[]

  esito_punteggio_enti?: {
    CIG?: string | null
    numero_lotto?: string | null
    enti?: {
      ente?: string | null
      posizione_graduatoria_economica_ente?: number | null
      posizione_graduatoria_tecnica_ente?: number | null
      punteggio_economico_ente?: number | null
      punteggio_economico_sottocriterio_ente?: {
        punteggio?: number | null
        sottocriterio_economico_nome?: string | null
      }[]
      punteggio_tecnico_ente?: number | null
      punteggio_tecnico_sottocriterio_ente?: {
        punteggio?: number | null
        sottocriterio_tecnico_nome?: string | null
      }[]
      punteggio_totale?: number | null
    }[]
  }[]

  numero_partecipanti?: {
    CIG?: string | null
    numero_lotto?: string | null
    numero_partecipanti?: string | null
  }[]

  offerte_economiche?: {
    CIG?: string | null
    numero_lotto?: string | null
    enti?: {
      ente?: string | null
      offerte_economiche?: number | null
    }[]
  }[]

  punteggio_economico_massimo?: {
    CIG?: string | null
    numero_lotto?: string | null
    punteggio_economico_massimo?: number | null
  }[]

  punteggio_tecnico_massimo?: {
    CIG?: string | null
    numero_lotto?: string | null
    punteggio_tecnico_massimo?: number | null
  }[]

  punteggio_totale_massimo?: {
    CIG?: string | null
    numero_lotto?: string | null
    punteggio_totale_massimo?: number | null
  }[]

  relazioni_tecniche?: {
    CIG?: string | null
    numero_lotto?: string | null
    enti?: {
      ente?: string | null
      relazione_tecnica?: string | null
    }[]
  }[]
}

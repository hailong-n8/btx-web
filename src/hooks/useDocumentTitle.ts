import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function useDocumentTitle(titleKeyOrText: string) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const prev = document.title
    document.title = `${t(titleKeyOrText)} — IQEX Exchange`
    return () => { document.title = prev }
  }, [i18n.resolvedLanguage, t, titleKeyOrText])
}

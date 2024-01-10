import React from 'react'
import PDF from './components/PDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App() {

  return (
    <div>
      <PDFDownloadLink document={<PDF />} filename='pdfgeneration.pdf'>
        {
          ({ loading, url, error, blob }) => loading ? <button> Loading Document...</button> :
            <button>Download now!</button>
        }

      </PDFDownloadLink>
      <PDF />
    </div>
  )
}

export default App
import Document from 'next/document'
import * as React from 'react'
import { setup } from 'twind'
import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server'
import twindConfig from '../twind.config'

const sheet = asyncVirtualSheet()

setup({ ...twindConfig, sheet })

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    sheet.reset()

    const initialProps = await Document.getInitialProps(ctx)

    const { id, textContent } = getStyleTagProperties(sheet)

    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    }

    return {
      ...initialProps,
      styles: [...initialProps.styles, React.createElement('style', styleProps)],
    }
  }
}

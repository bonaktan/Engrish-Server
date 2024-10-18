import { Metadata } from 'next'
 
export const metadata = {
  title: 'Engrish - Control Panel',
}
 
export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body>
          <h1>EngrishBeta - Server</h1>
          {children}
        </body>
      </html>
    )
}
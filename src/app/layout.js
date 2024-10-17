import { Metadata } from 'next'
 
export const metadata = {
  title: 'Engrish - Control Panel',
}
 
export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
}
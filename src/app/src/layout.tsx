import Nav from '../ui/Nav';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <Nav/>
        {children}
    </main>
  )
}

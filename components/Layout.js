function Layout(props) {
  return (
    <div className={`layout flex flex-col min-h-screen ${props.className}`}>
      <main className="flex-1 w-full">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

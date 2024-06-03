export default function RootLayout({
    children,
  }: Readonly<{ 
    children: React.ReactNode;
  }>) {
    return (
        <>
            
                <h1>contact Layout
                {children}
                    </h1>    
        </>
    );
  }
  
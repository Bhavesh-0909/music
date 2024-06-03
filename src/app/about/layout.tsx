export default function RootLayout({
    children,
  }: Readonly<{ 
    children: React.ReactNode;
  }>) {
    return (
      
        <body>
            About Layout    
            {children}
        </body>
    );
  }
  
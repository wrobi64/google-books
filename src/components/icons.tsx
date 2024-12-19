export const BookIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className={className}>
      { /* Background with rounded corners */ }
      <rect width="200" height="300" fill="#f0f0f0" rx="10" ry="10"/>
      
      { /* Book spine shadow with rounded corners */ }
      <rect x="180" y="0" width="20" height="300" fill="#e0e0e0" rx="5" ry="5"/>
      
      { /* Book icon with rounded corners */ }
      <rect x="60" y="100" width="80" height="60" fill="#808080" rx="8" ry="8"/>
      
      { /* Text lines representing title with rounded corners */ }
      <rect x="50" y="180" width="100" height="8" fill="#808080" rx="4" ry="4"/>
      <rect x="70" y="200" width="60" height="8" fill="#808080" rx="4" ry="4"/>
      
      { /* Border with rounded corners */ }
      <rect width="200" height="300" fill="none" stroke="#d0d0d0" strokeWidth="2" rx="10" ry="10"/>
    </svg>
  )
}
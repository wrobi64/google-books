import { PropsWithChildren } from "react";

export default function SearchLayout({ children }: PropsWithChildren) {
  return (
    <div>
      Layout Page
      <div>
        {children}
      </div>
    </div>
  )
}
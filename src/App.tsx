import { RouterProvider } from "@src/Router/@routes"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./Services/queryClient"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SystemLayout } from "./Layout"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SystemLayout>
        <RouterProvider />
      </SystemLayout>
    </QueryClientProvider>
  )
}

export default App

import { QueryClient } from '@tanstack/react-query'

/**
 * Instância do QueryClient
 * 
 * Esta instância do QueryClient é usada para gerenciar o estado de cache e realizar consultas de dados
 * no aplicativo React que utiliza a biblioteca React Query.
 * 
 * O objeto de configuração `defaultOptions` define as opções padrão para consultas (queries) realizadas com o QueryClient.
 * Neste caso, `staleTime` é definido como Infinity, o que significa que os dados em cache nunca serão considerados como 'stale' (desatualizados).
 * 
 * @type {QueryClient} - Uma instância do QueryClient configurada com as opções padrão.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
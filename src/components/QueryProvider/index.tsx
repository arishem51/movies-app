import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

type Props = PropsWithChildren;

export const QueryProvider = (props: Props) => {
  return <QueryClientProvider client={queryClient} {...props} />;
};

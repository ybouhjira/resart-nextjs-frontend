import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

export function useNavigateOnSubmit<ReturnType>(
  mutation: (data: FormData) => Promise<ReturnType>,
  route: string,
  errorMessage: string
) {
  const { mutate, isLoading } = useMutation(mutation);

  const router = useRouter();

  return {
    isLoading,

    onSubmit: (data: any) => {
      mutate(data, {
        onSuccess: () => {
          router.push(route);
        },
        onError: (error) => {
          console.error(errorMessage, error);
        },
      });
    },
  };
}

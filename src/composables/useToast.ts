import { ref } from 'vue';

interface IToastProps {
  title: string;
  description: string;
  type: "success" | "error";
}

const toastRef = ref<any>(null);

export function useToast() {
  const showToast = ({ title, description, type }: IToastProps) => {
    if (toastRef.value) {
      toastRef.value.showToast({ title, description, type });
    }
  };
  
  return {
    showToast,
    toastRef
  };
}

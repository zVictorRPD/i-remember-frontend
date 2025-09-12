export interface ICategory {
  value: string | number;
  label: string;
}

export const categoryOptions: ICategory[] = [
  { value: "Aniversário", label: "Aniversário" },
  { value: "Casamento", label: "Casamento" },
  { value: "Formatura", label: "Formatura" },
  { value: "Festa", label: "Festa" },
  { value: "Viagem", label: "Viagem" },
  { value: "Outros", label: "Outros" },
];

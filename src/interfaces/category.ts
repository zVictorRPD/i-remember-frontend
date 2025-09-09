export interface ICategory {
  value: string | number;
  label: string;
}

export const categoryOptions: ICategory[] = [
  { value: "Aniversário", label: "Aniversário" },
  { value: "Casamento", label: "Casamento" },
  { value: "Formatura", label: "Formatura" },
  { value: "Festa", label: "Festa" },
  { value: "Reunião", label: "Reunião" },
  { value: "Viagem", label: "Viagem" },
  { value: "Trabalho", label: "Trabalho" },
  { value: "Pessoal", label: "Pessoal" },
  { value: "Outros", label: "Outros" },
];

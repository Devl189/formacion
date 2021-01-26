export interface FormField {
  type: string;
  id: string;
  mandatory: boolean;
  value?: any;
  label: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

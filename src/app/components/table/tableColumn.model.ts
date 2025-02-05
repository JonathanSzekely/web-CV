export interface TableColumn {
  header: string; // The header text for the column
  field: string; // The field name in the data object
  // type?: 'text' | 'number' | 'date' | 'boolean'; // Optional type of the data
  width?: string; // Optional css grid value width of the column; default is '1fr'
  cssClass?: string; // Optional css class to apply to the column
}

import { TableColumn } from './tableColumn.model';

export const tableColumns: TableColumn[] = [{
  header: '',
  objPropName: 'image',
  width: '100px',
  cssClass: 'recipe-image'
},
{
  header: 'Name',
  objPropName: 'name',
  width: '100px',
  cssClass: 'recipe-name'
},
{
  header: 'Difficulty',
  objPropName: 'difficulty',
  width: '100px',
  cssClass: 'recipe-difficulty'
},
{
  header: 'Time',
  objPropName: 'prepTimeMinutes',
  width: '100px',
  cssClass: 'recipe-time'
},
{
  header: 'Ingredients',
  objPropName: 'ingredients',
  width: '100px',
  cssClass: 'recipe-ingredients'
},
{
  header: 'kcal/serv.',
  objPropName: 'caloriesPerServing',
  width: '100px',
  cssClass: 'recipe-calories'
}];

import './styles/index.scss';

import handleShimmers from './js/shimmers';
import handleDialog from './js/dialog';

document.querySelector('.shimmers') &&
  handleShimmers()

document.querySelector('dialog') &&
  handleDialog()
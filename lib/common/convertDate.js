import moment from 'moment';

export default function convertDate(date) {
  return moment(new Date(date)).format('DD/MM/YYYY | hh:mm');
}
import {appImages} from '../exporter';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const default_img =
  'https://i1.sndcdn.com/avatars-000439901343-0dng23-t500x500.jpg';

let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const LANGUAGE_List = [
  {
    id: 0,
    title: 'English',
    value: 'English',
  },
  {
    id: 1,
    title: 'Spanish',
    value: 'Spanish',
  },
];

const LANGUAGE_SELECT_LIST = [
  {
    id: 0,
    title: 'English',
    selected: false,
  },
  {
    id: 1,
    title: 'Spanish',
    selected: false,
  },
  {
    id: 2,
    title: 'Urdu',
    selected: false,
  },
  {
    id: 3,
    title: 'Arabic',
    selected: false,
  },
];

export {default_img, image_options, LANGUAGE_List, LANGUAGE_SELECT_LIST};

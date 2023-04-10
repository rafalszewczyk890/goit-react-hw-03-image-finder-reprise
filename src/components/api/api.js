import axios from 'axios';
const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (
  query,
  page,
  onNoMoreLoad,
  setImages,
  images
) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&safesearch=true`
  );
  if (response.data.hits.length < 12) {
    onNoMoreLoad();
  }
  if (page > 1) {
    setImages([...images, ...response.data.hits]);
  } else {
    setImages(response.data.hits);
  }
  console.log(response.data.hits);
};

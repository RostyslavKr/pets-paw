export default function writeImageToLS(key, imageObj) {
  const getObjectFromLs = localStorage.getItem(key);
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  const images = parseObjectFromLs || [];
  images.push(imageObj);
  localStorage.setItem(key, JSON.stringify(images));
}

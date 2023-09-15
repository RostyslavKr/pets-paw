export default function getImagesByFilter(limit = 10, breed) {
  try {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}`
    ).then((data) => {
      data.json();
    });
  } catch (error) {
    console.log(error.message);
  }
}

"use client";

export default function Favorites() {
  const likesImage = localStorage.getItem("favorite");
  const parsedLikesImage = JSON.parse(likesImage);
  console.log(parsedLikesImage);
  return (
    <div>
      <ul>
        {parsedLikesImage.map(({ url }) => (
          <li>
            <img src={url} alt="cat" />
          </li>
        ))}
      </ul>
    </div>
  );
}

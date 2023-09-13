"use client";

export default function Likes() {
  const likesImage = localStorage.getItem("like");
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

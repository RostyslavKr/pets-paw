"use client";

export default function Dislikes() {
  const likesImage = localStorage.getItem("dislike");
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

import Link from "next/link";

export default function SearchBar() {
  return (
    <div>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <div>
        <Link href="/likes">Likes</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/dislikes">Dislikes</Link>
      </div>
    </div>
  );
}

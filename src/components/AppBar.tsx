import Link from "next/link";

export default function AppBar() {
    return (
      <div><div>
      <Link href='/'><img src="/logo.png" alt="logo" /></Link>
        </div>
            <div>
                <p>Hi!👋</p>
                <p>Welcome to World of Cats</p>
            </div>
            <p>Lets start using The Cat API</p>
            <div className="flex">
            
          <Link href="/votes"><img src="/vote-table.png" alt="votes" /><p>Votes</p></Link>
          <Link href="/breeds"><img src="/pet-breeds.png" alt="breeds" /><p>Breeds</p></Link>
          <Link href="/gallery"><img src="/images-search.png" alt="gallery" /><p>Gallery</p></Link>
        </div>
        </div>
    
  );
}
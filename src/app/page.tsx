
import { ShoppingBasket, User2Icon, SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-amber-50">
      <header className="bg-[#F97316] p-2 pr-10 pl-10 flex justify-around items-center text-white">
        <div className="logo p-1 font-bold text-[#F97316] bg-white font-mono">
          <h1 className="text-[#1E3A8A] p-0.5 font-mono">PrimeLift Equipment</h1>
          <h5 className="text-white bg-[#F97316] font-mono text-[12px] text-right -m-0.5 p-0.5">Rental</h5>
        </div>
        <div className="search">
          <form className="flex items-center gap-2 border-2 pr-3 border-white">
            <input className="bg-white text-emerald-950 w-120 h-10 p-2" type="search" name="search" id="search" placeholder="What are you looking for?" />
            <button type="submit"><SearchIcon /></button>
          </form>
        </div>
        <span className="login flex border-2 p-1">
          <User2Icon />
          <p>Log In / Sign Up</p>
        </span>
        <div className="account flex gap-5 items-center">
          <span className="cart">
            <ShoppingBasket />
          </span>
        </div>
      </header>
      <nav>
        <ul className="flex justify-around pt-2 pb-2 bg-white">
          <li><Link href='/buy'>Buy</Link></li>
          <li><Link href='/sell'>Sell</Link></li>
          <li><Link href='/payments'>Payments & Receipt</Link></li>
          <li><Link href='/locations'>Locations</Link></li>
          <li><Link href='/services'>Services</Link></li>
          <li><Link href='/solution'>Solutions</Link></li>
          <li><Link href='/training'>Training</Link></li>
          <li><Link href='/safety'>Safety</Link></li>
          <li><Link href='/company'>Company</Link></li>
        </ul>
      </nav>
      <main className="">
        <div className="hero flex gap-2 justify-around h-[70vh] p-5 text-white bg-[#1E3A8A]">
          <div className="flex flex-col gap-5 w-[40%]">
            <h2 className="font-extrabold text-4xl pt-10">Rent Professional Equipment Without the Hassle</h2>
            <p>From power tools to heavy-duty construction equipment, PrimeLift Equipment Rentals makes it easy to find, reserve, and rent the equipment you need all from one place.</p>
            <div className="cta mt-5 pt-2.5 pb-2.5 w-fit border">
              <span>
                <Link className="p-3 bg-white text-[#1E3A8A]" href="/browse">Browse Equipment</Link>
              </span>
              <span>
                <Link className="p-3" href="/contact">Contact Us</Link>
              </span>
            </div>
          </div>
          <div className="w-[40%] h-full bg-white">
            
          </div>
        </div>
{/* Equipment Category */}
        <div className="popular">
          <h3>Equipment</h3>
          <p>Simple and Fast Rental Solution</p>

        </div>
      </main>
    </div>
  );
}


import EquipmentCatalog from "@/components/EquipmentCatalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/ui/logo";
import { ShoppingBasket, User2Icon, SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-amber-50 font-sans">
      <header className="bg-[#F97316] p-2 pr-[10%] pl-[10%] flex justify-between items-center text-white">
        <span className="border-white border-2 -m-2"><Logo /></span>
        <div className="search">
          <form className="flex items-center gap-2 border-2 pr-3 border-white">
            <input className="bg-white text-emerald-950 w-120 h-10 p-2" type="search" name="search" id="search" placeholder="What are you looking for?" />
            <button type="submit"><SearchIcon /></button>
          </form>
        </div>
        <span className="login flex border-2 p-1">
          <User2Icon />
          <Link href="/login">Log In / Sign Up</Link>
        </span>
        <div className="account flex gap-5 items-center">
          <span className="cart">
            <ShoppingBasket />
          </span>
        </div>
      </header>
      <nav>
        <ul className="flex justify-between pt-2 pb-2 pl-[10%] pr-[10%] bg-white">
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
      <main className="relative">
        <div className="hero flex gap-2 justify-between h-[70vh] pr-[10%] pl-[10%] p-5 text-white bg-[#1E3A8A]">
          <div className="flex flex-col gap-5 w-[50%]">
            <h2 className="font-extrabold text-4xl pt-30">Rent Professional Equipment Without the Hassle</h2>
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
          <div className="w-[50%] h-full bg-white">
            <img className="w-full h-full object-cover" src="/images/equipment-rental.jpg" alt="Equipment Rental" />
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-[10%] pr-[10%] pt-10 pb-10">
          <h2 className="text-4xl font-black">Why Choose PrimeLift Equipment Rentals?</h2>
          <p>We are committed to providing our customers with the best rental experience possible. Here are just a few reasons why you should choose us for your equipment rental needs:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Wide Selection of Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We offer a wide range of equipment for rent, including power tools, heavy machinery, and more.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Rental Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We offer flexible rental options to meet your needs, whether you need equipment for a day, a week, or longer.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We offer competitive pricing on all of our equipment rentals, so you can get the equipment you need without breaking the bank.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exceptional Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our team is dedicated to providing exceptional customer service and support throughout the rental process.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
{/* Equipment Category */}
        <div className="equipment-catalog bg-[#F97316] p-5">
          <div className="equipment-catalog-container pl-[10%] pr-[10%] pt-3">
            <EquipmentCatalog />
          </div>
{/* Company Description */}
          <div className="description bg-white ml-[-12.5%] mr-[-12.5%] mt-10 mb-10 pb-10 pt-10">
            <h2 className="text-4xl font-black pl-[10%]">PrimeLift is always ready when you are.</h2>
            <p className="pl-[10%] pr-[10%] pt-3">
              PrimeLift Equipment Rentals provides reliable construction, industrial, landscaping, and event equipment to individuals, contractors, and businesses. We focus on making equipment rental simple through transparent pricing, dependable equipment, and responsive customer service.
            </p>
            <p className="pl-[10%] pr-[10%] pt-3">Whether it's a one-day rental or a long-term project, we help our customers get the tools they need without the cost of ownership.</p>
              
          </div>
          {/* Create Account Banner */}
          <div className="banner flex flex-col bg-[#1E3A8A] p-5 gap-8 text-white mb-50">
            <div className="flex justify-around w-full">
              <div>
                <h3 className="text-2xl">Create an Account to</h3>
                <p className="text-4xl text-[#F97316]">Manage, Rent, Pay</p>
              </div>
              <div>
                <ul>
                  <li>Access reports and dashboard</li>
                  <li>Set up notifications</li>
                  <li>Save your payment methods</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Manage your current rentals</li>
                  <li>Quickly rent your favourite equipment</li>
                  <li>24/7 customer service</li>
                </ul>
              </div>
            </div>
            <div className="btns flex justify-end items-center gap-5 pr-20">
              <Link href="/signup" className="btn bg-[#F97316] p-5 pt-3 pb-3">Create Account</Link>
              <p>Already have an account?</p>
              <Link className="text-[#F97316]" href="/login">Sign In</Link>
            </div>
          </div>
          {/* Get Support */}
          <div className="banner absolute -bottom-65 bg-white flex w-[80%] h-30">
            <span className="banner w-[30%] bg-blue-300"></span>
            <span className="w-[70%] p-5">
              <h5>GET SUPPORT</h5>
              <h3>Need help finding the right equipment?</h3>
              <p>Call us at <a href="tel:+2348135135008">081-3513-5008</a> and we will make it happen.</p>
            </span>
          </div>
        </div>
      </main>
      <footer className=" bg-cyan-950 mt-10 flex flex-col text-white">
        <div className="footer-top flex justify-between pl-[10%] pr-[10%] pt-20 pb-20 bg-cyan-800">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Find Equipment</h2>
            <ul>
              <li>Rent Equipment</li>
              <li>Buy Equipment</li>
              <li>Credit Application</li>
              <li>Find a location</li>
              <li>Purchase used equipment</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2>Customer Support</h2>
            <ul>
              <li>Contact Us</li>
              <li>Rental Tracker</li>
              <li>Create Account</li>
              <li>FAQs</li>
              <li>Rental Protection Plan</li>
              <li>Vendor Payment status</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2>About Us</h2>
            <ul>
              <li>Why rent?</li>
              <li>About PrimeLift Rentals</li>
              <li>Legal</li>
              <li>Investor Relations</li>
              <li>Job Vacancies</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <div className="h-30 pl-[10%] pr-[10%] flex flex-col justify-center items-center">
          <p>© 2026 PrimeLift Equipment Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

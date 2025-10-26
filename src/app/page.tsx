"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Crown, MessageSquare, Phone, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Collections", id: "collections" },
            { name: "Traditional", id: "traditional" },
            { name: "Modern", id: "modern" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nanzi"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Formal Menswear"
          description="Discover the perfect blend of traditional craftsmanship and contemporary style with our curated collection of premium Indian menswear"
          tag="Premium Collection"
          tagIcon={Crown}
          buttons={[
            { text: "Explore Collection", href: "products" },
            { text: "Custom Tailoring", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/32151736/pexels-photo-32151736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Indian man wearing traditional kurta"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Heritage & Style"
          description={[
            "For over three decades, we have been crafting exceptional Indian menswear that celebrates our rich cultural heritage while embracing modern sophistication.",
            "Our master tailors combine time-honored techniques with contemporary designs to create garments that make every man feel confident and distinguished."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Collections"
          description="Handpicked selections from our finest traditional and contemporary menswear"
          tag="Bestsellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Sartori",
              name: "Premium Silk Kurta",
              price: "₹4,500",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/34423741/pexels-photo-34423741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium white silk kurta"
            },
            {
              id: "2",
              brand: "Sartori",
              name: "Royal Sherwani",
              price: "₹18,000",
              rating: 5,
              reviewCount: "980",
              imageSrc: "https://images.pexels.com/photos/27906413/pexels-photo-27906413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Golden royal sherwani"
            },
            {
              id: "3",
              brand: "Sartori",
              name: "Classic Nehru Jacket",
              price: "₹7,500",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Navy blue nehru jacket"
            },
            {
              id: "4",
              brand: "Sartori",
              name: "Traditional Dhoti Set",
              price: "₹3,200",
              rating: 4,
              reviewCount: "820",
              imageSrc: "https://images.pexels.com/photos/15995522/pexels-photo-15995522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "White traditional dhoti set"
            },
            {
              id: "5",
              brand: "Sartori",
              name: "Bandhgala Suit",
              price: "₹25,000",
              rating: 5,
              reviewCount: "640",
              imageSrc: "https://images.pexels.com/photos/4559737/pexels-photo-4559737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Black bandhgala formal suit"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "collections" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from men who trust us for their finest moments"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Rajesh Sharma",
              role: "Business Executive",
              company: "Mumbai",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7581126/pexels-photo-7581126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Rajesh Sharma"
            },
            {
              id: "2",
              name: "Arjun Patel",
              role: "Wedding Groom",
              company: "Delhi",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2477367/pexels-photo-2477367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Arjun Patel"
            },
            {
              id: "3",
              name: "Vikram Singh",
              role: "Fashion Designer",
              company: "Bangalore",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3998077/pexels-photo-3998077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Vikram Singh"
            },
            {
              id: "4",
              name: "Dev Malhotra",
              role: "Corporate Lawyer",
              company: "Chennai",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/16591967/pexels-photo-16591967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Dev Malhotra"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Fashion Brands"
          description="Join the community of style connoisseurs who choose excellence"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3621646/pexels-photo-3621646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5464697/pexels-photo-5464697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12471177/pexels-photo-12471177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/32085869/pexels-photo-32085869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          tagIcon={Phone}
          title="Ready for Your Perfect Fit?"
          description="Book a consultation with our master tailors or stay updated with our latest collections and exclusive offers."
          inputPlaceholder="Enter your email"
          buttonText="Book Consultation"
          termsText="By booking a consultation, you agree to our Terms and Conditions. We respect your privacy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sartori"
          columns={[
            {
              items: [
                { label: "Collections", href: "collections" },
                { label: "Traditional Wear", href: "traditional" },
                { label: "Modern Styles", href: "modern" },
                { label: "Custom Tailoring", href: "custom" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Master Tailors", href: "tailors" },
                { label: "Quality Promise", href: "quality" }
              ]
            },
            {
              items: [
                { label: "Size Guide", href: "sizes" },
                { label: "Care Instructions", href: "care" },
                { label: "Shipping Info", href: "shipping" },
                { label: "Returns", href: "returns" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Store Locations", href: "stores" },
                { label: "Book Appointment", href: "appointment" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
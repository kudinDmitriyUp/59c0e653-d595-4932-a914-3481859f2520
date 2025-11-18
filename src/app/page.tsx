"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Wifi, Car, Coffee, Waves, Bed, Star, Globe, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="65"
      sizing="medium"
      background="solid"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass-depth"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Boutique"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where luxury meets comfort"
          description="Experience personalized service and elegant accommodations in the heart of the city. Each room is thoughtfully designed to create unforgettable memories for discerning travelers."
          tag="Boutique Excellence"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478427165-73xt91qv.jpg",
              imageAlt: "Elegant hotel exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478427879-vyzozjxx.jpg",
              imageAlt: "Luxurious hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478428669-6oo7383p.jpg",
              imageAlt: "Premium hotel suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478429345-pi1kk01r.jpg",
              imageAlt: "Marble bathroom interior"
            }
          ]}
          buttons={[
            {
              text: "Explore Rooms",
              href: "rooms"
            },
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <AboutFeature
          title="We believe exceptional hospitality comes from attention to every detail. Our boutique hotel offers personalized service and premium amenities that create lasting memories for our valued guests."
          features={[
            {
              icon: Wifi,
              title: "Complimentary WiFi",
              description: "High-speed internet access throughout the hotel, perfect for both business travelers and leisure guests staying connected."
            },
            {
              icon: Car,
              title: "Valet Parking",
              description: "Professional valet service with secure parking facilities, ensuring your vehicle is safe and ready whenever you need it."
            },
            {
              icon: Coffee,
              title: "24/7 Room Service",
              description: "Gourmet dining delivered to your room anytime, featuring locally-sourced ingredients and chef-crafted specialties."
            },
            {
              icon: Waves,
              title: "Spa & Wellness",
              description: "Rejuvenating treatments and wellness facilities designed to help you unwind and restore your body and mind."
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardSeven
          title="Exceptional Accommodations"
          description="Each room is uniquely designed with premium furnishings and modern amenities"
          tag="Featured Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: "1",
              title: "Deluxe Room",
              description: "Elegant accommodations featuring premium bedding, marble bathroom, and city views. Perfect for business travelers seeking comfort and sophistication.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478430119-1wh7nc77.jpg",
              imageAlt: "Deluxe room with city view"
            },
            {
              id: "2",
              title: "Premium Suite",
              description: "Spacious suite with separate living area, premium amenities, and panoramic views. Ideal for extended stays and special occasions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478430637-48cfrkcn.jpg",
              imageAlt: "Premium suite living area"
            },
            {
              id: "3",
              title: "Executive Room",
              description: "Modern business-focused room with dedicated workspace, high-speed internet, and access to exclusive executive lounge amenities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478431379-9s3gwivh.jpg",
              imageAlt: "Executive room with workspace"
            },
            {
              id: "4",
              title: "Penthouse Suite",
              description: "Our most luxurious accommodation featuring private balcony, butler service, and unparalleled city skyline views.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478431872-xwqtjahz.jpg",
              imageAlt: "Penthouse suite with balcony"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "https://booking.example.com/rooms"
            },
            {
              text: "Check Availability",
              href: "https://booking.example.com"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Authentic reviews from travelers who experienced our exceptional hospitality"
          tag="Guest Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Blogger",
              testimonial: "The attention to detail and personalized service exceeded all expectations. Every aspect of my stay was flawlessly executed, from the elegant room design to the exceptional dining experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478433369-8ylbn23k.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Business Executive",
              testimonial: "As someone who travels frequently for business, I can confidently say this is one of the finest boutique hotels I've experienced. The executive amenities and professional service made my stay perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478434015-7pelcgus.jpg",
              imageAlt: "James Thompson portrait"
            },
            {
              id: "3",
              name: "Maria & David Rodriguez",
              role: "Celebrating Anniversary",
              testimonial: "Our anniversary weekend was absolutely magical. The romantic ambiance, luxurious suite, and thoughtful touches made this a celebration we'll treasure forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478434740-6vtsxo0r.jpg",
              imageAlt: "Maria and David Rodriguez portrait"
            },
            {
              id: "4",
              name: "Emily Chen",
              role: "Luxury Travel Consultant",
              testimonial: "I recommend this hotel to all my clients seeking an authentic boutique experience. The perfect blend of modern luxury and intimate hospitality creates something truly special.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478435492-vpa4uq0c.png",
              imageAlt: "Emily Chen portrait"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted by Leading Travel Platforms"
          description="Book with confidence through our verified partner networks"
          tag="Travel Partners"
          tagIcon={Globe}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478435965-0h6eme9k.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478436588-wckw1ivz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478437117-6ckjbe6f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478437691-n59rjwd7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478438148-4l8cwcp8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478438838-nd8q4kmq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478439466-z3491zqo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478440066-rk0idfnf.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join our exclusive guest list"
          description="Be the first to know about special offers, seasonal packages, and exclusive experiences designed for our valued guests."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763478432657-38s48pws.jpg"
          imageAlt="Luxury hotel room with ocean view"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy and will only send you exclusive hotel offers and updates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Accommodations",
              items: [
                { label: "Deluxe Rooms", href: "rooms" },
                { label: "Premium Suites", href: "rooms" },
                { label: "Executive Rooms", href: "rooms" },
                { label: "Penthouse Suite", href: "rooms" }
              ]
            },
            {
              title: "Hotel Services",
              items: [
                { label: "Concierge", href: "services" },
                { label: "Room Service", href: "services" },
                { label: "Valet Parking", href: "services" },
                { label: "Spa & Wellness", href: "services" }
              ]
            },
            {
              title: "Guest Information",
              items: [
                { label: "Check-in Policy", href: "policies" },
                { label: "Cancellation", href: "policies" },
                { label: "Special Requests", href: "contact" },
                { label: "Group Bookings", href: "contact" }
              ]
            }
          ]}
          logoText="The Boutique"
          copyrightText="© 2025 | The Boutique Hotel"
        />
      </div>
    </ThemeProvider>
  );
}
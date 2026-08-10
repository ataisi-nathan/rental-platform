import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Clock, Tag, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Wide Selection of Equipment",
    description: "Access a broad fleet of certified power tools, machinery, and specialty gear.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Options",
    description: "Rent by the day, week, or month with tailored agreements for any project size.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Transparent, upfront rates without hidden fees so you can stay within budget.",
  },
  {
    icon: Headphones,
    title: "Exceptional Customer Support",
    description: "Dedicated account specialists ready to assist with logistics and maintenance 24/7.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A]">
            Why Choose PrimeLift Equipment Rentals?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            We deliver reliable performance and industrial equipment solutions designed to keep your job site running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 text-[#1E3A8A] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({
  name,
  price,
  description,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div
    className={`rounded-2xl p-8 ${
      highlighted
        ? "bg-primary text-white ring-4 ring-primary/30"
        : "bg-white text-gray-900"
    }`}
  >
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className={`mt-4 ${highlighted ? "text-primary-foreground/90" : "text-gray-600"}`}>
      {description}
    </p>
    <p className="mt-6">
      <span className="text-4xl font-bold">{price}</span>
      <span className={`${highlighted ? "text-primary-foreground/90" : "text-gray-600"}`}>/month</span>
    </p>
    <ul className="mt-8 space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3">
          <Check className={`h-5 w-5 ${highlighted ? "text-primary-foreground" : "text-primary"}`} />
          <span className={highlighted ? "text-primary-foreground/90" : "text-gray-600"}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <Button
      className={`mt-8 w-full ${
        highlighted ? "bg-white text-primary hover:bg-gray-100" : ""
      }`}
      variant={highlighted ? "secondary" : "default"}
    >
      Get Started
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Choose the plan that best fits your needs. All plans include our core features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              name="Basic"
              price="$0"
              description="Perfect for getting started with job applications"
              features={[
                "Up to 5 resumes",
                "Basic ATS optimization",
                "Job application tracking",
                "Email support",
              ]}
            />
            <PricingTier
              name="Pro"
              price="$19"
              description="Ideal for active job seekers"
              highlighted={true}
              features={[
                "Unlimited resumes",
                "Advanced ATS optimization",
                "Auto apply to jobs",
                "Priority support",
                "Analytics dashboard",
              ]}
            />
            <PricingTier
              name="Enterprise"
              price="$49"
              description="For teams and organizations"
              features={[
                "Everything in Pro",
                "Team collaboration",
                "Custom branding",
                "API access",
                "Dedicated account manager",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Can I cancel my subscription?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-600">
                We accept all major credit cards, PayPal, and offer invoice payment for Enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Is there a free trial?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, all paid plans come with a 14-day free trial. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Do you offer refunds?
              </h3>
              <p className="mt-2 text-gray-600">
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#features" className="text-base text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-base text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} ResuMate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;

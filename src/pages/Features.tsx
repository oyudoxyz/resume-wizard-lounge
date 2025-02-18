import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import { FileText, Zap, Send, ChartBar, Star, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Powerful Features That Work For You
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Discover all the tools and features that make ResuMate your ultimate job search companion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FileText}
              title="Smart Resume Builder"
              description="AI-powered resume creation and optimization with industry-standard templates."
            />
            <FeatureCard
              icon={Zap}
              title="Auto-Tailoring"
              description="Automatically customize your resume and cover letter for each job application."
            />
            <FeatureCard
              icon={Send}
              title="One-Click Apply"
              description="Apply to multiple jobs instantly with our automated application system."
            />
            <FeatureCard
              icon={ChartBar}
              title="Analytics Dashboard"
              description="Track your application success rate and get insights to improve."
            />
            <FeatureCard
              icon={Star}
              title="Skills Assessment"
              description="AI-powered skills analysis and job match recommendations."
            />
            <FeatureCard
              icon={Clock}
              title="Time Tracking"
              description="Monitor application deadlines and follow-up reminders."
            />
            <FeatureCard
              icon={Shield}
              title="ATS Optimization"
              description="Ensure your resume passes Applicant Tracking Systems every time."
            />
            <FeatureCard
              icon={Users}
              title="Network Building"
              description="Connect with industry professionals and track networking opportunities."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful job seekers who have streamlined their job search with ResuMate.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8"
            >
              Start Free Trial
            </Button>
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

export default Features;

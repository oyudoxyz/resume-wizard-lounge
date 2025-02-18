
import { FileText, Zap, Send, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Your Job Search, Optimized
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Streamline resume management, tailor applications, and track every
              step with AI-powered precision.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white px-8"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-600 hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Powerful Features for Your Job Search
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your job application process and
              increase your chances of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
            <FeatureCard
              icon={FileText}
              title="Resume Management"
              description="Import from LinkedIn or PDF, with AI-powered optimization and keyword tuning."
            />
            <FeatureCard
              icon={Zap}
              title="Smart Tools"
              description="Analyze job descriptions and generate tailored resumes and cover letters."
            />
            <FeatureCard
              icon={Send}
              title="Auto-Apply"
              description="One-click application functionality with smart form filling."
            />
            <FeatureCard
              icon={ChartBar}
              title="Track Progress"
              description="Real-time status updates, metrics, and follow-up reminders."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of job seekers who have streamlined their application
              process with ResuMate.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8"
            >
              Start Your Journey
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
                  <a href="#about" className="text-base text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-base text-gray-600 hover:text-gray-900">
                    Contact
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
                  <a href="#privacy" className="text-base text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-base text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#faq" className="text-base text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#help" className="text-base text-gray-600 hover:text-gray-900">
                    Help Center
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

export default Index;

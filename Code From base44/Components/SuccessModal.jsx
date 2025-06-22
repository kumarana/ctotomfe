import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Target, Crown } from "lucide-react";

export default function MembershipCard({ membership, onSelect, index }) {
  const icons = {
    "Free": Star,
    "Pro": Zap,
    "Expert": Crown,
    "Assessment & Roadmap": Target
  };
  
  const Icon = icons[membership.name] || Star;

  const gradients = {
    "Free": "from-emerald-400 to-teal-500",
    "Pro": "from-cyan-400 to-blue-500",
    "Expert": "from-blue-400 to-indigo-500",
    "Assessment & Roadmap": "from-teal-400 to-cyan-500"
  };

  const borderColors = {
    "Free": "border-emerald-200 hover:border-emerald-300",
    "Pro": "border-cyan-200 hover:border-cyan-300",
    "Expert": "border-blue-200 hover:border-blue-300",
    "Assessment & Roadmap": "border-teal-200 hover:border-teal-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`bg-white rounded-2xl border-2 ${borderColors[membership.name]} p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col relative overflow-hidden`}
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[membership.name]} opacity-5`} />
      
      {/* Header */}
      <div className="relative z-10 text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradients[membership.name]} mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{membership.name}</h3>
        <p className="text-gray-600 text-sm">{membership.subtitle}</p>
      </div>

      {/* Pricing */}
      <div className="relative z-10 text-center mb-6">
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {membership.price}
        </div>
        {membership.billing && (
          <div className="text-sm text-gray-500">{membership.billing}</div>
        )}
      </div>

      {/* Features */}
      <div className="relative z-10 flex-grow mb-6">
        <ul className="space-y-3">
          {membership.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${gradients[membership.name]} flex items-center justify-center mt-0.5`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <Button
          onClick={() => onSelect(membership.name)}
          className={`w-full h-12 bg-gradient-to-r ${gradients[membership.name]} hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-white font-semibold rounded-xl`}
        >
          {membership.cta}
        </Button>
      </div>
    </motion.div>
  );
}
import React from 'react';

const features = [
  {
    icon: '🎬',
    title: 'AI Video Generation',
    description: 'Generate complete faceless YouTube videos with AI-powered scripts, voiceovers, and visuals automatically.',
  },
  {
    icon: '📱',
    title: 'Shorts Creator',
    description: 'Create viral YouTube Shorts optimized for mobile viewing with trending formats and styles.',
  },
  {
    icon: '🌍',
    title: 'Multi-Language Translation',
    description: 'Translate and adapt your content to multiple languages, expanding your reach to global audiences.',
  },
  {
    icon: '🤖',
    title: 'GPT-4 Powered Scripts',
    description: 'Leverage the latest GPT-4 model to generate engaging, SEO-optimized scripts for any niche.',
  },
  {
    icon: '🎙️',
    title: 'Text-to-Speech Engine',
    description: 'Professional-quality voiceovers using ElevenLabs and other premium TTS providers.',
  },
  {
    icon: '⚡',
    title: 'Remotion Rendering',
    description: 'High-quality video rendering powered by Remotion for crisp, professional output every time.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Track your video performance, channel growth, and content metrics all in one place.',
  },
  {
    icon: '🔄',
    title: 'Bulk Processing',
    description: 'Queue and process multiple videos simultaneously, scaling your content production effortlessly.',
  },
  {
    icon: '🎨',
    title: 'Custom Templates',
    description: 'Choose from dozens of professionally designed templates or create your own unique style.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Scale Your Channel
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            FacelessForge provides all the tools you need to create, publish, and
            grow a successful faceless YouTube channel on autopilot.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10x</div>
              <div className="text-gray-400 text-sm">Faster Production</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400 text-sm">Video Templates</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">20+</div>
              <div className="text-gray-400 text-sm">Languages Supported</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

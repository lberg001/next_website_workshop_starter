const AboutMe = ({title}) => {
    return (
        <div className="text-white min-h-screen">
                {/* About Section */}
                <div className="max-w-3xl">
                    {/* Avatar Image */}
                    <div className="mb-12">
                        <div className="bg-gray-900 overflow-hidden">
                            <img
                                src="coachroach.png"
                                alt="David Lazăr"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-8xl font-light mb-6">{title}</h2>
                            <div className="space-y-6 text-blue-600 leading-relaxed">
                                <p>
                                    I'm a computational artist exploring the intersection of technology,
                                    creativity, and human expression. My work focuses on generative systems,
                                    interactive installations, and digital experiences that challenge
                                    traditional boundaries between art and code.
                                </p>
                                <p>
                                    Through algorithmic processes and creative coding, I create pieces
                                    that evolve, respond, and transform. Each project is an experiment
                                    in translating mathematical concepts into visual and experiential narratives.
                                </p>
                                <p>
                                    Based in [Location], I collaborate with galleries, institutions,
                                    and fellow artists to push the boundaries of what computational
                                    art can achieve in our digital age.
                                </p>
                            </div>
                        </div>

                        {/* Skills/Tools */}
                        <div>
                            <h3 className="text-lg font-light mb-4">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-3 text-sm">
                                <span className="px-3 py-1 border border-gray-700">Processing</span>
                                <span className="px-3 py-1 border border-gray-700 rounded-sm">Three.js</span>
                                <span className="px-3 py-1 border border-gray-700 rounded-sm">OpenFrameworks</span>
                                <span className="px-3 py-1 border border-gray-700 rounded-sm">GLSL</span>
                                <span className="px-3 py-1 border border-gray-700 rounded-sm">Python</span>
                                <span className="px-3 py-1 border border-gray-700 rounded-sm">Machine Learning</span>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="pt-8 border-t border-gray-800">
                            <div className="flex space-x-6 text-sm">
                                <a href="mailto:hello@davidlazar.com" className="hover:text-white transition-colors">
                                    Email
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AboutMe;
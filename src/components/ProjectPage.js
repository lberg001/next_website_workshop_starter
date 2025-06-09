const ProjectPage = () => {
    return (
        <div className="text-white min-h-screen">
                {/* About Section */}
                <div className="max-w-3xl">
                    {/* Avatar Image */}
                    <div className="mb-12">
                        <div className="w-48 h-48 bg-gray-900 rounded-full overflow-hidden">
                            <img
                                src="coachroach.png"
                                alt="cocroach"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4l font-light mb-6">About</h2>
                            <div className="space-y-6 text-blue-300 leading-relaxed">
                                <p>
                                    This project is about this and that
                                </p>
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

export default ProjectPage;
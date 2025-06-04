import Link from "next/link";
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <div>
            <p className="text-sm">
                Projects:
            </p>
            <ul className="pt-7">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link
                            href={`/projects/${project.slug}`}
                            className="transition-colors font-helvetica-extra-bold text-xs"
                        >
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
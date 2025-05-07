import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './mode-toggle';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconHome,
  IconUser,
  IconFileText,
  IconBriefcase,
  IconAddressBook
} from '@tabler/icons-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 dark:bg-slate-950 text-white flex flex-col z-50">
      <div className="flex flex-col items-center py-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
          <Image
            src="/images/profile.png"
            alt="Priyanshu Kumar"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">Priyanshu Kumar</h2>

        {/* Social links */}
        <div className="flex space-x-3 mt-4">
          <Link href="https://github.com/priyanshukr0103" className="text-white hover:text-primary transition-colors">
            <IconBrandGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/priyanshu-kumar-44ab3624b/" className="text-white hover:text-primary transition-colors">
            <IconBrandLinkedin size={20} />
          </Link>
          <Link href="https://x.com/Priyanshukr__01" className="text-white hover:text-primary transition-colors">
            <IconBrandTwitter size={20} />
          </Link>
          <Link href="mailto:priyanshukr0103@gmail.com" className="text-white hover:text-primary transition-colors">
            <IconMail size={20} />
          </Link>
        </div>
      </div>

      {/* Navigation links */}
      <nav className="mt-8 flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/#home" className="flex items-center px-6 py-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors">
              <IconHome size={18} className="mr-3" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/#about" className="flex items-center px-6 py-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors">
              <IconUser size={18} className="mr-3" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/#resume" className="flex items-center px-6 py-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors">
              <IconFileText size={18} className="mr-3" />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="flex items-center px-6 py-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors">
              <IconBriefcase size={18} className="mr-3" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="flex items-center px-6 py-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors">
              <IconAddressBook size={18} className="mr-3" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme toggle at bottom */}
      <div className="p-6">
        <ModeToggle />
      </div>
    </aside>
  );
}

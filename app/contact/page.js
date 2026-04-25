import ContactClient from './ContactClient';
import { buildPageMetadata } from '../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/contact',
  title: 'Contact Us',
  description:
    'Contact Theme & Color for questions, feedback, or suggestions about our color tools, blog, and accessibility resources.',
  keywords: ['contact', 'Theme & Color', 'color tools', 'feedback', 'support'],
});

export default function ContactPage() {
  return <ContactClient />;
}

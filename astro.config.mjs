// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.skillthis.ai',
  integrations: [
    starlight({
      title: 'SkillThis',
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/NimbleBrainInc' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/nimblebraininc' },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What is SkillThis?', slug: 'index' },
            { label: 'Quickstart', slug: 'quickstart' },
          ],
        },
        {
          label: 'Creating Skills',
          items: [
            { label: 'Writing Great Inputs', slug: 'creating/writing-inputs' },
            { label: 'The Assessment Flow', slug: 'creating/assessment' },
            { label: 'Extraction Questions', slug: 'creating/extraction' },
            { label: 'Understanding Your Grade', slug: 'creating/grading' },
          ],
        },
        {
          label: 'Skill Format',
          items: [
            { label: 'Anatomy of a Skill', slug: 'format/anatomy' },
            { label: 'YAML Frontmatter', slug: 'format/frontmatter' },
            { label: 'Skill Sections', slug: 'format/sections' },
            { label: 'Grading Criteria', slug: 'format/grading-criteria' },
            { label: 'Examples', slug: 'format/examples' },
          ],
        },
        {
          label: 'Using Your Skill',
          items: [
            { label: 'Claude', slug: 'deploy/claude' },
            { label: 'ChatGPT', slug: 'deploy/chatgpt' },
            { label: 'Cursor / IDE', slug: 'deploy/cursor' },
            { label: 'Tips for Better Results', slug: 'deploy/tips' },
          ],
        },
        {
          label: 'Sharing',
          items: [
            { label: 'Sharing Your Skills', slug: 'sharing' },
          ],
        },
        {
          label: 'Chrome Extension',
          items: [
            { label: 'Installation', slug: 'extension/install' },
            { label: 'Convert a Page', slug: 'extension/convert-page' },
            { label: 'Convert a Selection', slug: 'extension/convert-selection' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'FAQ', slug: 'reference/faq' },
            { label: 'Skill Best Practices', slug: 'reference/best-practices' },
          ],
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
    }),
  ],
});

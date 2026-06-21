'use client';

import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  [HookCategory.MONITORING]: { bg: '#eef4fb', text: '#3a6fa8', border: '#c0d8ef' },
  [HookCategory.SECURITY]: { bg: '#fdf0ec', text: '#b85c3a', border: '#f0c4b4' },
  [HookCategory.WORKFLOW]: { bg: '#f0f4ec', text: '#4f6438', border: '#c4d4b0' },
  [HookCategory.TESTING]: { bg: '#fdf6ec', text: '#9a7030', border: '#f0deb0' },
  [HookCategory.INTEGRATION]: { bg: '#f4f0fb', text: '#5a3a9a', border: '#d4c4f0' },
  [HookCategory.UTILITY]: { bg: '#f5f4f0', text: '#5a5850', border: '#dddbd3' },
  [HookCategory.LEARNING]: { bg: '#eeeef8', text: '#3a3a88', border: '#c0c0e8' },
  [HookCategory.TEAM]: { bg: '#fceef4', text: '#8a3a5c', border: '#ecc0d4' },
};

const languageColors: Record<string, string> = {
  'Python': '#d97757',
  'JavaScript': '#d9b057',
  'TypeScript': '#6a9bcc',
  'PHP': '#7a6acc',
  'Go': '#57bcc8',
};

export default function HookCard({ hook }: HookCardProps) {
  const catStyle = categoryColors[hook.category] ?? { bg: '#f5f4f0', text: '#5a5850', border: '#dddbd3' };

  return (
    <div
      className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#ffffff',
        border: '1px solid var(--anth-light-gray)',
        boxShadow: '0 1px 3px rgba(20,20,19,0.06)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(20,20,19,0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--anth-mid-gray)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(20,20,19,0.06)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--anth-light-gray)';
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className="text-lg font-bold leading-tight"
          style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--anth-dark)' }}
        >
          {hook.name}
        </h3>
        {hook.featured && (
          <div
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: 'var(--anth-orange)',
              color: 'var(--anth-light)',
              fontFamily: 'Poppins, Arial, sans-serif',
            }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>
        )}
      </div>

      <p
        className="text-sm leading-relaxed mb-6 line-clamp-2"
        style={{ fontFamily: 'Lora, Georgia, serif', color: '#4a4a47' }}
      >
        {hook.description}
      </p>

      <div className="flex items-center gap-3 mb-6">
        <span
          className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg"
          style={{
            background: catStyle.bg,
            color: catStyle.text,
            border: `1px solid ${catStyle.border}`,
            fontFamily: 'Poppins, Arial, sans-serif',
          }}
        >
          {hook.category}
        </span>
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: languageColors[hook.language] ?? 'var(--anth-mid-gray)' }}
          />
          <span
            className="text-xs font-medium"
            style={{ fontFamily: 'Lora, Georgia, serif', color: 'var(--anth-mid-gray)' }}
          >
            {hook.language}
          </span>
        </div>
      </div>

      {hook.hookTypes.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-6">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{
                background: 'var(--anth-light-gray)',
                color: '#5a5850',
                fontFamily: 'Poppins, Arial, sans-serif',
              }}
            >
              {type}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-medium"
            style={{ fontFamily: 'Lora, Georgia, serif', color: 'var(--anth-mid-gray)' }}
          >
            {hook.author}
          </span>
          {hook.stars && (
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--anth-orange)' }}>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span
                className="text-xs font-semibold"
                style={{ fontFamily: 'Poppins, Arial, sans-serif', color: '#4a4a47' }}
              >
                {hook.stars}
              </span>
            </div>
          )}
        </div>

        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--anth-dark)',
            color: 'var(--anth-light)',
            fontFamily: 'Poppins, Arial, sans-serif',
          }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

import HookCard from '@/components/HookCard';
import { Hook } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export default function Home() {
  const hooks: Hook[] = hooksData.hooks as Hook[];
  const featuredHooks = hooks.filter(hook => hook.featured);
  const regularHooks = hooks.filter(hook => !hook.featured);

  return (
    <div className="min-h-screen" style={{ background: 'var(--anth-light)', color: 'var(--anth-dark)' }}>
      <header style={{ background: 'var(--anth-dark)', borderBottom: '1px solid #2a2a28' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1
                className="text-3xl font-bold tracking-tight"
                style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--anth-light)' }}
              >
                HookHub
              </h1>
              <p style={{ color: 'var(--anth-mid-gray)', fontFamily: 'Lora, Georgia, serif', marginTop: '2px' }}>
                Discover Claude Code Hooks
              </p>
            </div>
            <div className="flex-1 max-w-lg">
              <input
                type="search"
                placeholder="Search hooks..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                style={{
                  background: '#1f1f1d',
                  border: '1px solid #2a2a28',
                  color: 'var(--anth-light)',
                  fontFamily: 'Lora, Georgia, serif',
                  '--tw-ring-color': 'var(--anth-orange)',
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--anth-dark)' }}
          >
            Claude Code Hooks
          </h2>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ fontFamily: 'Lora, Georgia, serif', color: '#4a4a47' }}
          >
            Enhance your workflows with community-driven hooks
          </p>
          <button
            className="px-8 py-4 font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: 'Poppins, Arial, sans-serif',
              background: 'var(--anth-orange)',
              color: 'var(--anth-light)',
            }}
          >
            Explore Hooks
          </button>
        </section>

        {featuredHooks.length > 0 && (
          <section className="mb-12">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--anth-dark)' }}
            >
              Featured Hooks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredHooks.map((hook) => (
                <HookCard key={hook.id} hook={hook} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h3
            className="text-xl font-semibold mb-6"
            style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--anth-dark)' }}
          >
            All Hooks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularHooks.map((hook) => (
              <HookCard key={hook.id} hook={hook} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

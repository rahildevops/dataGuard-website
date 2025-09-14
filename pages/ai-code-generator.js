
import Head from 'next/head';
import Navigation from '../components/layout/Navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function AICodeGenerator() {
  useEffect(() => {
    let chartInstance;
    let Chart;
    async function loadChart() {
      Chart = (await import('chart.js/auto')).default;
      function wrapLabels(label, maxWidth) {
        if (typeof label !== 'string' || label.length <= maxWidth) {
          return label;
        }
        const words = label.split(' ');
        let lines = [];
        let currentLine = '';
        words.forEach(word => {
          if ((currentLine + ' ' + word).length > maxWidth) {
            lines.push(currentLine.trim());
            currentLine = '';
          }
          currentLine += word + ' ';
        });
        lines.push(currentLine.trim());
        return lines;
      }
      const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
          return label.join(' ');
        } else {
          return label;
        }
      };
      const sailpointData = {
        labels: ['Rule Development', 'Template Setup', 'Testing & Debug'].map(l => wrapLabels(l, 12)),
        datasets: [
          {
            label: 'Traditional Method (Hours)',
            data: [25, 15, 12],
            backgroundColor: 'rgba(100, 116, 139, 0.8)',
            borderColor: 'rgba(100, 116, 139, 1)',
            borderWidth: 1,
            borderRadius: 8
          },
          {
            label: 'AI-Powered Method (Hours)',
            data: [8, 6, 4],
            backgroundColor: 'rgba(6, 182, 212, 0.8)',
            borderColor: 'rgba(6, 182, 212, 1)',
            borderWidth: 1,
            borderRadius: 8
          }
        ]
      };
      const ctx = document.getElementById('sailpointChart');
      if (ctx) {
        // Destroy any existing chart instance on this canvas
        if (Chart && Chart.getChart && Chart.getChart(ctx)) {
          Chart.getChart(ctx).destroy();
        } else if (ctx.chart) {
          ctx.chart.destroy();
        }
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: sailpointData,
          options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  usePointStyle: true,
                  font: {
                    size: 12,
                    family: 'Inter'
                  }
                }
              },
              tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(6, 182, 212, 0.5)',
                borderWidth: 1,
                callbacks: {
                  title: tooltipTitleCallback
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Development Time (Hours)',
                  font: {
                    size: 12,
                    family: 'Inter'
                  }
                },
                ticks: {
                  font: {
                    size: 11,
                    family: 'Inter'
                  }
                },
                grid: {
                  color: 'rgba(148, 163, 184, 0.2)'
                }
              },
              x: {
                ticks: {
                  font: {
                    size: 11,
                    family: 'Inter'
                  }
                },
                grid: {
                  display: false
                }
              }
            }
          }
        });
        // Attach chart instance to canvas for future reference
        ctx.chart = chartInstance;
      }
    }
    loadChart();
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
    <title>AI Code Generator: The Future of Intelligent Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="text-gray-800 pt-20" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Navigation />
        <main className="min-h-screen py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-6 space-y-16">
          {/* Hero Section */}
          <section className="text-center mb-3">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
                    AI Code Generator
                  </h1>
                  <div className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 shadow-md">
                    <span className="text-lg md:text-2xl font-semibold text-cyan-700 tracking-wide">
                      The Future of Development
                    </span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-base md:text-lg text-gray-700 font-medium">Accelerate your implementations with intelligent automation</span>
                  </div>
            </div>
          </section>

          {/* Problem Statement Section */}
          <section className="section-card rounded-2xl shadow-xl p-8 md:p-12 mb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
            {/* ...existing code... */}
            <div className="w-full mx-auto mb-8 mt-0 rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-white shadow-[0_8px_32px_0_rgba(31,41,55,0.10)] p-3 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Left: Title and Text */}
                <div className="flex-1 min-w-[220px]">
                  <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 shadow-lg mb-4">
                    <span className="text-lg md:text-2xl font-bold text-blue-800 tracking-wide">Current Pain</span>
                  </div>
                  <p className="mt-2 text-left text-gray-700 text-base md:text-lg max-w-md">
                    Critical challenges slow growth and impact results. Here’s what holds teams back:
                  </p>
                </div>
                {/* Right: Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="flex items-center bg-white/70 rounded-2xl px-8 py-4 shadow-lg border border-blue-100 min-w-[102px] backdrop-blur-md relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 rounded-l-2xl"></div>
                    <span className="text-blue-700 text-2xl font-medium tracking-wide mr-3 z-10">2x</span>
                    <span className="text-slate-700 text-sm font-medium z-10">Increase in project cost overruns</span>
                  </div>
                  <div className="flex items-center bg-white/70 rounded-2xl px-8 py-4 shadow-lg border border-blue-100 min-w-[220px] backdrop-blur-md relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 rounded-l-2xl"></div>
                    <span className="text-blue-700 text-2xl font-medium tracking-wide mr-3 z-10">30%</span>
                    <span className="text-slate-700 text-sm font-medium z-10">Drop in client budgets for new projects</span>
                  </div>
                  <div className="flex items-center bg-white/70 rounded-2xl px-8 py-4 shadow-lg border border-blue-100 min-w-[220px] backdrop-blur-md relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 rounded-l-2xl"></div>
                    <span className="text-blue-700 text-2xl font-medium tracking-wide mr-3 z-10">75%</span>
                    <span className="text-slate-700 text-sm font-medium z-10">Say innovation slows</span>
                  </div>
                  <div className="flex items-center bg-white/70 rounded-2xl px-8 py-4 shadow-lg border border-blue-100 min-w-[220px] backdrop-blur-md relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 rounded-l-2xl"></div>
                    <span className="text-blue-700 text-2xl font-medium tracking-wide mr-3 z-10">68%</span>
                    <span className="text-slate-700 text-sm font-medium z-10">Struggle to find skilled talent</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Cards removed for a cleaner, more focused section */}
          </section>

          {/* Workflow Comparison Section */}
            {/* Workflow Comparison Section removed as requested */}



          {/* SailPoint Focus Section */}
          <section className="section-card rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>

                {/* Section Heading */}
                <h3 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight text-left">
                  Key Automation Features
                </h3>
                {/* Vertical Timeline Pattern for Features */}
                <div className="relative border-l-2 border-cyan-200 ml-6 flex flex-col gap-8">
                  {/* Automated Installation */}
                  <div className="flex items-start gap-4">
                    <span className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="pl-6">
                      <div className="font-semibold text-gray-800 text-base">Automated Installation</div>
                      <div className="text-gray-600 text-xs">Set up your environment in minutes with guided, automated installation steps—no manual configuration required.</div>
                    </div>
                  </div>
                  {/* Accelerated Development */}
                  <div className="flex items-start gap-4">
                    <span className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m4 0h-1v-4h-1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="pl-6">
                      <div className="font-semibold text-gray-800 text-base">Accelerated Development</div>
                      <div className="text-gray-600 text-xs">Reduce development time from weeks to days with automated code generation and intelligent templates.</div>
                    </div>
                  </div>
                  {/* Enhanced Accuracy */}
                  <div className="flex items-start gap-4">
                    <span className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="pl-6">
                      <div className="font-semibold text-gray-800 text-base">Enhanced Accuracy</div>
                      <div className="text-gray-600 text-xs">Minimize errors and rework with AI-driven code suggestions and real-time validation.</div>
                    </div>
                  </div>
                  {/* Seamless Integration */}
                  <div className="flex items-start gap-4">
                    <span className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="pl-6">
                      <div className="font-semibold text-gray-800 text-base">Seamless Integration</div>
                      <div className="text-gray-600 text-xs">Effortlessly integrate with existing environments and third-party systems.</div>
                    </div>
                  </div>
                  {/* Automated Deployment */}
                  <div className="flex items-start gap-4">
                    <span className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V6m0 0l-7 7m7-7l7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="pl-6">
                      <div className="font-semibold text-gray-800 text-base">Automated Deployment</div>
                      <div className="text-gray-600 text-xs">Deploy your solutions with a single click—automated, reliable, and repeatable deployments every time.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card rounded-xl p-6 border border-gray-200">
                <h4 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg text-center">Development Time Comparison</h4>
                <div className="chart-container" style={{ minHeight: 320, height: 320 }}>
                  <canvas id="sailpointChart" style={{ width: '100%', height: 320 }}></canvas>
                </div>
                {/* Stat Cards moved below the graph */}
                <div className="mt-8 text-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 max-w-3xl mx-auto">
                    <div className="text-center p-3 bg-white/50 rounded-lg border border-cyan-200">
                      <div className="text-xl font-bold text-cyan-700">40-50%</div>
                      <div className="text-xs text-gray-600">Time Reduction</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg border border-blue-100">
                      <div className="text-xl font-bold text-blue-600">75%</div>
                      <div className="text-xs text-gray-600">Less Errors</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg border border-cyan-100">
                      <div className="text-xl font-bold text-cyan-600">45%</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg border border-indigo-100">
                      <div className="text-xl font-bold text-indigo-600">2-3x</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Supported Platforms Section */}
        <section className="mt-12 mb-20 max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-cyan-50 via-blue-50 to-white shadow-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">AI Code Generator Platforms</h3>
          <p className="text-gray-700 text-lg mb-6">We currently offer AI Code Generators for:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 border border-cyan-100 w-full sm:w-1/2">
              <Image src="/images/SailPoint.svg" alt="SailPoint" width={80} height={40} className="h-10 mb-2" />
              <span className="font-semibold text-blue-700">SailPoint</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 border border-blue-100 w-full sm:w-1/2">
              <Image src="/images/ping.png" alt="ForgeRock" width={80} height={40} className="h-10 mb-2" />
              <span className="font-semibold text-cyan-700">ForgeRock</span>
            </div>
          </div>
          <div className="mt-4 text-base text-gray-600">
            More platforms coming soon!
          </div>
        </section>
      </main>
      {/* Chart.js is now loaded and rendered via useEffect */}
    </div>
  </>
  );
}
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AnalyticsDashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    avgSessionDuration: '0s',
    topPages: [],
    topCountries: [],
    conversionRate: 0,
  });

  // Simulated analytics data (replace with actual API calls)
  useEffect(() => {
    // This would typically fetch from your analytics API
    const fetchAnalytics = async () => {
      // Simulated data - replace with real API calls
      setStats({
        pageViews: 1250,
        uniqueVisitors: 890,
        avgSessionDuration: '2m 45s',
        topPages: [
          { page: '/', views: 800 },
          { page: '/privacy-policy', views: 150 },
          { page: '/terms-and-conditions', views: 120 },
        ],
        topCountries: [
          { country: 'France', users: 450 },
          { country: 'Benin', users: 200 },
          { country: 'Canada', users: 120 },
          { country: 'United States', users: 120 },
        ],
        conversionRate: 3.2,
      });
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Website traffic and performance metrics</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Page Views</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.pageViews.toLocaleString()}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Unique Visitors</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.uniqueVisitors.toLocaleString()}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg. Session</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.avgSessionDuration}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Conversion Rate</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.conversionRate}%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Pages</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{page.page}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(page.views / stats.topPages[0].views) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-gray-500">{page.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Countries</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.topCountries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{country.country}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(country.users / stats.topCountries[0].users) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-gray-500">{country.users} users</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Setup Instructions</h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p><strong>1. Google Analytics:</strong> Add your Google Analytics 4 Measurement ID to your .env file as VITE_GA_MEASUREMENT_ID</p>
            <p><strong>2. Vercel Analytics:</strong> Enable analytics in your Vercel dashboard (automatic for Pro plans)</p>
            <p><strong>3. Real Data:</strong> Replace the simulated data in this component with actual API calls to your analytics provider</p>
            <p><strong>4. Privacy:</strong> Ensure you comply with GDPR/CCPA by implementing proper cookie consent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
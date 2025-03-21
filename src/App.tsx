import React, { useState } from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Download,
  Link as LinkIcon,
  AlertCircle
} from 'lucide-react';

type Platform = 'instagram' | 'facebook' | 'twitter' | 'tiktok' | 'youtube';

function App() {
  const [url, setUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      alert('تم تقديم الطلب! سيتم تنفيذ التحميل قريباً.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Ad Space - Top Banner */}
      <div className="bg-gray-100 p-4 text-center text-gray-500 border-b">
        مساحة إعلانية
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            oussamas all video
          </h1>
          <p className="text-center text-gray-600 mb-8">
            قم بتحميل مقاطع الفيديو من منصات التواصل الاجتماعي المفضلة لديك
          </p>

          {/* Platform Selection */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { name: 'youtube', icon: Youtube, label: 'يوتيوب' },
              { name: 'instagram', icon: Instagram, label: 'انستغرام' },
              { name: 'facebook', icon: Facebook, label: 'فيسبوك' },
              { name: 'twitter', icon: Twitter, label: 'تويتر' },
              { name: 'tiktok', icon: Youtube, label: 'تيك توك' },
            ].map((platform) => (
              <button
                key={platform.name}
                onClick={() => setSelectedPlatform(platform.name as Platform)}
                className={`p-4 rounded-lg flex flex-col items-center transition-all ${
                  selectedPlatform === platform.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <platform.icon className="w-8 h-8 mb-2" />
                <span>{platform.label}</span>
              </button>
            ))}
          </div>

          {/* URL Input Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <LinkIcon className="absolute left-3 top-3 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={selectedPlatform === 'youtube' ? 'ضع رابط فيديو اليوتيوب هنا' : 'ضع رابط الفيديو هنا'}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !url}
              className={`w-full py-4 rounded-lg flex items-center justify-center space-x-2 ${
                isLoading || !url
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-semibold transition-colors`}
            >
              <Download className="w-5 h-5" />
              <span>{isLoading ? 'جاري التحميل...' : 'تحميل الفيديو'}</span>
            </button>
          </form>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div className="text-right">
                <h3 className="font-semibold text-blue-800">كيفية الاستخدام:</h3>
                <ol className="text-blue-700 mt-2 list-decimal list-inside space-y-1">
                  <li>اختر المنصة التي يوجد بها الفيديو</li>
                  <li>انسخ رابط الفيديو من المنصة</li>
                  <li>الصق الرابط في مربع الإدخال أعلاه</li>
                  <li>اضغط على زر التحميل</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Side Ad Space */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 p-4 rounded-lg hidden lg:block">
          <div className="w-48 h-96 flex items-center justify-center text-gray-500">
            مساحة إعلانية جانبية
          </div>
        </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 text-center text-gray-500 border-t">
        مساحة إعلانية سفلية
      </div>
    </div>
  );
}

export default App;
import { format } from 'date-fns';
import React from "react";
import { pl } from 'date-fns/locale/pl';

const formatDate = (date) => {
  console.log('Formatting date:', date);
  return date ? format(date, 'd MMMM yyyy, HH:mm', { locale: pl }) : '';;
};

function NewsScrollSection({ news, title, description }) {
    console.log(news);

  return (
    <section className="bg-underground street-border">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white">{title}</h2>
            <p className="text-blue-300 text-md mt-2">{description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary font-medium flex items-center hover:text-red-500">
              Zobacz wszystkie <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
        <div className="news-scroll-container flex overflow-x-auto pb-6 space-x-4">
          {news.map(newsItem => (
            <div key={newsItem.slug} className="flex-shrink-0 w-80 bg-gray-900 rounded-xl overflow-hidden card-hover">
              {newsItem.thumbnail ? (
                <div className="h-40 relative">
                  <img
                    src={newsItem.thumbnail}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '10rem', maxHeight: '10rem' }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-dark py-1 px-3 rounded-lg font-bold">NOWOŚĆ</div>
                </div>
              ) : (
                <div className="h-40 bg-gradient-to-r from-purple-900 to-purple-700 relative">
                  <div className="absolute top-4 left-4 bg-primary text-dark py-1 px-3 rounded-lg font-bold">NOWOŚĆ</div>
                </div>
              )}
              <div className="p-5">
                <span className="text-sm text-primary font-medium">{newsItem.category}</span>
                <h3 className="text-xl font-bold my-3 text-white">{newsItem.title}</h3>
                <p className="text-gray-400 mb-4">
                  {(newsItem.short_description || '').slice(0, 80) + '...'}
                </p>
                <div className="flex items-center text-gray-500">
                  <i className="far fa-clock mr-2"></i>
                  <span>{formatDate(newsItem.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsScrollSection;

import NewsScrollSection from '../components/NewsScrollSection';

<NewsScrollSection
  news={news}
  title="Uliczne aktualności"
  description="Co słychać w holenderskim świecie hip-hopu"
/>

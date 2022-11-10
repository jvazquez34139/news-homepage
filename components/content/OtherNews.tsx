import React from 'react'

const OtherNews = () => {
  interface newsArticle {
    key: number,
    linkName: string,
    desc: string
  }
  const otherNews: newsArticle[] = [
    {
      key: 1,
      linkName: 'Hydrogen VS Electric Cars',
      desc: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      key: 2,
      linkName: 'The Downsides of AI Artistry',
      desc: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      key: 3,
      linkName: 'Is VC Funding Drying Up?',
      desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
  ];
  return (
    <aside className='bg-slate-900 text-white mt-14 p-4'>
      <h2 className='font-semibold
       text-3xl text-orange-300'>New</h2>
      {otherNews.map((article) => {
        return (
          <article className='border-b-[1px] border-slate-700 last:border-b-0 py-5' key={article.key}>
            <h3 className='font-bold mb-2 text-lg'>{article.linkName}</h3>
            <p>{article.desc}</p>
          </article>
        )
      }
      )}
    </aside>
  )
}

export default OtherNews
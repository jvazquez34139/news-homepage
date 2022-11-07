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
    <aside>
      <h2>News</h2>
      {otherNews.map((article) => {
        return (
          <article key={article.key}>
            <h3>{article.linkName}</h3>
            <p>{article.desc}</p>
          </article>
        )
      }
      )}
    </aside>
  )
}

export default OtherNews
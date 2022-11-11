
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
    <aside className='bg-slate-900 mt-14 p-4 md:w-96 md:p-5  md:mt-8'>
      <h2 className='font-semibold text-3xl text-orange-300 md:text-4xl'>New</h2>
      {otherNews.map((article) => {
        return (
          <article className='text-white border-b-[1px] border-slate-700 last:border-b-0 py-5 hover:text-orange-300' key={article.key}>
            <h3 className='font-bold mb-2 text-lg md:text-xl'>{article.linkName}</h3>
            <p className='text-white md:text-lg md:font-extralight'>{article.desc}</p>
          </article>
        )
      }
      )}
    </aside>
  )
}

export default OtherNews
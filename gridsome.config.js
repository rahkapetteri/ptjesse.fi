// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Personal trainer Jesse Raitapuro',
  siteDescription: 'Olen FITFARM-lisensoitu personal trainer Jyväskylästä ja haluan saada sinut haastamaan itsesi. Jesse Raitapuro.',
  siteUrl: 'https://www.ptjesse.fi',
  titleTemplate: `%s | PTJesse`,
  icon: './src/favicon.svg',
  // Keyword deprecated
  // keywords: ['Personal trainer','Jyväskylä', 'Keski-Suomi','Hyvinvointi', 'Ruokavalio', 'Treeniohjelma', 'Treeni', 'Treenivinkit', 'Ruokailu', 'Ravinto', 'Ilmainen treeniohjelma', 'Kotitreeni', 'Kotona treenaaminen'],
  author: 'Jesse Raitapuro',

  templates: {
    Post: '/:path',
    Tag: '/tag/:id',
    
  },


  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        path: '*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    // Sitemap for SEO
    {
      use: '@gridsome/plugin-sitemap',
      output: '/sitemap.xml',
    },
  ],
}

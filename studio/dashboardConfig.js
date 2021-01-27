export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60112fd9132aa2e63b1de698',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5joywngr',
                  apiId: '663e07c4-402a-4500-8fe5-35483e169255'
                },
                {
                  buildHookId: '60112fda38b5efe79ba11a65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-12gdgfkg',
                  apiId: '6a90a2db-edde-479a-a1d8-5e59d7e098ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hakanider/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-12gdgfkg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

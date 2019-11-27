export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ddeae5fadfdf5e77a0d18c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sxhudubo',
                  apiId: 'e3d2a98b-6bb9-4f11-a9f8-31a5fca3a2fd'
                },
                {
                  buildHookId: '5ddeae60ce144ce7df008614',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7jpgbkkf',
                  apiId: '5aae9d9f-f8a4-4c9a-ae6d-0338ed7a4be8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ezequielmiranda87/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7jpgbkkf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e456d193ca40f32655f61cb',
                  title: 'Sanity Studio',
                  name: 'sanity-11ty-studio',
                  apiId: '4bdbede7-fe9f-452a-930b-f69a09b3419b'
                },
                {
                  buildHookId: '5e456d19887311203573ddb7',
                  title: 'Blog Website',
                  name: 'sanity-11ty',
                  apiId: 'b3dca771-209f-4c29-aae6-3e4454930ba2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joerobot/sanity-11ty',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11ty.netlify.com', category: 'apps'}
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

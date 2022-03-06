export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6224e16332fd96de6654af7b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tf3w5gcf',
                  apiId: '81fd9897-3a0c-4854-9971-ad7b42f36601'
                },
                {
                  buildHookId: '6224e163958f1023535f14de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b8r73y8c',
                  apiId: '11e178ea-1688-46df-8dba-3ef6d10d88a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NenadVrtue/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b8r73y8c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

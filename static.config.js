import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { myProjects, projects, home, about, resume} = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home,
          myProjects
        })
      },
      {
        path: '/portfolio',
        component: 'src/containers/Portfolio',
        getData: () => ({
          ...projects,
          myProjects
        }),
        children: myProjects.map(project => ({
          path: `/portfolio/${project.slug}`,
          component: 'src/containers/Projects',
          getData: () => ({
            project,
          }),
        }))
      },
      {
        path: '/resume',
        component: 'src/containers/Resume',
        getData: () => ({
          ...resume
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}

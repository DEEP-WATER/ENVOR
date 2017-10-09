const getters = {
  sidebar: state => state.sidebar.sidebar,
  visitedViews: state => state.app.visitedViews,
  permission_routers: state => state.permission.routers
}
export default getters

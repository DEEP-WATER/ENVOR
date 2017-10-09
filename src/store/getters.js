const getters = {
  sidebar: state => state.sidebar.sidebar,
  visitedViews: state => state.app.visitedViews,
  permission_routers: state => state.permission.routers,
  storedemo: state => state.storedemo.storedemo
}
export default getters

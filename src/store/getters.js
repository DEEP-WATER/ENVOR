const getters = {
  sidebar: state => state.sidebar.sidebar,
  storedemo: state => state.storedemo.storedemo,
  count: state => state.count,
  visitedViews: state => state.app.visitedViews
}
export default getters

import Header from "./Header";

const Layout = ({children}) => {
    return <div className="app">
        <Header />
            {children}
    </div>

}
export default Layout

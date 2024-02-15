import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
// import AddArticle from "../components/Blog/AddArticle"
// import Article from "../components/Blog/Article"
// import Blog from "../pages/Blog"
import Login from "../pages/Login"
import Contact from "../pages/Contact"
// import App from "../App"



//jest.mock("nanoid", () => {   return { nanoid: () => "123" } })

test('demo', () => {
    expect(true).toBe(true)
  })
  

test("Renders the header", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    expect(true).toBeTruthy()
})

test("Renders the footer", () => {
  render(
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
  )
  expect(true).toBeTruthy()
})

test("test layout structure", () => {
  render(
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
  )
  expect(true).toBeTruthy()
})

// test("test AddArticle", () => {
//   render(
//       <BrowserRouter>
//           <AddArticle />
//       </BrowserRouter>
//   )
//   expect(true).toBeTruthy()
// })

// test("test  Article page", () => {
//   render(
//       <BrowserRouter>
//           <Article />
//       </BrowserRouter>
//   )
//   expect(true).toBeTruthy()
// })

// test("test  Blog page", () => {
//   render(
//       <BrowserRouter>
//           <Blog />
//       </BrowserRouter>
//   )
//   expect(true).toBeTruthy()
// })

test("test Login page", () => {
  render(
      <BrowserRouter>
          <Login />
      </BrowserRouter>
  )
  expect(true).toBeTruthy()
})

test("test Contact page", () => {
  render(
      <BrowserRouter>
          <Contact />
      </BrowserRouter>
  )
  expect(true).toBeTruthy()
})

// test("Renders the main page", () => {
//   render(<App />)
//   expect(true).toBeTruthy()
// })

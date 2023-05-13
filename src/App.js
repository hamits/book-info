import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/mainpage'
import Books from './pages/books'
import BookDetail from './pages/bookDetail'
import UndefinedPage from './pages/undefinedPage'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:bookId" element={<BookDetail />} />
            <Route path='*' element={<UndefinedPage />}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;

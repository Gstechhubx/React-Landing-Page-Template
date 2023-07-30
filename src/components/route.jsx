import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './blog';

export default function BlogRoute() {
  return (
    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
        <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

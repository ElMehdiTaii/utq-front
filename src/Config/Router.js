import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Service from '../Pages/Service';
import Quote from '../Pages/Quote';
import About from '../Pages/About';
import Header from '../Layouts/Header/Index';


export default function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

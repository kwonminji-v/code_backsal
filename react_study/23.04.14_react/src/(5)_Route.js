import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, Outlet} from "react-router-dom"
//
export default function App() {
  return (
    <BrowserRouter>
    <Link to = "/"> Home </Link>
    <Link to =  "/one"> One </Link>
    <Link to =  "/two"> Two </Link>
    <Link to =  "/three"> Three </Link>
    {/* 라우트를 감싸준다. */}

    <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name = 'licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/" element={<Outlet />}>
            <Route path="" element={<ThreeIndex/>} />
            <Route path="hojunone/" element={<ThreeOne/>} />
            <Route path="hojuntwo/" element={<ThreeTwo/>} />
        </Route>
        <Route path="/blog/:id" element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  );
}
//예를들어, /blog/123의 경우 id는 123이 된다. :id 값을 사용하여 블로그 게시물의 내용을 렌더링 할 수 있다.
function Index() {
    return <h1>Hello World0</h1>
}
function One({name}) {
    return <h1>{name} World1</h1>
}

function Two() {
    return <h1>Hello World2</h1>
}

function Three() {
    return <h1>Hello World3</h1>
}
function Blog() {
    const location = useLocation()
    console.log(location)
    return <h1>Hello Blog</h1>
}
function ThreeIndex() {
    return <h1>Hello ThreeIndex</h1>
}

function ThreeOne() {
    return <h1>Hello ThreeOne</h1>
}

function ThreeTwo() {
    return <h1>Hello ThreeTwo</h1>
}

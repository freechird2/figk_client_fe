import { Root } from 'App'
import About from 'pages/About'
import ArtFiGk from 'pages/ArtFigk'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Search from 'pages/Search'
import SearchArtFigk from 'pages/Search/SearchArtFigk'
import SearchTextFigk from 'pages/Search/SearchTextFigk'
import Shared from 'pages/Shared'
import SharedArtFigk from 'pages/Shared/SharedArtFigk'
import SharedTextFigk from 'pages/Shared/SharedTextFigk'
import TextFigk from 'pages/TextFigk'
import Writer from 'pages/Writer'
import { createBrowserRouter } from 'react-router-dom'

export const ROUTER_PATH = {
    HOME: '/',
    ABOUT: 'about',
    TEXT_FIGK: 'text',
    ART_FIGK: 'art',
    SEARCH: 'search',
    WRITER: 'writer',
    SHARED: 'shared',
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: ROUTER_PATH.ABOUT,
                element: <About />,
            },
            {
                path: ROUTER_PATH.HOME,
                element: <Home />,
            },
            {
                path: ROUTER_PATH.TEXT_FIGK,
                element: <TextFigk />,
            },
            {
                path: ROUTER_PATH.ART_FIGK,
                element: <ArtFiGk />,
            },
            {
                path: ROUTER_PATH.SEARCH,
                element: <Search />,
                children: [
                    { path: ROUTER_PATH.TEXT_FIGK, element: <SearchTextFigk /> },
                    { path: ROUTER_PATH.ART_FIGK, element: <SearchArtFigk /> },
                ],
            },
            {
                path: ROUTER_PATH.WRITER,
                element: <Writer />,
            },
            {
                path: ROUTER_PATH.SHARED,
                element: <Shared />,
                children: [
                    { path: ROUTER_PATH.TEXT_FIGK, element: <SharedTextFigk /> },
                    { path: ROUTER_PATH.ART_FIGK, element: <SharedArtFigk /> },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
])

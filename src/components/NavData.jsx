import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';

import Home from "../pages"
import AboutMe from "../pages/about-me"
import ContactMe from "../pages/contact-me"
import Services from "../pages/services"
import Works from "../pages/works"
import Testimonials from "../pages/testimonials"

const navData = [
    { name: 'home', path: '/', icon: <HiHome />, element:<Home/> },
    { name: 'about', path: '/about', icon: <HiUser />, element:<AboutMe/> },
    { name: 'work', path: '/work', icon: <HiViewColumns />, element:<Works/> },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
        element: <ContactMe/>
    },
];

export default navData;
'use client'

import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'
import {
    Calendar,
    ChevronDown,
    ChevronRight,
    Home,
    Inbox,
    Search,
    Settings,
    WholeWord,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import FullLogo from '@/components/custom-ui/FullLogo'
import ShortLogo from '@/components/custom-ui/ShortLogo'
import Link from 'next/link'

const itemsSupplier = [
    { title: 'Home', url: '/suppliers', icon: Home },
    { title: 'Inbox', url: '/suppliers', icon: Inbox },
    { title: 'Calendar', url: '/suppliers', icon: Calendar },
    { title: 'Search', url: '/suppliers', icon: Search },
    { title: 'Settings', url: '/suppliers', icon: Settings },
]

const itemsHome = [
    { title: 'Home', url: '/home', icon: Home },
    { title: 'Inbox', url: '/home', icon: Inbox },
    { title: 'Calendar', url: '/home', icon: Calendar },
    { title: 'Search', url: '/home', icon: Search },
    { title: 'Settings', url: '/home', icon: Settings },
]

const items = [
    { title: 'Home', url: '#', icon: Home },
    { title: 'Inbox', url: '#', icon: Inbox },
    { title: 'Calendar', url: '#', icon: Calendar },
    { title: 'Search', url: '#', icon: Search },
    { title: 'Settings', url: '#', icon: Settings },
]

const sections = [
    { title: 'Home', icon: Home, items: itemsHome },
    { title: 'Suppliers', icon: WholeWord, items: itemsSupplier },
    { title: 'Reviews', icon: Inbox, items },
    { title: 'Contacts', icon: Calendar, items },
    { title: 'Dashboard', icon: Settings, items },
]

const HomePage = () => {
    const pathname = usePathname()

    const { open, setOpen } = useSidebar()
    const toggleSidebar = () => setOpen(!open)

    return (
        <div className="w-full min-h-screen flex">
            <Sidebar collapsible="icon">
                <SidebarContent className="gap-0 overflow-hidden">
                    <SidebarHeader className="h-[8vh] flex justify-center items-center border-b border-[#e5e5e5]">
                        {open ? (
                            <FullLogo size={160} />
                        ) : (
                            <ShortLogo size={160} />
                        )}
                    </SidebarHeader>
                    <SidebarHeader className="h-[8vh] flex justify-center items-center border-b border-[#e5e5e5]">
                        {open ? (
                            <div className="max-w-[12rem] h-[3rem] w-full border border-[#e5e5e5] flex justify-between items-center p-1">
                                <p className="max-w-[6rem] w-full h-full flex justify-center items-center bg-gray-300">
                                    Menu
                                </p>
                                <p className="max-w-[6rem] w-full h-full flex justify-center items-center">
                                    Admin
                                </p>
                            </div>
                        ) : (
                            <div className="max-w-[3rem] h-[3rem] w-full border border-[#e5e5e5] flex justify-between items-center p-1">
                                <p className="w-[3rem] h-full flex justify-center items-center bg-gray-300">
                                    M
                                </p>
                            </div>
                        )}
                    </SidebarHeader>
                    <div className="h-[76vh] mt-2">
                        {sections.map((section) => (
                            <div key={section.title}>
                                {open ? (
                                    <Collapsible>
                                        <SidebarGroup>
                                            <SidebarGroupLabel className="p-0">
                                                <CollapsibleTrigger className="flex justify-between items-center w-full hover:bg-gray-100 py-2 px-1 rounded-[6px] border-none text-[16px]">
                                                    <div className="flex items-center gap-2">
                                                        <section.icon className="w-5 h-5" />
                                                        {section.title}
                                                    </div>
                                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                </CollapsibleTrigger>
                                            </SidebarGroupLabel>
                                            <CollapsibleContent>
                                                <SidebarGroupContent>
                                                    <SidebarMenu>
                                                        {section.items.map(
                                                            (item) => (
                                                                <SidebarMenuItem
                                                                    key={
                                                                        item.title
                                                                    }
                                                                >
                                                                    <SidebarMenuButton
                                                                        asChild
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                item.url
                                                                            }
                                                                        >
                                                                            <item.icon />
                                                                            <span>
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </SidebarMenuButton>
                                                                </SidebarMenuItem>
                                                            )
                                                        )}
                                                    </SidebarMenu>
                                                </SidebarGroupContent>
                                            </CollapsibleContent>
                                        </SidebarGroup>
                                    </Collapsible>
                                ) : (
                                    <a
                                        key={section.title}
                                        href={section.items[0]?.url || '#'}
                                        className="w-full flex justify-center items-center my-3"
                                    >
                                        <section.icon className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <SidebarFooter
                        onClick={toggleSidebar}
                        className={`h-[8vh] border-t border-[#e5e5e5] flex justify-center cursor-pointer ${
                            open ? 'items-end' : 'items-center '
                        }`}
                    >
                        <ChevronRight
                            className={`transition-transform ${
                                open ? 'rotate-180' : ''
                            }`}
                        />
                    </SidebarFooter>
                </SidebarContent>
            </Sidebar>

            <div className="w-full min-h-screen">
                <header className="w-full px-5 h-[8vh] bg-[#fafafa] border-b border-[#e5e5e5] flex items-center justify-start text-2xl font-bold">
                    Supplier
                </header>
            </div>
        </div>
    )
}

export default HomePage

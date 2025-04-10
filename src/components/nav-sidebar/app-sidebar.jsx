import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Command, Send } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router'

import { NavMain } from '@/components/nav-sidebar/nav-main'
import { NavSecondary } from '@/components/nav-sidebar/nav-secondary'
import { useNavMenu } from '@/hooks/query/user-menu'

const navSecondary = [
	{
		title: 'Feedback',
		url: 'https://github.com/TinsFox/shadcnui-boilerplate/issues',
		icon: Send,
		external: true
	}
]

export function AppSidebar({ ...props }) {
	const { data: menus } = useNavMenu()

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/dashboard">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Vite Boilerplate</span>
									<span className="truncate text-xs">Enterprise</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={menus} />
				<NavSecondary items={navSecondary} className="mt-auto" />
			</SidebarContent>
		</Sidebar>
	)
}

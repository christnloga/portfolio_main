import { Link, usePage } from '@inertiajs/react';
import {
    BookOpen,
    FolderGit2,
    LayoutGrid,
    MessageSquare,
    TrendingUp,
    Users,
    Folder,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import {
    pipeline as dashboardPipeline,
    teams as dashboardTeams,
    projects as dashboardProjects,
    caseStudies as dashboardCaseStudies,
    messages as dashboardMessages,
} from '@/routes/dashboard/index';
import type { NavItem } from '@/types';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const { unreadMessagesCount } = usePage<{
        unreadMessagesCount: number;
    }>().props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Overview',
            href: dashboard(),
            icon: LayoutGrid,
        },
        {
            title: 'Case Studies',
            href: dashboardCaseStudies(),
            icon: BookOpen,
        },
        {
            title: 'Messages',
            href: dashboardMessages(),
            icon: MessageSquare,
            badge: unreadMessagesCount > 0 ? unreadMessagesCount : null,
        },
        {
            title: 'Pipeline',
            href: dashboardPipeline(),
            icon: TrendingUp,
        },
        {
            title: 'Teams',
            href: dashboardTeams(),
            icon: Users,
        },
        {
            title: 'Projects',
            href: dashboardProjects(),
            icon: Folder,
        },
    ];
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

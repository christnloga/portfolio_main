import { List } from 'lucide-react';
import React, { useState } from 'react';
import { useTableOfContents } from '../hooks/useTableOfContents';
import type { TocItem } from '../hooks/useTableOfContents';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';

// Extracted outside of render to prevent "Cannot create components during render" error
const TocList = ({
    headings,
    activeId,
    onItemClick,
}: {
    headings: TocItem[];
    activeId: string;
    onItemClick?: () => void;
}) => (
    <ul className="space-y-3">
        {headings.map((heading) => (
            <li
                key={heading.id}
                // Indent h3 tags to create a visual hierarchy
                className={`${heading.level === 3 ? 'ml-4' : ''}`}
            >
                <a
                    href={`#${heading.id}`}
                    className={`block text-sm transition-colors duration-200 ${
                        activeId === heading.id
                            ? 'font-semibold text-[#00A6F4]'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(heading.id)?.scrollIntoView({
                            behavior: 'smooth',
                        });
                        onItemClick?.();
                    }}
                >
                    {heading.text}
                </a>
            </li>
        ))}
    </ul>
);

export const TableOfContents = ({
    contentDependency,
}: {
    contentDependency: any;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // We pass the caseStudy data as a dependency so the hook knows when to run
    const { headings, activeId } = useTableOfContents(
        contentDependency?.content_blocks || [],
    );

    if (headings.length === 0) return null;

    return (
        <>
            {/* Desktop View */}
            <nav className="sticky top-24 mt-10 hidden max-h-[calc(100vh-6rem)] overflow-auto lg:block">
                <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
                    On this page
                </h4>
                <TocList headings={headings} activeId={activeId} />
            </nav>

            {/* Mobile View */}
            <div className="fixed right-6 bottom-6 z-50 lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button className="flex h-10 items-center gap-2 rounded-xl bg-[#00A6F4] px-4 text-sm font-semibold text-black shadow-lg shadow-[#00A6F4]/20 transition-transform active:scale-95">
                            <List className="h-4 w-4" />
                            <span>Content</span>
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[85vw] p-6 sm:max-w-md"
                    >
                        <SheetHeader className="pb-6 text-left">
                            <SheetTitle className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                                On this page
                            </SheetTitle>
                        </SheetHeader>
                        <div className="h-full overflow-auto pb-12">
                            <TocList
                                headings={headings}
                                activeId={activeId}
                                onItemClick={() => setIsOpen(false)}
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

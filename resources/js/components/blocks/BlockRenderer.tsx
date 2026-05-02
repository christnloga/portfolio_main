import React from 'react';
import type { Block } from '../../types';
import { HeadingBlock, TextBlock, ImageBlock, CodeBlock, GalleryBlock } from './BlockComponents';

export const BlockRenderer = ({ blocks }: { blocks: Block[] }) => {
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="case-study-blocks space-y-6">
            {blocks.map((block) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <HeadingBlock
                                key={block.id}
                                data={block.data as any}
                            />
                        );
                    case 'text':
                        return (
                            <TextBlock
                                key={block.id}
                                data={block.data as any}
                            />
                        );
                    case 'image':
                        return (
                            <ImageBlock
                                key={block.id}
                                data={block.data as any}
                            />
                        );
                    case 'code_snippet':
                        return (
                            <CodeBlock
                                key={block.id}
                                data={block.data as any}
                            />
                        );
                    case 'gallery':
                        return (
                            <GalleryBlock
                                key={block.id}
                                data={block.data as any}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

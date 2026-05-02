export type * from './auth';
export type * from './navigation';
export type * from './ui';

export type BlockType =
    | 'heading'
    | 'text'
    | 'image'
    | 'code_snippet'
    | 'gallery';

interface BaseBlock {
    id: string;
    type: BlockType;
}

export type Block =
    | (BaseBlock & {
          type: 'heading';
          data: { text: string; level: 1 | 2 | 3 };
      })
    | (BaseBlock & { type: 'text'; data: { content: string } })
    | (BaseBlock & { type: 'image'; data: { url: string; caption: string } })
    | (BaseBlock & {
          type: 'code_snippet';
          data: { language: string; code: string };
      })
    | (BaseBlock & { type: 'gallery'; data: { images: { url: string; caption?: string }[] } });

export type CaseStudy = {
    id: string;
    title: string;
    category: string;
    slug: string;
    client_name: string;
    short_description: string;
    cover_image_url: string;
    roles: string[];
    tech_stack: string[];
    content_blocks: Block[];
    start_date: string;
    end_date: string;
    is_published: boolean;
};

export type Applicant = {
    id: string;
    name: string;
    email: string;
    phone?: string;
    city: string;
    university?: string;
    graduation_year: number;
    discipline: 'ux_ui' | 'frontend' | 'backend' | 'fullstack';
    portfolio_url?: string;
    github_url?: string;
    stack?: string;
    mindset_answer_1?: string;
    mindset_answer_2?: string;
    mindset_answer_3?: string;
    status: 'pending' | 'shortlisted' | 'accepted' | 'rejected';
    created_at: string;
    updated_at: string;
};

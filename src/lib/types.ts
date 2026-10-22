export interface SlimModule {
  id: string;
  cat: string;
  title: string;
  sub: string;
  role: string;
  kind?: string;
  order?: number;
}

export interface ModuleCard extends SlimModule {
  libs?: string[];
  live?: boolean;
  screen?: boolean;
  html: string;
  css?: string;
  run?: string;
  prompt?: string;
}

export interface Category {
  id: string;
  name: string;
  blurb?: string;
  screen?: boolean;
}

export interface LibraryIndex {
  version: number;
  count: number;
  categories: Category[];
  modules: SlimModule[];
}

export interface LibMeta {
  label: string;
  bundle: string;
  global: string;
  exports: Record<string, [string, string]>;
  importmap: Record<string, string>;
}

export interface LibraryContext {
  libBase?: string;
  stageBase: string;
  screenBase: string;
  libsMeta: Record<string, LibMeta>;
}

export interface SectionTexts {
  headline?: string;
  subhead?: string;
  cta?: string;
  items?: string[];
}

export interface SectionSpec {
  order: number;
  role: string;
  description: string;
  layout: string;
  elements: string[];
  motion_hint: string;
  wants_3d: boolean;
  aspect: number;
  texts: SectionTexts;
  pick?: {
    id: string;
    confidence: number;
    reason: string;
  };
  alternatives?: string[];
  candidates?: Array<{ id: string; title: string; sub: string }>;
  html?: string | null;
}

export interface PageTheme {
  mode: 'light' | 'dark';
  accent: string;
  font_style?: string;
  tone?: string;
}

export interface PageSpec {
  page: PageTheme;
  sections: SectionSpec[];
}

export interface PlanResponse {
  page: PageTheme;
  sections: SectionSpec[];
}

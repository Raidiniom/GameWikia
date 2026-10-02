create type app_role as enum ('guest', 'constributor', 'moderator', 'admin');

create table profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    username text not null check (char_length(username) between 3 and 30),
    role app_role not null default 'quest',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
);
create unique index profiles_username_lower_idx on profiles (lower(username));

create table games (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    tagline text,
    icon_url text
);
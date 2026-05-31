-- Enable extensions
create extension if not exists "uuid-ossp";

-- Profiles
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  role text default 'seller',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Vehicle Listings
create table public.listings (
  id uuid default uuid_generate_v4() primary key,
  seller_id uuid references public.profiles(id),
  title text not null,
  price numeric not null,
  make text not null,
  model text not null,
  year integer not null,
  mileage integer,
  description text,
  images text[],
  status text default 'active' check (status in ('active', 'sold', 'cancelled')),
  vin text,
  location text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.listings enable row level security;

-- Basic policies
create policy "Public read listings" on listings for select using (true);
create policy "Users manage own listings" on listings for all using (auth.uid() = seller_id);
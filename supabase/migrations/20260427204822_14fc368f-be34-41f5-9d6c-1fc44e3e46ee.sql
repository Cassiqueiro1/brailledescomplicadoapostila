insert into storage.buckets (id, name, public)
values ('book-images', 'book-images', true)
on conflict (id) do nothing;

create policy "Public read book-images"
on storage.objects for select
using (bucket_id = 'book-images');

create policy "Public upload book-images"
on storage.objects for insert
with check (bucket_id = 'book-images');

create policy "Public update book-images"
on storage.objects for update
using (bucket_id = 'book-images');

create policy "Public delete book-images"
on storage.objects for delete
using (bucket_id = 'book-images');
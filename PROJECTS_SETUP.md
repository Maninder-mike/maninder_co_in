# Projects Feature Setup

## 1. Run the Database Migration

You need to run the updated SQL migration to create the `projects` table in your Supabase database.

### Steps:

1. Go to your Supabase project dashboard at https://supabase.com/dashboard
2. Select your project
3. Navigate to **SQL Editor** in the left sidebar
4. Copy the contents of `supabase-migration.sql` file
5. Paste it into the SQL editor
6. Click **Run** to execute the migration

This will create:
- ✅ A `projects` table with all necessary fields
- ✅ Row Level Security (RLS) policies for public read access
- ✅ Three sample projects (Travel Tracker, Run Metrics, CrossFit Timer)

## 2. Database Schema

The `projects` table has the following structure:

```sql
- id: UUID (Primary Key)
- title: TEXT (Required)
- description: TEXT (Required)
- stack: TEXT[] (Array of tech stack items)
- link: TEXT (Optional - project URL)
- github_url: TEXT (Optional - GitHub repository)
- image_url: TEXT (Optional - project image)
- is_featured: BOOLEAN (Show on homepage)
- display_order: INTEGER (Order of display)
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

## 3. Managing Projects

### Add a New Project

Run this SQL in Supabase SQL Editor:

```sql
INSERT INTO public.projects (
  title, 
  description, 
  stack, 
  is_featured, 
  display_order,
  link,
  github_url
) VALUES (
  'My New Project',
  'Description of my awesome project',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS'],
  true,
  4,
  'https://example.com',  -- Click redirects to this URL
  'https://github.com/username/repo'
);
```

### Update a Project

```sql
UPDATE public.projects 
SET 
  title = 'Updated Title',
  description = 'Updated description',
  stack = ARRAY['React', 'Node.js'],
  updated_at = NOW()
WHERE id = 'your-project-uuid';
```

### Delete a Project

```sql
DELETE FROM public.projects 
WHERE id = 'your-project-uuid';
```

### Change Display Order

```sql
UPDATE public.projects 
SET display_order = 1 
WHERE title = 'My Project';
```

### Feature/Unfeature a Project

```sql
-- Feature a project (show on homepage)
UPDATE public.projects 
SET is_featured = true 
WHERE id = 'your-project-uuid';

-- Unfeature a project (hide from homepage)
UPDATE public.projects 
SET is_featured = false 
WHERE id = 'your-project-uuid';
```

## 4. How It Works

- **Dynamic Data**: Projects are now fetched from Supabase instead of being hardcoded
- **Server-Side**: Data is fetched on the server (SSR) for better SEO and performance
- **Featured Projects**: Only projects with `is_featured = true` are shown on the homepage
- **Ordered Display**: Projects are sorted by `display_order` (ascending) and then by creation date

## 5. Future Enhancements

You can later add:
- Admin interface to manage projects (CRUD operations)
- Project detail pages with more information
- Image upload functionality for project screenshots
- Categories/tags for filtering projects
- "View all projects" page showing all projects, not just featured ones

## 6. Troubleshooting

**Error: "Could not find the table 'public.projects'"**
- Solution: Run the SQL migration in your Supabase dashboard

**No projects showing on homepage**
- Check if you have projects with `is_featured = true` in your database
- Run: `SELECT * FROM public.projects WHERE is_featured = true;`

**Projects not updating**
- Check your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- Verify RLS policies are set correctly in Supabase

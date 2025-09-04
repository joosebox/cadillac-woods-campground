export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Campground Views', value: 'views' },
          { title: 'Accommodations', value: 'accommodations' },
          { title: 'Activities', value: 'activities' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Nature & Wildlife', value: 'nature' },
          { title: 'Events', value: 'events' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette'],
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for accessibility and SEO',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: 'Featured Image',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage gallery',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Spring', value: 'spring' },
          { title: 'Summer', value: 'summer' },
          { title: 'Fall', value: 'fall' },
          { title: 'Winter', value: 'winter' },
          { title: 'All Seasons', value: 'all' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, category } = selection;
      return {
        title,
        subtitle: category,
        media: selection.media,
      };
    },
  },
};
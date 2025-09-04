export default {
  name: 'amenity',
  title: 'Amenity',
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
          { title: 'Recreation', value: 'recreation' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Services', value: 'services' },
          { title: 'Activities', value: 'activities' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "tent", "wifi", "shower")',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'isFeatured',
      title: 'Featured Amenity',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
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
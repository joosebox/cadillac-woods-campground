export default {
  name: 'stay',
  title: 'Stay Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'RV Sites', value: 'rv' },
          { title: 'Tent Sites', value: 'tent' },
          { title: 'Cabins', value: 'cabin' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
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
      ],
    },
    {
      name: 'priceFrom',
      title: 'Price From (per night)',
      type: 'number',
      description: 'Starting price - actual rates managed in Campspot',
    },
    {
      name: 'maxOccupancy',
      title: 'Maximum Occupancy',
      type: 'number',
    },
    {
      name: 'siteSize',
      title: 'Site Size',
      type: 'string',
      description: 'e.g., "30x50 ft"',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'hookups',
      title: 'Hookups (RV Sites)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Electric 30 Amp', value: 'electric30' },
          { title: 'Electric 50 Amp', value: 'electric50' },
          { title: 'Water', value: 'water' },
          { title: 'Sewer', value: 'sewer' },
          { title: 'Cable TV', value: 'cable' },
        ],
      },
    },
    {
      name: 'isPetFriendly',
      title: 'Pet Friendly',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'isAccessible',
      title: 'ADA Accessible',
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
      media: 'images.0',
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
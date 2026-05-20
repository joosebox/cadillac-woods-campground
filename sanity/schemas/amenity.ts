type ValidationRule = {
  required: () => ValidationRule;
};

type AmenityPreviewSelection = {
  title?: string;
  category?: string;
};

const amenity = {
  name: 'amenity',
  title: 'Amenity',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
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
      validation: (Rule: ValidationRule) => Rule.required(),
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
      description: 'Lucide icon name (e.g., "tent", "shower", "tree-pine")',
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
          validation: (Rule: ValidationRule) => Rule.required(),
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
    },
    prepare(selection: AmenityPreviewSelection) {
      const { title, category } = selection;
      return {
        title,
        subtitle: category,
      };
    },
  },
};

export default amenity;

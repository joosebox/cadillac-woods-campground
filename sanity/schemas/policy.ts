type ValidationRule = {
  required: () => ValidationRule;
};

type PolicyPreviewSelection = {
  title?: string;
  category?: string;
};

const policy = {
  name: 'policy',
  title: 'Policy/FAQ',
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
          { title: 'Check-In/Out', value: 'checkin' },
          { title: 'Cancellation', value: 'cancellation' },
          { title: 'Pet Policy', value: 'pets' },
          { title: 'Rules & Regulations', value: 'rules' },
          { title: 'Payment', value: 'payment' },
          { title: 'General FAQ', value: 'faq' },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'isHighlighted',
      title: 'Highlight this policy',
      type: 'boolean',
      initialValue: false,
      description: 'Shows this at the top with emphasis',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare(selection: PolicyPreviewSelection) {
      const { title, category } = selection;
      return {
        title,
        subtitle: category,
      };
    },
  },
};

export default policy;

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'date', type: 'datetime' },
    { name: 'place', type: 'string' },
    { name: 'description', type: 'text' },
    {
      name: 'projecttype',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
          { value: 'salvationarmy', title: 'Salvation Army' },
        ],
      },
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
};

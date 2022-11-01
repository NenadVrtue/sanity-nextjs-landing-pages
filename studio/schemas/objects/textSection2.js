export default {
  type: 'object',
  name: 'textSection2',
  title: 'Text2',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label2'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading2'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text2'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section 2'
      }
    }
  }
}

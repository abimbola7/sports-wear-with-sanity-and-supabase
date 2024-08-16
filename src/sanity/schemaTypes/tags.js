export const tags = {
  name : "tags",
  title : "Tags",
  type : "document",
  fields : [
    {
      name : "name",
      title : "Name",
      type : "string"
    },
    {
      name : "slug",
      title : "Slug",
      type : "slug",
      options : {
        source : 'name',
        maxLength : 100
      }
    },
  ]
}
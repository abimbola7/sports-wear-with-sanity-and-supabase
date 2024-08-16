export const products = {
  name : "products",
  title : "Products",
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
    {
      name : "price",
      title : "Price",
      type : "number",
    },
    {
      name : "amount",
      title : "Amount",
      type : "number",
    },
    {
      name : "description",
      title : 'Description',
      type : "blockContent"
    },
    {
      name : "category",
      title : "Category",
      type : "array",
      of : [
        {
          type : "reference",
          to : [
            {
              type : "categories"
            }
          ]
        }
      ]
    },
    {
      name : "tags",
      title : "Tags",
      type : "array",
      of : [
        {
          type : "reference",
          to : [
            {
              type : "tags"
            }
          ]
        }
      ]
    },
    {
      name : "image",
      title : "Image",
      type : "image",
      options : {
        source : "name",
        // hotspot : true,
      },
      fields : [
        {
          name : "alt",
          title : "Alt",
          type : "string",
          options : {
            isHighlighted : true
          }
        }
      ]
    }
  ]
}
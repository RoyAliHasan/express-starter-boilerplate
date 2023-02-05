module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Express-starter-Biolerplate", // short title.
    description: "This is the Basic Biolerplate For Expressjs ", //  desc.
    version: "1.0.0.RELEASE", // version number
    contact: {
      name: "Roy Ali Hasan", // your name
      email: "royalihasan0987@gmail.com", // your email
      url: "web.com", // your website
    },
  },
  liscence: {
    name: "MIT linces",
  },

  servers: [
    {
      url: "http://localhost:4000/", // url
      description: "Local server", // name
    },
  ],
  tags: [
    {
      name: "CREATE User Api", // name of a tag
    },
  ],
  components: {
    schemas: {
      // id model
      id: {
        type: "string", // data type
        description: "An id of a todo", // desc
        example: "tyVgf", // example of an id
      },
      // todo model
      Todo: {
        type: "object", // data type
        properties: {
          id: {
            type: "string", // data-type
            description: "Todo identification number", // desc
            example: "ytyVgh", // example of an id
          },
          title: {
            type: "string", // data-type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // Todo input model
      TodoInput: {
        type: "object", // data type
        properties: {
          title: {
            type: "string", // data type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};

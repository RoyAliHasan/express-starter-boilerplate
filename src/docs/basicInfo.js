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
  license: {
    name: "MIT",
    url: "https://spdx.org/licenses/MIT.html",
  },

  servers: [
    {
      url: "http://localhost:5000/", // url
      description: "Local server", // name
    },
  ],
  tags: [
    {
      name: "CREATE User Api", // name of a tag
    },
  ],
  apis: ["../routes*.js"],
};

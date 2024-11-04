const S = require("fluent-json-schema");

const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};

const schema = S.object()
  .id("http://foo/user")
  .title("My First Fluent JSON Schema")
  .description("A simple user")
  .prop("email", S.string().format(S.FORMATS.EMAIL).required())
  .prop("password", S.string().minLength(8).required())
  .prop("role", S.string().enum(Object.values(ROLES)).default(ROLES.USER))
  .prop(
    "birthday",
    S.raw({ type: "string", format: "date", formatMaximum: "2020-01-01" }) // formatMaximum is an AJV custom keywords
  )
  .definition(
    "address",
    S.object()
      .id("#address")
      .prop("line1", S.anyOf([S.string(), S.null()])) // JSON Schema nullable
      .prop("line2", S.string().raw({ nullable: true })) // Open API / Swagger  nullable
      .prop("country", S.string())
      .prop("city", S.string())
      .prop("zipcode", S.string())
      .required(["line1", "country", "city", "zipcode"])
  )
  .prop("address", S.ref("#address"));

console.log(JSON.stringify(schema.valueOf(), undefined, 2));

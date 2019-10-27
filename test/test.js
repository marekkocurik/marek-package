const assers = require("assert");

it("Test - 1", function() {
  let obj = Object.create(null);
  assert(typeof(obj) === "object");
});

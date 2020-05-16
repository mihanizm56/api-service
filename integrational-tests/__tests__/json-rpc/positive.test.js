const Joi = require("@hapi/joi");
const { JSONRPCRequest } = require("../../../dist");

const requestBaseConfig = {
  mode: "cors",
  queryParams: {
    foo: "bar",
  },
  translateFunction: (key, options) =>
    `translateFunction got key ${key} and options ${options}`,
};

describe("JSON-PRC request (negative)", () => {
  beforeEach(() => {
    delete global.window;
  });

  test("simple response", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: Joi.object({
        baz: Joi.number().required(),
      }).required(),
    }).unknown();

    const data = await new JSONRPCRequest().makeRequest({
      endpoint: "http://localhost:8080/json-rpc/positive",
      responseSchema,
      body: {
        method: "test_method",
        options: {
          foo: "bar",
        },
      },
    });

    expect(data).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo" },
      error: false,
      errorText: "",
    });
  });
  test("set headers", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: Joi.object({
        baz: Joi.number().required(),
      }).required(),
      specialheader: Joi.string().required(),
    }).unknown();

    const data = await new JSONRPCRequest().makeRequest({
      endpoint: "http://localhost:8080/json-rpc/positive",
      responseSchema,
      headers: {
        specialheader: "specialheader",
      },
      body: {
        method: "test_method",
        options: {
          foo: "bar",
        },
      },
    });

    expect(data).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo", specialheader: "specialheader" },
      error: false,
      errorText: "",
    });
  });
  test("set queryParams", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: Joi.object({
        baz: Joi.number().required(),
      }).required(),
      specialqueryparam: Joi.string().required(),
    }).unknown();

    const data = await new JSONRPCRequest().makeRequest({
      endpoint:
        "http://localhost:8080/json-rpc/positive?specialqueryparam=true",
      responseSchema,
      body: {
        method: "test_method",
        options: {
          foo: "bar",
        },
      },
    });

    expect(data).toEqual({
      additionalErrors: null,
      code: 200,
      data: {
        bar: { baz: 0 },
        foo: "foo",
        specialqueryparam: "specialqueryparam",
      },
      error: false,
      errorText: "",
    });
  });
  test("set extra validation callback and this returns true", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      notValidSchema: Joi.object({
        baz: Joi.number().required(),
      }).required(),
      specialqueryparam: Joi.string().required(),
    }).unknown();

    const extraValidationCallback = jest.fn().mockReturnValue(true);

    const data = await new JSONRPCRequest().makeRequest({
      endpoint: "http://localhost:8080/json-rpc/positive",
      responseSchema,
      extraValidationCallback,
      body: {
        method: "test_method",
        options: {
          foo: "bar",
        },
      },
    });

    expect(data).toEqual({
      additionalErrors: null,
      code: 200,
      data: {
        bar: { baz: 0 },
        foo: "foo",
      },
      error: false,
      errorText: "",
    });
  });
});

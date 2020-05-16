const Joi = require("@hapi/joi");
const { RestRequest, PureRestRequest } = require("../../../../dist");

const requestBaseConfig = {
  mode: "cors",
  translateFunction: (key, options) =>
    `translateFunction got key ${key} and options ${options}`,
};

describe("patch request (positive)", () => {
  beforeEach(() => {
    delete global.window;
  });

  test("simple response without body", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: {
        baz: Joi.number().required(),
      },
    }).unknown();

    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo" },
      error: false,
      errorText: "",
    });
  });

  test("simple response with body", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: {
        baz: Joi.number().required(),
      },
      bodyparam: Joi.string().required(),
    }).unknown();

    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
      body: {
        bodyparam: "bodyparam",
      },
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo", bodyparam: "bodyparam" },
      error: false,
      errorText: "",
    });
  });

  test("simple response with query params", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: {
        baz: Joi.number().required(),
      },
      queryparam: Joi.string().required(),
    }).unknown();

    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
      queryParams: {
        queryparam: "queryparam",
      },
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo", queryparam: "queryparam" },
      error: false,
      errorText: "",
    });
  });

  test("simple response with headers", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
      bar: {
        baz: Joi.number().required(),
      },
      specialheader: Joi.string().required(),
    }).unknown();

    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
      headers: {
        specialheader: "specialheader",
      },
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo", specialheader: "specialheader" },
      error: false,
      errorText: "",
    });
  });

  test('extra validation callback returns "true" and was called', async () => {
    const responseSchema = Joi.object({
      nonActual: Joi.string().required(),
    }).unknown();
    const extraValidationCallback = jest.fn().mockReturnValue(true);
    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
      extraValidationCallback,
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo" },
      error: false,
      errorText: "",
    });
  });

  test("schema was extended and is still valid", async () => {
    const responseSchema = Joi.object({
      foo: Joi.string().required(),
    }).unknown();

    const requestConfig = {
      ...requestBaseConfig,
      endpoint: "http://127.0.0.1:8080/rest/positive",
      responseSchema,
      queryParams: {
        queryparam: "queryparam",
      },
    };

    const response = await new RestRequest().patchRequest(requestConfig);

    expect(response).toEqual({
      additionalErrors: null,
      code: 200,
      data: { bar: { baz: 0 }, foo: "foo", queryparam: "queryparam" },
      error: false,
      errorText: "",
    });
  });

  describe("check PureRestRequest", () => {
    test("simple response", async () => {
      const responseSchema = Joi.object({
        foo: Joi.string().required(),
        bar: {
          baz: Joi.number().required(),
        },
      }).unknown();

      const requestConfig = {
        ...requestBaseConfig,
        endpoint: "http://127.0.0.1:8080/rest/positive?pureresponse=true",
        responseSchema,
      };

      const response = await new PureRestRequest().patchRequest(requestConfig);

      expect(response).toEqual({
        additionalErrors: null,
        code: 200,
        data: { bar: { baz: 0 }, foo: "foo" },
        error: false,
        errorText: "",
      });
    });

    test("response with body", async () => {
      const responseSchema = Joi.object({
        foo: Joi.string().required(),
        bar: {
          baz: Joi.number().required(),
        },
        bodyparam: Joi.string().required(),
      }).unknown();

      const requestConfig = {
        ...requestBaseConfig,
        endpoint: "http://127.0.0.1:8080/rest/positive?pureresponse=true",
        responseSchema,
        body: {
          bodyparam: "bodyparam",
        },
      };

      const response = await new PureRestRequest().patchRequest(requestConfig);

      expect(response).toEqual({
        additionalErrors: null,
        code: 200,
        data: { bar: { baz: 0 }, foo: "foo", bodyparam: "bodyparam" },
        error: false,
        errorText: "",
      });
    });

    test("response extra validation callback returns 'true' and was called", async () => {
      const responseSchema = Joi.object({
        foo: Joi.string().required(),
        testNonValidField: {
          baz: Joi.number().required(),
        },
      }).unknown();
      const extraValidationCallback = jest.fn().mockReturnValue(true);

      const requestConfig = {
        ...requestBaseConfig,
        endpoint: "http://127.0.0.1:8080/rest/positive?pureresponse=true",
        responseSchema,
        body: {
          bodyparam: "bodyparam",
        },
        extraValidationCallback,
      };

      const response = await new PureRestRequest().patchRequest(requestConfig);

      expect(response).toEqual({
        additionalErrors: null,
        code: 200,
        data: { bar: { baz: 0 }, foo: "foo", bodyparam: "bodyparam" },
        error: false,
        errorText: "",
      });
    });

    test("response with headers", async () => {
      const responseSchema = Joi.object({
        foo: Joi.string().required(),
        bar: {
          baz: Joi.number().required(),
        },
        specialheader: Joi.string().required(),
      }).unknown();

      const requestConfig = {
        ...requestBaseConfig,
        endpoint: "http://127.0.0.1:8080/rest/positive",
        responseSchema,
        headers: {
          specialheader: "specialheader",
        },
      };

      const response = await new RestRequest().patchRequest(requestConfig);

      expect(response).toEqual({
        additionalErrors: null,
        code: 200,
        data: { bar: { baz: 0 }, foo: "foo", specialheader: "specialheader" },
        error: false,
        errorText: "",
      });
    });
  });
});

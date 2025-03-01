export const nextConfig = JSON.stringify({
  auth: {
    user_pool_client_id: "5b44j7avt50stl2vial798u1p8",
    user_pool_id: "us-east-2_sBRRxLHX6",
    aws_region: "us-east-2",
    identity_pool_id: "us-east-2:4739fc1a-3a95-4f1d-a7bc-2c4ceb9267ee",
    mfa_methods: [],
    standard_required_attributes: ["email"],
    username_attributes: ["email"],
    user_verification_types: ["email"],
    mfa_configuration: "NONE",
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_numbers: true,
      require_symbols: true,
      require_uppercase: true,
    },
    unauthenticated_identities_enabled: true,
  },
  data: {
    url: "https://qay2x7k5yncprevblozjxeftyy.appsync-api.us-east-2.amazonaws.com/graphql",
    aws_region: "us-east-2",
    api_key: "da2-xwwobli5bjcupavqtjsfykgmdm",
    default_authorization_type: "API_KEY",
    authorization_types: ["AMAZON_COGNITO_USER_POOLS", "AWS_IAM"],
    model_introspection: {
      version: 1,
      models: {
        Todo: {
          name: "Todo",
          fields: {
            id: {
              name: "id",
              isArray: false,
              type: "ID",
              isRequired: true,
              attributes: [],
            },
            content: {
              name: "content",
              isArray: false,
              type: "String",
              isRequired: false,
              attributes: [],
            },
            createdAt: {
              name: "createdAt",
              isArray: false,
              type: "AWSDateTime",
              isRequired: false,
              attributes: [],
              isReadOnly: true,
            },
            updatedAt: {
              name: "updatedAt",
              isArray: false,
              type: "AWSDateTime",
              isRequired: false,
              attributes: [],
              isReadOnly: true,
            },
          },
          syncable: true,
          pluralName: "Todos",
          attributes: [
            {
              type: "model",
              properties: {},
            },
            {
              type: "auth",
              properties: {
                rules: [
                  {
                    allow: "public",
                    provider: "apiKey",
                    operations: ["create", "update", "delete", "read"],
                  },
                ],
              },
            },
          ],
          primaryKeyInfo: {
            isCustomPrimaryKey: false,
            primaryKeyFieldName: "id",
            sortKeyFieldNames: [],
          },
        },
      },
      enums: {},
      nonModels: {},
    },
  },
  version: "1.1",
});

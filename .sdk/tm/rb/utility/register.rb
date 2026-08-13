# KorpoPro SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

KorpoProUtility.registrar = ->(u) {
  u.clean = KorpoProUtilities::Clean
  u.done = KorpoProUtilities::Done
  u.make_error = KorpoProUtilities::MakeError
  u.feature_add = KorpoProUtilities::FeatureAdd
  u.feature_hook = KorpoProUtilities::FeatureHook
  u.feature_init = KorpoProUtilities::FeatureInit
  u.fetcher = KorpoProUtilities::Fetcher
  u.make_fetch_def = KorpoProUtilities::MakeFetchDef
  u.make_context = KorpoProUtilities::MakeContext
  u.make_options = KorpoProUtilities::MakeOptions
  u.make_request = KorpoProUtilities::MakeRequest
  u.make_response = KorpoProUtilities::MakeResponse
  u.make_result = KorpoProUtilities::MakeResult
  u.make_point = KorpoProUtilities::MakePoint
  u.make_spec = KorpoProUtilities::MakeSpec
  u.make_url = KorpoProUtilities::MakeUrl
  u.param = KorpoProUtilities::Param
  u.prepare_auth = KorpoProUtilities::PrepareAuth
  u.prepare_body = KorpoProUtilities::PrepareBody
  u.prepare_headers = KorpoProUtilities::PrepareHeaders
  u.prepare_method = KorpoProUtilities::PrepareMethod
  u.prepare_params = KorpoProUtilities::PrepareParams
  u.prepare_path = KorpoProUtilities::PreparePath
  u.prepare_query = KorpoProUtilities::PrepareQuery
  u.graphql_body = KorpoProUtilities::GraphqlBody
  u.graphql_errors = KorpoProUtilities::GraphqlErrors
  u.result_basic = KorpoProUtilities::ResultBasic
  u.result_body = KorpoProUtilities::ResultBody
  u.result_headers = KorpoProUtilities::ResultHeaders
  u.transform_request = KorpoProUtilities::TransformRequest
  u.transform_response = KorpoProUtilities::TransformResponse
}

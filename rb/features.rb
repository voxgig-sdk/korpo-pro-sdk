# KorpoPro SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module KorpoProFeatures
  def self.make_feature(name)
    case name
    when "base"
      KorpoProBaseFeature.new
    when "ratelimit"
      KorpoProRatelimitFeature.new
    when "retry"
      KorpoProRetryFeature.new
    when "test"
      KorpoProTestFeature.new
    when "timeout"
      KorpoProTimeoutFeature.new
    else
      KorpoProBaseFeature.new
    end
  end
end

# KorpoPro SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KorpoProFeatures
  def self.make_feature(name)
    case name
    when "base"
      KorpoProBaseFeature.new
    when "test"
      KorpoProTestFeature.new
    else
      KorpoProBaseFeature.new
    end
  end
end

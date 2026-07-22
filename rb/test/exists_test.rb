# KorpoPro SDK exists test

require "minitest/autorun"
require_relative "../KorpoPro_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = KorpoProSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

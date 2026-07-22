# KorpoPro SDK utility: make_context
require_relative '../core/context'
module KorpoProUtilities
  MakeContext = ->(ctxmap, basectx) {
    KorpoProContext.new(ctxmap, basectx)
  }
end

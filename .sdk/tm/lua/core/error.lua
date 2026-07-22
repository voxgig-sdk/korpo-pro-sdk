-- KorpoPro SDK error

local KorpoProError = {}
KorpoProError.__index = KorpoProError


function KorpoProError.new(code, msg, ctx)
  local self = setmetatable({}, KorpoProError)
  self.is_sdk_error = true
  self.sdk = "KorpoPro"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KorpoProError:error()
  return self.msg
end


function KorpoProError:__tostring()
  return self.msg
end


return KorpoProError

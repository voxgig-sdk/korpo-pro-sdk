# frozen_string_literal: true

# Typed models for the KorpoPro SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Health entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Health = Struct.new(
  :name,
  :status,
  keyword_init: true
)

# Request payload for Health#list.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
HealthListMatch = Struct.new(
  :name,
  :status,
  keyword_init: true
)


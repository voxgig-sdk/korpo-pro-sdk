# KorpoPro SDK configuration

module KorpoProConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "KorpoPro",
        "slug" => "korpo-pro",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://korpo.pro/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "health" => {},
        },
      },
      "entity" => {
        "health" => {
          "fields" => [
            {
              "name" => "name",
              "short" => "Service name",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Service status",
              "type" => "`$STRING`",
            },
          ],
          "name" => "health",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/health",
                  "segments" => [
                    {
                      "lit" => "health",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.services`",
                  },
                  "parts" => [
                    "health",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    KorpoProFeatures.make_feature(name)
  end
end

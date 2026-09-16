# KorpoPro SDK feature factory

from korpopro_sdk.feature.base_feature import KorpoProBaseFeature
from korpopro_sdk.feature.ratelimit_feature import KorpoProRatelimitFeature
from korpopro_sdk.feature.retry_feature import KorpoProRetryFeature
from korpopro_sdk.feature.test_feature import KorpoProTestFeature
from korpopro_sdk.feature.timeout_feature import KorpoProTimeoutFeature


_FEATURES = {
    "base": lambda: KorpoProBaseFeature(),
    "ratelimit": lambda: KorpoProRatelimitFeature(),
    "retry": lambda: KorpoProRetryFeature(),
    "test": lambda: KorpoProTestFeature(),
    "timeout": lambda: KorpoProTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

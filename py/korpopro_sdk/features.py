# KorpoPro SDK feature factory

from korpopro_sdk.feature.base_feature import KorpoProBaseFeature
from korpopro_sdk.feature.test_feature import KorpoProTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KorpoProBaseFeature(),
        "test": lambda: KorpoProTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

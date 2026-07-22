# KorpoPro SDK feature factory

from feature.base_feature import KorpoProBaseFeature
from feature.test_feature import KorpoProTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KorpoProBaseFeature(),
        "test": lambda: KorpoProTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

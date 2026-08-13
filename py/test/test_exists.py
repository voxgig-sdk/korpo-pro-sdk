# KorpoPro SDK exists test

import pytest
from korpopro_sdk import KorpoProSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KorpoProSDK.test(None, None)
        assert testsdk is not None

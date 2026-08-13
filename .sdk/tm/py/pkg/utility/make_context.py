# KorpoPro SDK utility: make_context

from projectname_sdk.core.context import KorpoProContext


def make_context_util(ctxmap, basectx):
    return KorpoProContext(ctxmap, basectx)

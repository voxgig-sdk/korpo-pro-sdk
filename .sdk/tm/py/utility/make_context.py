# KorpoPro SDK utility: make_context

from core.context import KorpoProContext


def make_context_util(ctxmap, basectx):
    return KorpoProContext(ctxmap, basectx)

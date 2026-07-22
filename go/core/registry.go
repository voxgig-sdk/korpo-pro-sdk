package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewHealthEntityFunc func(client *KorpoProSDK, entopts map[string]any) KorpoProEntity


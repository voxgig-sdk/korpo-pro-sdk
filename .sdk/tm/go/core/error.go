package core

type KorpoProError struct {
	IsKorpoProError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKorpoProError(code string, msg string, ctx *Context) *KorpoProError {
	return &KorpoProError{
		IsKorpoProError: true,
		Sdk:              "KorpoPro",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KorpoProError) Error() string {
	return e.Msg
}

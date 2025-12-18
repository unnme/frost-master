from pydantic import BaseModel, Field, field_validator
import re


class CallbackRequestBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    phone: str = Field(..., min_length=10, max_length=20)

    @field_validator("name")
    def validate_name(cls, v):
        if not re.fullmatch(r"[А-Яа-яЁё]+", v):
            raise ValueError("Имя должно быть на кириллице без пробелов")
        return v.capitalize()


class CallbackRequestCreate(CallbackRequestBase):
    pass


class CallbackRequestRead(CallbackRequestBase):
    id: int

    class Config:
        from_attributes = True

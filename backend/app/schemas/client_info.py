from pydantic import BaseModel


class ClientInfoPayload(BaseModel):
    ip: str | None = None
    userAgent: str | None = None

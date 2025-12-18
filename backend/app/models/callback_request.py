from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime, func
from app.db.base import Base


class CallbackRequest(Base):
    __tablename__ = "callback_requests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(50))
    phone: Mapped[str] = mapped_column(String(20))
    created_at: Mapped[DateTime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )

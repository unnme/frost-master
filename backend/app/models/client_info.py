from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
)
from sqlalchemy.sql import func
from app.db.base import Base


class ClientInfo(Base):
    __tablename__ = "client_info"

    id = Column(Integer, primary_key=True)

    ip = Column(String, nullable=True)

    browser = Column(String, nullable=True)
    browser_version = Column(String, nullable=True)

    os = Column(String, nullable=True)
    os_version = Column(String, nullable=True)

    device = Column(String, nullable=True)

    is_mobile = Column(Boolean, default=False)
    is_tablet = Column(Boolean, default=False)
    is_pc = Column(Boolean, default=False)
    is_bot = Column(Boolean, default=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

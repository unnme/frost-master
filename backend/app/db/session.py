from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

# Создаем engine — подключение к БД
engine = create_engine(
    settings.DATABASE_URL,
    echo=False,
    future=True,
)

# Создаем фабрику сессий
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)


# Зависимость для FastAPI — открыть и закрыть сессию
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

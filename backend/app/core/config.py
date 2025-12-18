from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    TELEGRAM_BOT_TOKEN: str
    TELEGRAM_CHAT_ID: str
    DATABASE_URL: str = "sqlite:///database.db"

    class Config:
        env_file = ".env"


settings = Settings()

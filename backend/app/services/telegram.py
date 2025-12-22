import httpx
import logging
from app.core.config import settings

logger = logging.getLogger(__name__)


async def send_telegram(name: str, phone: str) -> None:
    token = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.TELEGRAM_CHAT_ID

    # 1️⃣ Проверка конфигурации
    if not token or not chat_id:
        logger.warning("Telegram is not configured (token or chat_id missing)")
        return

    text = f"📩 *Новая заявка*\n👤 Имя: {name}\n📱 Телефон: {phone}"

    url = f"https://api.telegram.org/bot{token}/sendMessage"

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.post(
                url,
                json={
                    "chat_id": chat_id,
                    "text": text,
                    "parse_mode": "Markdown",
                },
            )

            response.raise_for_status()

            data = response.json()
            if not data.get("ok"):
                logger.error(f"Telegram API error: {data}")

    except httpx.TimeoutException:
        logger.error("Telegram request timed out")

    except httpx.HTTPError as e:
        logger.error(f"Telegram HTTP error: {e}")

    except Exception as e:
        logger.exception(f"Unexpected Telegram error: {e}")

import httpx
import logging
from app.core.config import settings

logger = logging.getLogger(__name__)


async def send_telegram(name: str, phone: str) -> None:
    token = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.TELEGRAM_CHAT_ID

    if not token or not chat_id:
        logger.warning("Telegram is not configured")
        return

    text = f"📩 Новая заявка\n👤 Имя: {name}\n📱 Телефон: {phone}"
    url = f"https://api.telegram.org/bot{token}/sendMessage"

    transport = httpx.AsyncHTTPTransport(
        local_address=("0.0.0.0", 0),
        retries=2,
    )

    timeout = httpx.Timeout(
        connect=5.0,
        read=10.0,
        write=10.0,
        pool=5.0,
    )

    try:
        async with httpx.AsyncClient(
            transport=transport,
            timeout=timeout,
        ) as client:
            response = await client.post(
                url,
                json={
                    "chat_id": chat_id,
                    "text": text,
                },
            )

            response.raise_for_status()

    except httpx.TimeoutException:
        logger.error("Telegram request timed out (IPv6 issue fixed by IPv4)")

    except Exception:
        logger.exception("Telegram error")

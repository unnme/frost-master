from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.client_info import ClientInfoPayload
from app.models.client_info import ClientInfo
from app.utils.parse_user_agent import parse_user_agent


router = APIRouter(prefix="/api", tags=["Client Info"])


@router.post(
    "/client-info",
)
async def save_client_info(
    payload: ClientInfoPayload,
    request: Request,
    db: Session = Depends(get_db),
):
    real_ip = (
        payload.ip or request.headers.get("x-forwarded-for") or request.client.host
    )

    ua_raw = payload.userAgent or request.headers.get("user-agent")
    ua = parse_user_agent(ua_raw)

    client = ClientInfo(
        ip=real_ip,
        browser=ua.get("browser"),
        browser_version=ua.get("browser_version"),
        os=ua.get("os"),
        os_version=ua.get("os_version"),
        device=ua.get("device"),
        is_mobile=ua.get("is_mobile", False),
        is_tablet=ua.get("is_tablet", False),
        is_pc=ua.get("is_pc", False),
        is_bot=ua.get("is_bot", False),
    )

    db.add(client)
    db.commit()

    return {"ok": True}

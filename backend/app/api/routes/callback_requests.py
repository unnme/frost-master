from fastapi import APIRouter, BackgroundTasks, Depends, Request
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.callback_request import CallbackRequest
from app.schemas.callback_request import CallbackRequestCreate, CallbackRequestRead
from app.services.telegram import send_telegram
from app.utils.limiter import limiter

router = APIRouter(prefix="/api", tags=["Callback requests"])


@router.post(
    "/callback-requests",
    response_model=CallbackRequestRead,
)
@limiter.limit("5/minute")
async def create_callback_request(
    payload: CallbackRequestCreate,
    request: Request,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
):
    new_entry = CallbackRequest(
        name=payload.name,
        phone=payload.phone,
    )

    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)

    background.add_task(
        send_telegram,
        new_entry.name,
        new_entry.phone,
    )

    return new_entry

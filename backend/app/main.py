from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.db.session import engine
from app.db.base import Base

from app.models import *  # noqa

from app.utils.limiter import limiter

from app.api.routes.callback_requests import router as callback_requests_router
from app.api.routes.client_info import router as client_info_router


app = FastAPI()

# -----------------------
# CORS
# -----------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# -----------------------
# Database
# -----------------------
Base.metadata.create_all(bind=engine)

# -----------------------
# Rate limiter
# -----------------------
app.state.limiter = limiter
app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler,
)

# -----------------------
# Routers
# -----------------------
app.include_router(callback_requests_router)
app.include_router(client_info_router)

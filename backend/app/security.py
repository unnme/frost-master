from fastapi import Request, HTTPException, status

TRUSTED_IPS = {"127.0.0.1", "localhost"}


async def verify_ip(request: Request):
    client_ip = request.client.host
    if client_ip not in TRUSTED_IPS:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Access denied for IP: {client_ip}",
        )

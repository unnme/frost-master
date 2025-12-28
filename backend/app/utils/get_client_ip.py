from fastapi import Request


def get_client_ip(request: Request) -> str:
	"""
	Extract real client IP from request, considering proxy headers.
	Uses the same logic as client_info saving for consistency.
	
	Priority:
	1. X-Forwarded-For header (first IP if multiple)
	2. X-Real-IP header
	3. request.client.host (direct connection)
	
	Returns:
		str: Client IP address or "unknown" if not found
	"""
	# Check X-Forwarded-For header (most common proxy header)
	forwarded_for = request.headers.get("X-Forwarded-For") or request.headers.get(
		"x-forwarded-for"
	)
	if forwarded_for:
		# X-Forwarded-For can contain multiple IPs: "client, proxy1, proxy2"
		# Take the first one (original client IP)
		ip = forwarded_for.split(",")[0].strip()
		if ip:
			return ip

	# Check X-Real-IP header (nginx and some proxies)
	real_ip = request.headers.get("X-Real-IP") or request.headers.get("x-real-ip")
	if real_ip:
		return real_ip.strip()

	# Fallback to direct connection IP
	return request.client.host if request.client else "unknown"


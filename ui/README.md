WAF Admin API (net-GASHA)

Authentication:
 - Dashboard supports Basic auth (env DASHBOARD_USER/DASHBOARD_PASS) and signed session cookie.
 - Many admin endpoints require authentication or bearer token (depends on your env)

Endpoints:
 - GET  /waf-admin/health
    Description: Health & model status
    Returns JSON: { status, timestamp, ml_model_loaded, ml_model_type, ml_buffer_samples, security: {...} }

 - GET  /waf-admin/metrics
    Description: Aggregated metrics (total/blocked/latency/top lists)
    Returns JSON keys: total_requests, allowed_requests, blocked_requests, top_attack_vectors, top_sources, top_targets, methods, status_codes, latencies_ms_sample

 - GET  /waf-admin/events?n=50
    Description: Recent security events (blocks, ml alerts)
    Returns: { events: [...], count }

 - GET  /waf-admin/recent-ml?n=50
    Description: Recent ML samples buffered
    Returns: { samples: [...] }

 - GET  /waf-admin/armory
    Description: (Optional) returns armory / threat status info (depends on WAF build)
    Returns: JSON

 - GET  /waf-admin/modsec-audit?n=50
    Description: Parse last parts of ModSecurity audit.log and return as entries
    Requires auth via dashboard_auth_required

 - GET  /waf-admin/honeypot/suggestions
    Description: Top honeypot-generated candidate rules
    Returns: { suggestions: [{suggestion, score}, ...] }

 - POST /waf-admin/honeypot/promote
    Body: { suggestion: "<token>" }
    Description: Promote honeypot suggestion to rule via create_rule -> returns rule id
    Requires auth

 - POST /waf-admin/block-ip
    Body: { ip: "1.2.3.4", reason: "Brute force" }
    Description: Add an IP to quarantine/permanent block
    Returns: 201 Created or JSON ok

 - GET/POST /waf-admin/rules
    GET: list currently available rules (reads modsecurity dir)
    POST: Not implemented (501) in default / optional extension

 - POST /waf-admin/whitelist
    Body: { rule_id: 941100, reason: "false positive" }
    Description: Appends SecRuleRemoveById to modsecurity/whitelist.conf

 - Notes:
    - Many endpoints require either Basic auth (DASHBOARD_USER/DASHBOARD_PASS) or session cookie set by /dashboard/login
    - If you serve dashboard from a different origin you must enable CORS on the WAF app or proxy the paths via nginx

===================================================================

/dashboard/                       (GET)   -> serves SPA index.html (checks mounted directory)
/dashboard/<path:path>            (GET)   -> serves static files; SPA fallback to index.html
/dashboard/login                  (POST)  -> { "username": "...", "password": "..." } 
                                           returns 200 on success (sets dashboard_session cookie),
                                           401 on invalid credentials -> {"ok":False,"msg":"invalid_credentials"}
                                           credentials validated against env vars DASHBOARD_USER / DASHBOARD_PASS
/dashboard/logout                 (POST)  -> clears cookie, returns {"ok":true}

/waf-admin/health                  (GET)   -> existing WAF health endpoint (returns JSON status)
/waf-admin/armory                  (GET)   -> (protected) admin endpoints if configured (use Basic auth currently)

/* Notes:
 - Client should use 'credentials: "same-origin"' or send cookies in fetch calls.
 - The client optionally stores "Basic <base64>" in localStorage for XHRs; server currently uses cookie auth.
 - Set env:
    DASHBOARD_USER, DASHBOARD_PASS, WAF_HMAC_SECRET (strong), USE_SECURE_COOKIES (1 to set secure cookie)
 - Cookie format is HMAC-signed: username|expiry|hmac
 - Session TTL controlled via DASHBOARD_SESSION_TTL (seconds), default 3600
*/

=======================================================================
WAF Dashboard / API endpoints
-----------------------------
GET  /waf-admin/health           -> health and model status (CORS allowed)
GET  /waf-admin/armory           -> admin info (HTTP Basic auth: WAF_ADMIN_USER/WAF_ADMIN_PASS)
POST /dashboard/login           -> JSON {username,password} sets dashboard_session cookie (HMAC-signed)
POST /dashboard/logout          -> clear session cookie
GET  /waf-admin/protected-info  -> returns protected info (requires dashboard_session cookie)

# API Reference

Base URL: `http://localhost:4000` (development)

## Health

```
GET /health
```

## Properties

```
GET /api/properties?q=sai&bhk=1%20BHK&locality=Taloja%20Phase%201
GET /api/properties/:id
```

## Auth

```
POST /api/auth/login          { email?, phone?, googleToken? }
POST /api/auth/otp/send       { phone }
POST /api/auth/otp/verify     { phone, otp }
GET  /api/auth/me
```

## Listings (Agent/Owner)

```
POST   /api/listings           Create listing
PATCH  /api/listings/:id       Update listing
GET    /api/listings/agent/:id Agent's listings
POST   /api/listings/:id/renew Initiate renewal
```

## Payments

```
POST /api/payments/create-order  { listingId }
POST /api/payments/verify        { razorpayOrderId, razorpayPaymentId, razorpaySignature }
POST /api/payments/renew         { listingId }
```

## Maps / Location Intelligence

```
GET /api/maps/geocode?address=Sai+Riverdale+Sector+37
GET /api/maps/nearby?lat=19.075&lng=73.101&buildingName=Sai+Riverdale&sector=Sector+37
GET /api/maps/distance-matrix?origin=...&destination=...
```

## Admin

```
GET  /api/admin/verification-queue
POST /api/admin/verify/:listingId  { approved, notes }
GET  /api/admin/stats
```

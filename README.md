
# FamilyWall API Client

This repository was forked from https://github.com/CodingButter/familywall-api
This repository contains TypeScript modules for interacting with the FamilyWall API:

1. **FamilyWallClient** - A client that interfaces with the FamilyWall API.
2. **Family** - A supporting module for handling family-related data.

## Installation

```bash
pnpm install
```

### Usage

1. Copy `.env.example` to `.env` and fill in your credentials.
2. Build and run, or use the dev script:

```bash
# Build and run
pnpm build
pnpm start

# Or run directly with tsx
pnpm dev
```

### Features

#### `FamilyWallClient`

The `FamilyWallClient` class allows you to interact with the FamilyWall API to retrieve data such as family members, profiles, and premium account details.

#### Constructor

```typescript
import Client from "./familywall-client.js";

const client = new Client({ timezone: "Europe/London" });
```

- `options` (optional): an object that allows you to specify a `timezone` or other configurations.

#### Methods

- **login(email, password)**
  - Logs into the FamilyWall API using the provided email and password.
  - Automatically handles session and cookies.

- **getWebSocketUrl()**
  - Retrieves the WebSocket URL for live updates.

- **getAllFamily()**
  - Fetches all family-related data, including members, profiles, and settings.

- **getFamily()**
  - Returns a new instance of the `Family` class populated with family data.

#### Example Usage

```typescript
import Client from "./familywall-client.js";

const client = new Client();
await client.login("email@example.com", "yourpassword");

const family = await client.getFamily();
const members = family.getMembers();
console.log(members);
```

---

#### `Family`

The `Family` module provides additional functionality to handle family-related data returned from the FamilyWall API.

#### Methods

- **getMembers()** - Get all family members
- **getMember(firstName)** - Get a specific member by first name
- **getMemberProfile(accountId)** - Get a member's detailed profile
- **getFamilySettings()** - Get family settings
- **getFamilyMedia()** - Get family cover media
- **getMessages()** - Get messaging threads
- **getPremiumAccountDetails()** - Get premium account details
- **await getCalendarEvents()** - List all events on the family calendar
- **await createCalendarEvent()** - Create an event on the family calendar
- **await deleteCalendarEvent()** - Delete an event from the family calendar
- **await updateCalendarEvent()** - Update an event on the family calendar

---

## License

This project is licensed under the MIT License.

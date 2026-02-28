export type ClientUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

export type ClientSession = {
  userId: string;
  name: string;
  email: string;
};

const USERS_KEY = "oms_users";
const SESSION_KEY = "oms_session";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getUsers() {
  return readJson<ClientUser[]>(USERS_KEY, []);
}

export function getSession() {
  return readJson<ClientSession | null>(SESSION_KEY, null);
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

export function signup(input: { name: string; email: string; password: string }) {
  const users = getUsers();
  const email = input.email.trim().toLowerCase();
  if (users.some((u) => u.email.toLowerCase() === email)) {
    return { ok: false as const, error: "An account with that email already exists." };
  }

  const user: ClientUser = {
    id: (typeof crypto !== "undefined" && "randomUUID" in crypto)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    name: input.name.trim(),
    email,
    password: input.password,
    createdAt: new Date().toISOString(),
  };

  const nextUsers = [...users, user];
  writeJson(USERS_KEY, nextUsers);
  const session: ClientSession = { userId: user.id, name: user.name, email: user.email };
  writeJson(SESSION_KEY, session);
  return { ok: true as const, user: session };
}

export function login(input: { email: string; password: string }) {
  const email = input.email.trim().toLowerCase();
  const user = getUsers().find((u) => u.email.toLowerCase() === email && u.password === input.password);
  if (!user) {
    return { ok: false as const, error: "Invalid email or password." };
  }
  const session: ClientSession = { userId: user.id, name: user.name, email: user.email };
  writeJson(SESSION_KEY, session);
  return { ok: true as const, user: session };
}

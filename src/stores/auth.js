import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const AUTH_USER_KEY = 'auth_user'
  const AUTH_TOKEN_KEY = 'auth_token'

  // --- Default users ---
  const defaultUsers = [
    { id: 1, name: 'Admin User', email: 'admin@test.com', password: '123456', role: 'Admin' },
    { id: 2, name: 'John Doe', email: 'john@test.com', password: '123456', role: 'User' }
  ]

  function getStoredUser() {
    try {
      const rawUser = localStorage.getItem(AUTH_USER_KEY)
      return rawUser ? JSON.parse(rawUser) : null
    } catch {
      return null
    }
  }

  function hydrateSession() {
    const storedToken = localStorage.getItem(AUTH_TOKEN_KEY)
    const storedUser = getStoredUser()

    token.value = storedToken
    user.value = storedUser

    if (!storedToken) {
      user.value = null
    }
  }

  // --- State ---
  const user = ref(getStoredUser())
  const token = ref(localStorage.getItem(AUTH_TOKEN_KEY))
  const users = ref([...defaultUsers])

  // --- Getters ---
  const isLoggedIn = computed(() => !!token.value)
  const userName   = computed(() => user.value?.name  || '')
  const userEmail  = computed(() => user.value?.email || '')
  const userRole   = computed(() => user.value?.role  || '')

  // --- Actions ---
  async function login(email) {
    await new Promise(resolve => setTimeout(resolve, 300))

    const safeUser = {
      id: Date.now(),
      name: email?.trim() ? email.trim() : 'Guest User',
      email: email?.trim() ? email.trim() : 'guest@test.com',
      role: 'User'
    }
    const mockToken = `mock-token-${safeUser.id}`

    user.value = safeUser
    token.value = mockToken
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(safeUser))
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken)

    return safeUser
  }

  async function register(name, email, password) {
    await new Promise(resolve => setTimeout(resolve, 300))

    const exists = users.value.find(
      u => u.email.toLowerCase() === email.toLowerCase()
    )
    if (exists) throw new Error('emailExists')

    const createdUser = { id: Date.now(), name, email, password, role: 'User' }
    users.value.push(createdUser)

    const { password: _pw, ...newUser } = createdUser
    const mockToken = `mock-token-${newUser.id}`

    user.value = newUser
    token.value = mockToken
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(newUser))
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken)

    return newUser
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem(AUTH_USER_KEY)
    localStorage.removeItem(AUTH_TOKEN_KEY)
  }

  return {
    user, token,
    isLoggedIn, userName, userEmail, userRole,
    login, register, logout, hydrateSession
  }
})

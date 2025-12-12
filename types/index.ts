// Core type definitions for the coaching platform

// ============ Enums ============
export type UserRole = "coach" | "client";

export type CoachingStyle =
  | "tough_love"
  | "gentle"
  | "analytical"
  | "spiritual";

export type ClientStatus = "active" | "paused" | "completed";

export type ProgramLevel = "beginner" | "intermediate" | "advanced";

export type ProgramStatus = "not_started" | "in_progress" | "completed";

export type MessageSenderType = "client" | "ai" | "coach";

// ============ User & Profile ============
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClientProfile {
  id: string;
  userId: string;
  coachId: string;
  goals: string | Record<string, unknown>; // Can be text or JSON
  challenges: string;
  preferredStyle: CoachingStyle;
  status: ClientStatus;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  user?: User;
  coach?: User;
}

// ============ Programs & Content ============
export interface Program {
  id: string;
  coachId: string;
  title: string;
  description: string;
  level: ProgramLevel;
  isTemplate: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  coach?: User;
  modules?: Module[];
}

export interface ClientProgram {
  id: string;
  clientId: string;
  programId: string;
  startDate: Date;
  currentModuleIndex: number;
  status: ProgramStatus;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  client?: User;
  program?: Program;
}

export interface Module {
  id: string;
  programId: string;
  title: string;
  order: number;
  summary: string;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  program?: Program;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string; // Markdown/rich text
  reflectionPrompt: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  module?: Module;
}

// ============ Check-ins & Habits ============
export interface CheckIn {
  id: string;
  clientId: string;
  date: Date;
  mood: number; // 1-5
  energy: number; // 1-5
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  client?: User;
}

export interface Habit {
  id: string;
  clientId: string;
  name: string;
  description: string;
  targetPerWeek: number;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  client?: User;
  logs?: HabitLog[];
}

export interface HabitLog {
  id: string;
  habitId: string;
  date: Date;
  value: number; // Can represent boolean (0/1) or count
  createdAt: Date;
  updatedAt: Date;
  // Relations
  habit?: Habit;
}

// ============ Conversations & Messages ============
export interface Conversation {
  id: string;
  clientId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  client?: User;
  messages?: Message[];
}

export interface Message {
  id: string;
  conversationId: string;
  senderType: MessageSenderType;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  // Relations
  conversation?: Conversation;
}

// ============ API Response Types ============
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============ Form/Input Types ============
export interface CreateProgramInput {
  title: string;
  description: string;
  level: ProgramLevel;
  isTemplate?: boolean;
}

export interface CreateModuleInput {
  programId: string;
  title: string;
  summary: string;
  order?: number;
}

export interface CreateLessonInput {
  moduleId: string;
  title: string;
  content: string;
  reflectionPrompt: string;
  order?: number;
}

export interface CreateCheckInInput {
  mood: number;
  energy: number;
  notes?: string;
}

export interface CreateHabitInput {
  name: string;
  description?: string;
  targetPerWeek: number;
}

export interface SendMessageInput {
  conversationId?: string; // Optional - creates new conversation if not provided
  content: string;
}

// ============ Dashboard/Stats Types ============
export interface ClientStats {
  totalCheckIns: number;
  currentStreak: number;
  averageMood: number;
  averageEnergy: number;
  habitsCompletedThisWeek: number;
  programProgress: number; // percentage
}

export interface CoachStats {
  totalClients: number;
  activeClients: number;
  totalPrograms: number;
  averageClientProgress: number;
}

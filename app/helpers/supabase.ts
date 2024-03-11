import { createClient } from '@supabase/supabase-js'
import env from '../config/env.config'

const supabase = createClient(env.PROJECT_URL!, env.API_KEY!)

export default supabase;
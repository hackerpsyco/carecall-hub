-- Create users profile table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT,
  timezone TEXT DEFAULT 'Asia/Kolkata',
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create medications table
CREATE TABLE IF NOT EXISTS public.medications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  dose TEXT NOT NULL,
  instructions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reminders table
CREATE TABLE IF NOT EXISTS public.reminders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medication_id UUID NOT NULL REFERENCES public.medications(id) ON DELETE CASCADE,
  time TEXT NOT NULL,
  days_of_week TEXT NOT NULL,
  repeat_strategy JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reminder_logs table
CREATE TABLE IF NOT EXISTS public.reminder_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reminder_id UUID NOT NULL REFERENCES public.reminders(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  transcript TEXT,
  response TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create daily_summaries table
CREATE TABLE IF NOT EXISTS public.daily_summaries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  completed_count INTEGER DEFAULT 0,
  missed_count INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reminder_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_summaries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for medications
CREATE POLICY "Users can view their own medications"
  ON public.medications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own medications"
  ON public.medications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own medications"
  ON public.medications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own medications"
  ON public.medications FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for reminders
CREATE POLICY "Users can view their reminders"
  ON public.reminders FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.medications
      WHERE medications.id = reminders.medication_id
      AND medications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their reminders"
  ON public.reminders FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.medications
      WHERE medications.id = reminders.medication_id
      AND medications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their reminders"
  ON public.reminders FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.medications
      WHERE medications.id = reminders.medication_id
      AND medications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their reminders"
  ON public.reminders FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.medications
      WHERE medications.id = reminders.medication_id
      AND medications.user_id = auth.uid()
    )
  );

-- RLS Policies for reminder_logs
CREATE POLICY "Users can view their reminder logs"
  ON public.reminder_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.reminders
      JOIN public.medications ON medications.id = reminders.medication_id
      WHERE reminders.id = reminder_logs.reminder_id
      AND medications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their reminder logs"
  ON public.reminder_logs FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.reminders
      JOIN public.medications ON medications.id = reminders.medication_id
      WHERE reminders.id = reminder_logs.reminder_id
      AND medications.user_id = auth.uid()
    )
  );

-- RLS Policies for daily_summaries
CREATE POLICY "Users can view their daily summaries"
  ON public.daily_summaries FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their daily summaries"
  ON public.daily_summaries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their daily summaries"
  ON public.daily_summaries FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User'),
    NEW.phone
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
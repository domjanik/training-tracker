export interface IRunningTrainig {
  "session_id": string;
  "date": string;
  "type": string;
  "focus": string;
  "session_goal": string;
  "intensity": {
    "target_rpe_range": [number, number];
    "pace_guidance": string;
    "heart_rate_zone": string;
  },
  "structure": [
    {
      "segment": string;
      "duration_minutes": number;
      "notes": string;
    },
    {
      "segment": string;
      "duration_minutes": number;
      "notes": string;
    },
    {
      "segment": string;
      "duration_minutes": number;
      "notes": string;
    }
  ],
  "risk_watch": string[],
  "abort_conditions": string[],
  "notes": string[]
}

export interface ILiftingTraining {
  "session_id": string;
  "date": string;
  "type": string;
  "focus": string;
  "session_goal": string;
  "global_intensity": {
    "target_rpe_range": [number, number],
    "autoregulation": boolean
  },
  "exercises": [
    {
      "exercise": string;
      "sets": number;
      "reps": number;
      "load_guidance": string;
      "target_rpe": number;
      "rest_seconds": number;
    },
    {
      "exercise": string;
      "sets": number;
      "reps": number;
      "target_rpe": number;
      "rest_seconds": number;
    },
    {
      "exercise": string;
      "sets": number;
      "reps": number;
      "target_rpe": number;
      "rest_seconds": number;
    },
    {
      "exercise": string;
      "sets": number;
      "reps": number;
      "target_rpe": number;
      "rest_seconds": number;
    }
  ],
  "stop_conditions": string[],
  "notes": string[]
};

export interface IClimbingTraining {
  "session_id": string;
  "date": string;
  "type": string;
  "focus": string;
  "session_goal": string;
  "intensity": {
    "difficulty_range": string;
    "rpe_target": [number, number];
  },
  "structure": [
    {
      "block": string;
      "description": string;
      "duration_minutes": number;
    },
    {
      "block": string;
      "description": string;
      "routes": {
        "target_count": number;
        "attempts_per_route": string;
      }
    },
    {
      "block": string;
      "description": string;
      "routes": {
        "target_count": number;
        "constraints": string[];
      }
    }
  ],
  "quality_checks": string[];
  "stop_conditions": string[];
  "notes": string[];
}

export type ITraining = IRunningTrainig | ILiftingTraining | IClimbingTraining;
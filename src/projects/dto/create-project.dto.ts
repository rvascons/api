export class CreateProjectDto {
  id?: number;
  title: string;
  description?: string;
  link?: string;
  deployed?: boolean;
  url?: string;
  hasInterface?: boolean;
  interface?: string;
  studies?: any[];
  created_at?: Date;
  updated_at?: Date;
}

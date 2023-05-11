export class CreateStudyDto {
  id?: number;
  title?: string;
  description?: string;
  link?: string;
  projectId?: number;
  created_at?: Date;
  updated_at?: Date;
}

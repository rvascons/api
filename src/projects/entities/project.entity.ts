import { Study } from '../../studies/entities/study.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column('text', { default: 'No description provided.' })
  description: string;

  @Column({ default: 'No link provided.' })
  link: string;

  @Column({ default: false })
  deployed: boolean;

  @Column({ default: 'No URL provided.' })
  url: string;

  @Column({ default: false })
  hasInterface: boolean;

  @Column({ default: 'No image provided.' })
  interfaceUrl: string;

  @OneToMany(() => Study, (study) => study.project)
  studies: Study[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

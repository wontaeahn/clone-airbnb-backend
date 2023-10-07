import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProvider } from '../user.interface';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ default: UserProvider.LOCAL })
  provider: string;

  @Column({ nullable: true })
  providerId: string;

  @Column({ nullable: true })
  accessToken: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ type: 'datetime', nullable: true })
  expiresAt: Date;
}

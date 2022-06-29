import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// Create an Auth entity
export class Auth extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        unsigned: true
    })
    id: number;

    @Column({
        type: 'varchar',
        name: 'email',
        length: 255,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        name: 'password',
        length: 255
    })
    password: string;

    @CreateDateColumn({
        type: 'timestamp'
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp'
    })
    updated_at: Date;
}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { USER } from 'src/common/models/models';
import { UserService } from './user.service';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule,
    MongooseModule.forFeatureAsync([
      {
        name: USER.name,
        useFactory: () => UserSchema,
      },
    ]),

  ],
  controllers: [UserController],
  providers: [UserService],
  // exports: [UserService],
})
export class UserModule {}

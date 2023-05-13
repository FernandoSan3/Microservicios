import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    
    MongooseModule.forRoot(process.env.URI_MONGODB,{
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
},
)
export class AppModule {
}

import { IsString } from 'class-validator';

//dto(dtat transfer object):
// A DTO defines the shape of data your application expects to receive or transfer.
// An object that defines the structure of data.
export class CreateMessageDto {
  @IsString()
  content: string;
}

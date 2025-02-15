import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export class getUsersArgs {
    @Field(() => String)
    @IsArray()
    userIds: string[];
}
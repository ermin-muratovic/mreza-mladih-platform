import {Injectable} from '@nestjs/common';
import {Member, Message} from '@mreza-mladih-platform/api-interfaces';

@Injectable()
export class AppService {

  private members = [];

  getData(): Message {
    return {message: 'Welcome to api!'};
  }

  getMembers(): Member[] {
    // TODO: get Members from MongoDB
    return this.members;
  }

  addMember(member): Member {
    // TODO: save Member to MongoDB
    this.members.push(member);
    return member;
  }
}

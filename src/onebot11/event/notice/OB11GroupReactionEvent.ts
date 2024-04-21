import { OB11GroupNoticeEvent } from "./OB11GroupNoticeEvent";

export class OB11GroupReactionEvent extends OB11GroupNoticeEvent {
    notice_type = "group_reaction"
    msgId: string
    faceId: number
    faceTypeId: number
    constructor(groupId: number, userId: number, msgId:string, faceId:number, faceTypeId:number) {
        super();
        this.group_id = groupId;
        this.user_id = userId;
        this.msgId = msgId;
        this.faceId = faceId;
        this.faceTypeId = faceTypeId;
    }
}
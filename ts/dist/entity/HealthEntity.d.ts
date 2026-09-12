import { KorpoProEntityBase } from '../KorpoProEntityBase';
import type { KorpoProSDK } from '../KorpoProSDK';
import type { Control } from '../types';
import type { Health, HealthListMatch } from '../KorpoProTypes';
declare class HealthEntity extends KorpoProEntityBase<Health> {
    constructor(client: KorpoProSDK, entopts: any);
    make(this: HealthEntity): HealthEntity;
    list(this: any, reqmatch?: HealthListMatch, ctrl?: Control): Promise<HealthEntity[]>;
}
export { HealthEntity };

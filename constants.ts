import { Brand, Material, Profile } from 'typings';

export const BRAND_OPTIONS: Brand[] = [
    { value: 'gmk', label: 'GMK' },
    { value: 'epbt', label: 'E-PBT' },
    { value: 'jtk', label: 'JTK' },
    { value: 'sp', label: 'SP' },
    { value: 'infinikey', label: 'Infinikey' },
    { value: 'keyreative', label: 'Keyreative' },
    { value: 'taihao', label: 'Tai-Hao' },
    { value: 'maxkey', label: 'MaxKey' },
    { value: 'zfrontier', label: 'zFrontier' },
    { value: 'leopold', label: 'Leopold' },
    { value: 'ducky', label: 'Ducky' },
];

export const MATERIAL_OPTIONS: Material[] = [
    { value: 'abs', label: 'ABS' },
    { value: 'pbt', label: 'PBT' },
];

export const PROFILE_OPTIONS: Profile[] = [
    { label: 'Cherry', value: 'cherry' },
    { label: 'SA', value: 'sa' },
    { label: 'DSA', value: 'dsa' },
    { label: 'XDA', value: 'xda' },
    { label: 'MT3', value: 'mt3' },
    { label: 'KAT', value: 'kat' },
    { label: 'KAM', value: 'kam' },
    { label: 'OEM', value: 'oem' },
    { label: 'MDA', value: 'mda' },
    { label: 'DCS', value: 'dcs' },
];

export const INTEREST_CHECK: 'ic' = 'ic';
export const WAITING_FOR_GROUPBUY: 'waiting' = 'waiting';
export const IN_GROUP_BUY: 'gb' = 'gb';
export const ENDED: 'ended' = 'ended';
export const AVAILABILITY: string[] = [INTEREST_CHECK, WAITING_FOR_GROUPBUY, IN_GROUP_BUY, ENDED];

export const AVAILABILITY_FILTER: 'availability' = 'availability';
export const BRAND_FILTER: 'brand' = 'brand';
export const CAP_FILTER: 'cap' = 'cap';

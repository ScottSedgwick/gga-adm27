/**
 * Created by Scott on 5/12/2014.
 */

interface Guide {
    name: string;
    unit: string;
    dob: Date;
    medicare_number: string;
    medicare_reference: string;
    medicare_address: string;
    private_health_cover: boolean;
    private_health_fund: string;
    private_health_number: string;
    ambulance_cover: boolean;
    medical_emergency_contact: string;
    medical_emergency_phone: string;
    medical_emergency_mobile: string;
    guide_membership_number: string;
    guide_membership_expiry: Date;
    taking_medication: boolean;
    first_aider_info: string;
    contact_lenses: boolean;
    last_tetanus_shot: Date;
    allergy_details: string;
    chronic_illness: boolean;
    chronic_illness_details: string;
    knows_about_menstruation: boolean;
    special_food_requirements: string;
    can_take_paracetamol: boolean;
    swimming_distance: string;
    suffer_asthma: boolean;
    suffer_bed_wetting: boolean;
    suffer_diabetes: boolean;
    suffer_epilepsy: boolean;
    suffer_sleepwalking: boolean;
    suffer_fainting: boolean;
    suffer_hay_fever: boolean;
    suffer_nosebleeds: boolean;
    suffer_severe_allergies: boolean;
    activity_exceptions: string;
}

interface Guardian {
    name: string;
    address: string;
    state: string;
    postcode: string;
    business_phone: string;
    home_phone: string;
    mobile_phone: string;
}

interface Activity {
    name: string;
    date_start: Date;
    date_end: Date;
    fee_enclosed: string;
    location: string;
    leader: string;
    emergency_contact: string;
    emergency_phone: string;
    total_cost: string;
    deposit: string;
    deposit_due: Date;
    balance: string;
    balance_due: Date;
    activities: string;
    travel_arrangements: string;
}

class GGAData {
    static KEY_GUIDES     : string = "gga.adm27.guides";
    static KEY_GUARDIANS  : string = "gga.adm27.guardians";
    static KEY_ACTIVITIES : string = "gga.adm27.activities";
    static guides : Guide[] = [];
    static guardians : Guardian[] = [];
    static activities : Activity[] = [];
}
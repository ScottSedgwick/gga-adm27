/**
 * Created by Scott on 5/12/2014.
 */

/// <reference path="types.ts" />
/// <reference path="gga_pdf.ts" />

function storeGuides() {
    localStorage.setItem(GGAData.KEY_GUIDES, JSON.stringify(GGAData.guides));
}

function storeActivities() {
    localStorage.setItem(GGAData.KEY_ACTIVITIES, JSON.stringify(GGAData.activities));
}

function storeGuardians() {
    localStorage.setItem(GGAData.KEY_GUARDIANS, JSON.stringify(GGAData.guardians));
}

function loadAll() {
    loadGuides();
    loadActivities();
    loadGuardians();
}

function loadGuides() {
    var values = JSON.parse(localStorage.getItem(GGAData.KEY_GUIDES));
    if (values) {
        GGAData.guides = values;
    }
}

function loadActivities() {
    var values = JSON.parse(localStorage.getItem(GGAData.KEY_ACTIVITIES));
    if (values) {
        GGAData.activities = values;
    }
}

function loadGuardians() {
    var values = JSON.parse(localStorage.getItem(GGAData.KEY_GUARDIANS));
    if (values) {
        GGAData.guardians = values;
    }
}

function clearSelect(selectbox) {
    for (var i = selectbox.options.length-1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

function clearGuides(document) {
    clearSelect(document.getElementById("guides"));
}

function clearGuardians(document) {
    clearSelect(document.getElementById("guardians"));
}

function clearActivities(document) {
    clearSelect(document.getElementById("activities"));
}

function populateAll(document) {
    populateGuides(document);
    populateActivities(document);
    populateGuardians(document);
}

function populateSelect(select, elements) {
    for (var i = 0; i < elements.length; i++) {
        var option = document.createElement("option");
        option.text = elements[i].name;
        select.add(option);
    }
}

function populateGuides(document) {
    populateSelect(document.getElementById("guides"), GGAData.guides);
}

function populateActivities(document) {
    populateSelect(document.getElementById("activities"), GGAData.activities);
}

function populateGuardians(document) {
    populateSelect(document.getElementById("guardians"), GGAData.guardians);
}

function newGuide() {
    window.location.href = "newguide.html";
}

function newGuardian() {
    window.location.href = "newguardian.html";
}

function newActivity() {
    window.location.href = "newactivity.html";
}

function deleteElement(elements, index) {
    if (index > -1) {
        elements.splice(index, 1);
    }
}
function deleteGuide(document) {
    deleteElement(GGAData.guides, document.getElementById("guides").selectedIndex);
    storeGuides();
    loadGuides();
    clearGuides(document);
    populateGuides(document);
}

function deleteGuardian(document) {
    deleteElement(GGAData.guardians, document.getElementById("guardians").selectedIndex);
    storeGuardians();
    loadGuardians();
    clearGuardians(document);
    populateGuardians(document);
}

function deleteActivity(document) {
    deleteElement(GGAData.activities, document.getElementById("activities").selectedIndex);
    storeActivities();
    loadActivities();
    clearActivities(document);
    populateActivities(document);
}

function submitGuide(document) {
    var guide : Guide;
    guide = {
        name:                       document.getElementById("name").value,         //string;
        unit:                       document.getElementById("unit").value,         //string;
        dob:                        document.getElementById("dob").value, //Date;
        medicare_number:            document.getElementById("medicare_number").value,         //string;
        medicare_address:           document.getElementById("medicare_address").value,         //string;
        medicare_reference:         document.getElementById("medicare_reference").value,         //string;
        private_health_cover:       document.getElementById("private_health_cover").checked,      //boolean;
        private_health_fund:        document.getElementById("private_health_fund").value,         //string;
        private_health_number:      document.getElementById("private_health_number").value,         //string;
        ambulance_cover:            document.getElementById("ambulance_cover").checked,      //boolean;
        medical_emergency_contact:  document.getElementById("medical_emergency_contact").value,         //string;
        medical_emergency_phone:    document.getElementById("medical_emergency_phone").value,         //string;
        medical_emergency_mobile:   document.getElementById("medical_emergency_mobile").value,         //string;
        guide_membership_number:    document.getElementById("guide_membership_number").value,         //string;
        guide_membership_expiry:    document.getElementById("guide_membership_expiry").value, //Date;
        taking_medication:          document.getElementById("taking_medication").checked,      //boolean;
        first_aider_info:           document.getElementById("first_aider_info").value,         //string;
        contact_lenses:             document.getElementById("contact_lenses").checked,      //boolean;
        last_tetanus_shot:          document.getElementById("last_tetanus_shot").value, //Date;
        allergy_details:            document.getElementById("allergy_details").value,         //string;
        chronic_illness:            document.getElementById("chronic_illness").checked,      //boolean;
        chronic_illness_details:    document.getElementById("chronic_illness_details").value,         //string;
        knows_about_menstruation:   document.getElementById("knows_about_menstruation").checked,      //boolean;
        special_food_requirements:  document.getElementById("special_food_requirements").value,         //string;
        can_take_paracetamol:       document.getElementById("can_take_paracetamol").checked,      //boolean;
        swimming_distance:          document.getElementById("swimming_distance").value,         //string;
        suffer_asthma:              document.getElementById("suffer_asthma").checked,      //boolean;
        suffer_bed_wetting:         document.getElementById("suffer_bed_wetting").checked,      //boolean;
        suffer_diabetes:            document.getElementById("suffer_diabetes").checked,      //boolean;
        suffer_epilepsy:            document.getElementById("suffer_epilepsy").checked,      //boolean;
        suffer_sleepwalking:        document.getElementById("suffer_sleepwalking").checked,      //boolean;
        suffer_fainting:            document.getElementById("suffer_fainting").checked,      //boolean;
        suffer_hay_fever:           document.getElementById("suffer_hay_fever").checked,      //boolean;
        suffer_nosebleeds:          document.getElementById("suffer_nosebleeds").checked,      //boolean;
        suffer_severe_allergies:    document.getElementById("suffer_severe_allergies").checked,       //boolean;
        activity_exceptions:        document.getElementById("activity_exceptions").value         //string;
    };
    GGAData.guides.push(guide);
    storeGuides();
    window.location.href = "index.html";
}

function submitGuardian(document) {
    var guardian : Guardian;
    guardian = {
        name:           document.getElementById("name").value,
        address:        document.getElementById("address").value,
        state:          document.getElementById("state").value,
        postcode:       document.getElementById("postcode").value,
        business_phone: document.getElementById("business_phone").value,
        home_phone:     document.getElementById("home_phone").value,
        mobile_phone:   document.getElementById("mobile_phone").value
    };
    GGAData.guardians.push(guardian);
    storeGuardians();
    window.location.href = "index.html";
}

function submitActivity(document) {
    var activity : Activity;
    activity = {
        name:                   document.getElementById("name").value,
        date_start:             document.getElementById("date_start").value,
        date_end:               document.getElementById("date_end").value,
        fee_enclosed:           document.getElementById("fee_enclosed").value,
        location:               document.getElementById("location").value,
        leader:                 document.getElementById("leader").value,
        emergency_contact:      document.getElementById("emergency_contact").value,
        emergency_phone:        document.getElementById("emergency_phone").value,
        total_cost:             document.getElementById("total_cost").value,
        deposit:                document.getElementById("deposit").value,
        deposit_due:            document.getElementById("deposit_due").value,
        balance:                document.getElementById("balance").value,
        balance_due:            document.getElementById("balance_due").value,
        activities:             document.getElementById("activities").value,
        travel_arrangements:    document.getElementById("travel_arrangements").value
    };
    GGAData.activities.push(activity);
    storeActivities();
    window.location.href = "index.html";
}

function cancelNew() {
    window.location.href = "index.html";
}

function checkLocalStorage() {
    if (typeof(Storage) == "undefined") {
        window.location.href = "nolocalstorage.html";
    }
}

function printDoc(document) {
    var index: number;
    var guide: Guide;
    index = document.getElementById("guides").selectedIndex;
    if (index == -1) {
        //alert("Please select a Guide.");
        guide = GGAData.guides[0];
    } else {
        guide = GGAData.guides[index];
    }
    var guardian: Guardian;
    index = document.getElementById("guardians").selectedIndex;
    if (index == -1) {
        //alert("Please select a Parent or Guardian.");
        guardian = GGAData.guardians[0];
    } else {
        guardian = GGAData.guardians[index];
    }
    var activity: Activity;
    index = document.getElementById("activities").selectedIndex;
    if (index == -1) {
        //alert("Please select an activity.");
        activity = GGAData.activities[0];
    } else {
        activity = GGAData.activities[index];
    }
    if (guide && guardian && activity) {
        printADM27(guide, guardian, activity);
    }
}

window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
};
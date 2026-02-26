import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type Contact = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Notification = {
    id : Nat;
    title : Text;
    body : Text;
    category : NotificationCategory;
    timestamp : Time.Time;
  };

  type NotificationCategory = {
    #IncomeTax;
    #FinanceBill;
    #Budget;
    #GST;
    #Customs;
    #SEEPZ_SEZ;
    #SEBI;
    #FinanceMarket;
  };

  type Partner = {
    id : Nat;
    name : Text;
    designation : Text;
    qualifications : Text;
    specialization : [Text];
    experienceYears : Nat;
  };

  let contacts = Map.empty<Nat, Contact>();
  var nextContactId = 0;

  let notifications = Map.empty<Nat, Notification>();
  var nextNotificationId = 0;

  let partners = Map.empty<Nat, Partner>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, message : Text) : async Nat {
    let contact : Contact = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contacts.add(nextContactId, contact);
    let id = nextContactId;
    nextContactId += 1;
    id;
  };

  public query ({ caller }) func getContact(id : Nat) : async ?Contact {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contacts");
    };
    contacts.get(id);
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all contacts");
    };
    contacts.values().toArray();
  };

  public query ({ caller }) func getContactCount() : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact count");
    };
    contacts.size();
  };

  public shared ({ caller }) func addNotification(title : Text, body : Text, category : NotificationCategory) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add notifications");
    };
    let notification : Notification = {
      id = nextNotificationId;
      title;
      body;
      category;
      timestamp = Time.now();
    };

    notifications.add(nextNotificationId, notification);
    let id = nextNotificationId;
    nextNotificationId += 1;
    id;
  };

  public query ({ caller }) func getNotification(id : Nat) : async ?Notification {
    notifications.get(id);
  };

  public query ({ caller }) func getAllNotifications() : async [Notification] {
    notifications.values().toArray();
  };

  public query ({ caller }) func getNotificationsByCategory(category : NotificationCategory) : async [Notification] {
    let filtered = List.empty<Notification>();
    for (notification in notifications.values()) {
      if (notification.category == category) {
        filtered.add(notification);
      };
    };
    filtered.toArray();
  };

  public query ({ caller }) func getPartners() : async [Partner] {
    partners.values().toArray();
  };
};

import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import List "mo:core/List";



actor {
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
    bio : Text;
    expertise : [Text];
    photoUrl : Text;
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
    contacts.get(id);
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.values().toArray();
  };

  public query ({ caller }) func getContactCount() : async Nat {
    contacts.size();
  };

  public shared ({ caller }) func addNotification(title : Text, body : Text, category : NotificationCategory) : async Nat {
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

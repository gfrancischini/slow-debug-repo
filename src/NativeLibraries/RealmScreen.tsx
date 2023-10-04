import React from 'react';
import Realm from 'realm';
import RealmPlugin from 'realm-flipper-plugin-device';
import { createRealmContext } from '@realm/react';
import { Text, View, NativeModules } from 'react-native';

// Define your object model
class Profile extends Realm.Object<Profile> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Profile],
};

// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);


const realmRef = React.createRef<Realm>();    

// realmRef.current.
// Expose a realm
export function RealmScreen() {
  return (
    <RealmProvider realmRef={realmRef}>
      <RestOfApp />
    </RealmProvider>
  );
}

const RestOfApp = () => {
  // const [selectedProfileId, setSelectedProfileId] = useState(objectPrimaryKey);
  const profiles = useQuery(Profile);

  const realm = useRealm();

  const addProfile = () => {
    realm.write(() => {
      realm.create('Profile', {
        name: 'Parelli',
        _id: new Realm.BSON.ObjectId(),
      });
    });
  };

  return <View>
    <RealmPlugin realms={[realm]} />
    <Text>Profiles</Text>
    {profiles.map((profile) => {
      return <Text key={profile._id.toString()}>{profile.name}</Text>
    })}
    <Text onPress={addProfile}>Add Profile</Text>
  </View>
}
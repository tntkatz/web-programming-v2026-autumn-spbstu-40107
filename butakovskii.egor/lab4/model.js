export class User {
  constructor(id, name, friends = []) {
    this.id = Number(id);
    this.name = String(name);
    this.friends = Array.isArray(friends) ? friends.map(Number) : [];
  }

  addFriend(friendId) {
    const id = Number(friendId);
    if (!this.friends.includes(id)) {
      this.friends.push(id);
    }
  }

  removeFriend(friendId) {
    const id = Number(friendId);
    this.friends = this.friends.filter((fId) => fId !== id);
  }

  get friendCount() {
    return this.friends.length;
  }
}

export function groupUsersByFriendCount(users) {
  const result = {};
  for (const user of users) {
    const count = user.friendCount;
    if (!result[count]) {
      result[count] = [];
    }
    result[count].push(user);
  }
  return result;
}

export function getUniqueFriends(users) {
  const set = new Set();
  for (const user of users) {
    for (const fId of user.friends) {
      set.add(fId);
    }
  }
  return Array.from(set);
}

export function getUsersByCommonFriend(users, friendId) {
  const targetId = Number(friendId);
  return users.filter((user) => user.friends.includes(targetId));
}

export function getUsersWithFriendsGreaterThan(users, minFriends) {
  const threshold = Number(minFriends);
  return users.filter((user) => user.friendCount > threshold);
}

export function getUsersWithoutFriends(users) {
  return users.filter((user) => user.friendCount === 0);
}
